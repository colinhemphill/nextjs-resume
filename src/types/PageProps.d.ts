interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
