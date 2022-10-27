<template>
  <div>
    <h1>Post page (vuex)</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search"
    />
    <div class="app__btns">
      <my-button @click="showDialog">Create post</my-button>
      <my-select
        :options="sortOptions"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="setCreatePost" />
    </my-dialog>

    <post-list
      @delete="deletePost"
      :posts="sortedAndSearchedPosts"
      v-if="!isLoading"
    />
    <div v-else class="loading"><my-loading /></div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: { PostList, PostForm },
  data: () => ({
    dialogVisible: false,
  }),

  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    ...mapMutations({
      setSearchQuery: "post/setSearchQuery",
      setPage: "post/setPage",
      setSelectedSort: "post/setSelectedSort",
      setCreatePost: "post/createPost",
      deletePost: "post/deletePost",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
  },
  watch: {
    posts() {
      this.dialogVisible = false;
    },
  },
  mounted() {
    if (!this.posts.length) {
      this.fetchPosts();
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isLoading: (state) => state.post.isLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchPosts",
    }),
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
}
.observer {
  opacity: 0;
  height: 30px;
  background: green;
}
</style>
