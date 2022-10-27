<template>
  <form @submit.prevent>
    <h3>Post create</h3>
    <my-input v-focus v-model="post.title" type="text" placeholder="Title" />
    <my-input v-model="post.body" type="text" placeholder="Description" />
    <p class="error" :class="{ active: error }">Заполните поля</p>
    <my-button @click="createPost" type="submit" class="btn">Create</my-button>
  </form>
</template>

<script>
export default {
  data: () => ({
    post: {
      title: "",
      body: "",
    },
    error: false,
  }),
  methods: {
    createPost() {
      if (!this.post.title || !this.post.body) {
        this.error = true;
        return;
      }

      this.error = false;

      const newPost = {
        id: Date.now(),
        title: this.post.title,
        body: this.post.body,
      };
      this.post.body = "";
      this.post.title = "";

      this.$emit("create", newPost);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
}
.error {
  opacity: 0;
  color: var(--red);
  transition: 0.3s;
  font-size: 14px;
  margin-top: 10px;
}

.error.active {

  opacity: 1;
}
</style>
