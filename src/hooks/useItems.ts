import { useMemo } from "react";

export function useSortedItems<T>(posts: T[], sort: string): T[] {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a: any, b: any) => a[sort].localeCompare(b[sort]))
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
  }, [posts, search, sortedPosts]);
  return searchedPosts;
}
