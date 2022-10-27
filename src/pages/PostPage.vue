<template>
  <div>
    <h1>Post page</h1>
    <my-input
      class="post__search"
      v-model="searchQuery"
      placeholder="Search"
    />
    <div class="app__btns">
      <my-button @click="showDialog">Create post</my-button>
      <my-select :options="sortOptions" v-model="selectedSort" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      @delete="deletePost"
      :posts="sortedAndSearchPosts"
      v-if="!isLoading"
    />
    <div v-else class="loading"><my-loading /></div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: { PostList, PostForm },
  data: () => ({
    posts: [],
    dialogVisible: false,
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
  methods: {
    createPost(post) {
      this.posts = [post, ...this.posts];
      this.dialogVisible = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.posts,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Error");
      } finally {
        this.isLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Error");
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>
h1 {
  font-size: 20px;
  font-weight: 500;
}
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
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
