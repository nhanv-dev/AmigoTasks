import { BaseEntity } from "./entities/base.entity";
import { BaseRepositoryInterface } from "./interfaces/base.interface.repository";
import { BaseServiceInterface } from "./interfaces/base.interface.service";

export abstract class BaseServiceAbstract<T extends BaseEntity> implements BaseServiceInterface<T> {
  constructor(private readonly repository: BaseRepositoryInterface<T>) {}

  async create(createDto: T | any): Promise<T> {
    return await this.repository.create(createDto);
  }

  async countItem(filter: object = {}, options: object = {}): Promise<number> {
    return await this.repository.countItem(filter, options);
  }

  async findAll(filter?: object, options?: object): Promise<T[]> {
    return await this.repository.findAll(filter || {}, options);
  }

  async findOne(id: string) {
    return await this.repository.findOneById(id);
  }

  async update(id: string, updateDto: Partial<T>) {
    return await this.repository.update(id, updateDto);
  }

  async remove(id: string) {
    return await this.repository.softDelete(id);
  }
}
