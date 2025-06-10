import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchTrendingGifs, searchGifs } from "../actions/giphy";

export const useGifs = () => {
  const [query, setQuery] = useState("");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["gifs", query],
    queryFn: ({ pageParam }) =>
      query
        ? searchGifs({ query, pageParam })
        : fetchTrendingGifs({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 25) return undefined;
      return allPages.length * 25;
    },
    staleTime: 1000 * 60 * 5,
  });

  const gifs = data?.pages.flat() || [];

  return {
    gifs,
    query,
    setQuery,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  };
};
