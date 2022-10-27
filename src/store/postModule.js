import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    posts: [],
    isLoading: false,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      {
        value: "title",
        name: "By title",
      },
      {
        value: "body",
        name: "By description",
      },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    sortedAndSearchPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, boolean) {
      state.isLoading = boolean;
    },
    setTotalPages(state, number) {
      state.totalPages = number;
    },
    setPage(state, number) {
      state.page = number;
    },
    setSelectedSort(state, sort) {
      state.selectedSort = sort;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    createPost(state, post) {
      state.posts = [post, ...state.posts];
      state.dialogVisible = false;
    },
    deletePost(state, post) {
      state.posts = state.posts.filter((p) => p.id !== post.id);
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );

        commit("setPosts", response.data);
      } catch (e) {
        alert("Error");
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ commit, state }) {
      try {
        commit("setPage", state.page + 1);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (e) {
        alert("Error");
      }
    },
  },
};
