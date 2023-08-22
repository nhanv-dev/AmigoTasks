import { FilterQuery, Model, QueryOptions } from 'mongoose';
import { BaseEntity } from '../entities/base.entity';
import { BaseRepositoryInterface } from '../interfaces/base.interface.repository';

export abstract class BaseRepositoryAbstract<T extends BaseEntity>
  implements BaseRepositoryInterface<T>
{
  protected constructor(private readonly model: Model<T>) {
    this.model = model;
  }

  async create(dto: Partial<T> | any): Promise<T> {
    const created_data = await this.model.create(dto);
    return created_data.save() as any;
  }

  async countItem(
    condition: FilterQuery<T> = {},
    options: QueryOptions<T> = {},
  ): Promise<number> {
    const countResult = await this.model
      .countDocuments({ ...condition, deletedAt: null }, options)
      .exec();
    return countResult;
  }

  async findOneById(id: string): Promise<T | null> {
    const item = await this.model.findById(id);
    return item?.deletedAt ? null : (item as any);
  }

  async findOneByCondition(condition = {}): Promise<T> {
    return this.model
      .findOne({
        ...condition,
        deletedAt: null,
      })
      .exec() as any;
  }

  async findAll(
    condition?: FilterQuery<T>,
    options?: QueryOptions<T>,
  ): Promise<T[]> {
    return this.model
      .find({ ...condition, deletedAt: null }, options?.projection, options)
      .exec();
  }

  async update(id: string, dto: Partial<T>): Promise<T> {
    return this.model.findOneAndUpdate({ _id: id, deletedAt: null }, dto, {
      new: true,
    }) as any;
  }

  async softDelete(id: string): Promise<boolean> {
    const delete_item = await this.model.findById(id);
    if (!delete_item) {
      return false;
    }

    return !!(await this.model
      .findByIdAndUpdate<T>(id, { deletedAt: new Date() })
      .exec());
  }

  async permanentlyDelete(id: string): Promise<boolean> {
    const delete_item = await this.model.findById(id);
    if (!delete_item) {
      return false;
    }
    return !!(await this.model.findByIdAndDelete(id));
  }
}
