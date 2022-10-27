import { computed, ref } from "vue";

export default function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref("");
  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  const setSearchQuery = (query) => (searchQuery.value = query);

  return {
    searchQuery,
    sortedAndSearchedPosts,
    setSearchQuery,
  };
}
