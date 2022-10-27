<template>
  <div class="post">
    <div class="post__info">
      <p class="post__title">{{ post.title }}</p>
      <p class="post__text">{{ post.body }}</p>
    </div>
    <div class="post__btns">
      <v-icon
        name="bi-arrow-90deg-left"
        class="open"
        @click="$router.push(`/post/${post.id}`)"
      />

      <v-icon class="delete" name="co-delete" @click="$emit('delete')" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  position: relative;
  padding: 15px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border-bottom: 1px solid var(--border);
}

.post__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.post__title {
  color: var(--text);
  font-weight: 500;
  text-transform: capitalize;
}

.post__text {
  color: gray;
}

.post__btns {
  display: flex;
  gap: 30px;
}

.open {
  background: none;
  color: var(--blue);
  transform: scale(1.3);
  cursor: pointer;
}

.delete {
  color: var(--red);
  transform: scale(1.4);
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .post {
    flex-direction: column;
  }
  .post__info {
    width: 100%;
  }
  .post__btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
