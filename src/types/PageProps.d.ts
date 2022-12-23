interface PageProps {
  params: { secret?: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
