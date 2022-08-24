import { useMemo } from "react";

export function useSortedItems<T>(posts: T[], sort: string): T[] {
  const sortedPosts = useMemo(() => {
    if (sort === "title") {
      return [...posts].sort((a: any, b: any) =>
        a[sort].localeCompare(b[sort])
      );
    }
    if (sort === "maxPrice") {
      return [...posts].sort((a: any, b: any) => b["price"] - a["price"]);
    }
    if (sort === "minPrice") {
      return [...posts].sort((a: any, b: any) => a["price"] - b["price"]);
    }
    return posts;
  }, [posts, sort]);
  return sortedPosts;
}

export function useItems<T>(posts: T[], search: string, sort: string): T[] {
  const sortedPosts = useSortedItems(posts, sort);
  const searchedPosts: T[] = useMemo(() => {
    if (search) {
      return sortedPosts.filter((p: any) =>
        p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
    return sortedPosts;
  }, [search, sortedPosts]);
  return searchedPosts;
}
