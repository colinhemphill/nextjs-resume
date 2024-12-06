export interface PageProperties {
  params: Promise<{
    secret?: string;
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}
