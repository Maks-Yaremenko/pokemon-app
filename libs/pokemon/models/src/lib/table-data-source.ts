export interface TableDataSource {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}
