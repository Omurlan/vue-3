<template>
  <div>
    <h1>Post page (composition api)</h1>
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
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      @delete="deletePost"
      :posts="sortedAndSearchedPosts"
      v-if="!isLoading"
    />
    <div class="loading" v-else><my-loading /></div>
    <div v-intersection="fetchMore" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import usePosts from "@/hooks/usePosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import useSortedPosts from "@/hooks/useSortedPosts";

export default {
  components: { PostList, PostForm },
  data: () => ({
    dialogVisible: false,
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

  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
  },
  watch: {
    posts() {
      this.dialogVisible = false;
    },
  },

  setup() {
    const { isLoading, totalPages, posts, fetchMore, createPost, deletePost } =
      usePosts(10);
    const { sortedPosts, selectedSort, setSelectedSort } =
      useSortedPosts(posts);
    const { sortedAndSearchedPosts, searchQuery, setSearchQuery } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      sortedAndSearchedPosts,
      isLoading,
      selectedSort,
      searchQuery,
      totalPages,
      fetchMore,
      createPost,
      deletePost,
      setSelectedSort,
      setSearchQuery,
    };
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
