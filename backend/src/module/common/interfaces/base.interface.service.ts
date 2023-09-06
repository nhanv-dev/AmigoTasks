export interface Write<T> {
  create(item: T | any): Promise<T>;
  update(id: string, item: Partial<T>): Promise<T>;
  remove(id: string): Promise<boolean>;
}

export interface Read<T> {
  countItem(filter?: object, options?: object): Promise<number>;
  findAll(filter?: object, options?: object): Promise<T[]>;
  findOne(id: string): Promise<T | null>;
}

export interface BaseServiceInterface<T> extends Write<T>, Read<T> {}
