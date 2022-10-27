import axios from "axios";
import { onMounted, ref } from "vue";

export default function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isLoading = ref(true);
  const page = ref(1);

  const fetching = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          params: {
            _page: page.value,
            _limit: limit,
          },
        }
      );
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
      posts.value = response.data;
    } catch (e) {
      alert("Error");
    } finally {
      isLoading.value = false;
    }
  };

  const fetchMore = async () => {
    try {
      page.value += 1;
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          params: {
            _page: page.value,
            _limit: limit,
          },
        }
      );
      posts.value = [...posts.value, ...response.data];
    } catch (e) {
      alert("Error");
    }
  };

  const createPost = (post) => {
    posts.value = [post, ...posts.value];
  };

  const deletePost = (post) => {
    posts.value = posts.value.filter((p) => p.id !== post.id);
  };

  onMounted(fetching);

  return {
    posts,
    totalPages,
    isLoading,
    page,
    fetchMore,
    createPost,
    deletePost,
  };
}
