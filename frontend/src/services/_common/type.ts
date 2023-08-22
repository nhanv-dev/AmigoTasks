export type Base = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type BaseWithoutId = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type Pagination = {
  page: number | 1,
  pageSize: number | 10,
}