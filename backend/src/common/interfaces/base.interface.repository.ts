export interface BaseRepositoryInterface<T> {
  create(dto: T | any): Promise<T>;

  countItem(condition: object, options: object): Promise<number>;

  findOneById(id: string, projection?: string): Promise<T | null>;

  findOneByCondition(condition?: object, projection?: string): Promise<T | null>;

  findAll(condition: object, options?: object): Promise<T[]>;

  update(id: string, dto: Partial<T>): Promise<T>;

  softDelete(id: string): Promise<boolean>;

  permanentlyDelete(id: string): Promise<boolean>;
}
