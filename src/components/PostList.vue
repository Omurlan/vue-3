<template>
  <div v-if="posts.length > 0">
    <h3>Post List</h3>
    <div class="post-list">
      <transition-group name="post-list">
        <PostItem
          v-for="post in posts"
          :key="post.id"
          @delete="$emit('delete', post)"
          :post="post"
        />
      </transition-group>
    </div>
  </div>
  <h3 v-else>Post list is empty</h3>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  margin-top: 30px;
}
.post-list {
  margin-top: 20px;
  box-shadow: 0px 0 2px #bebebe;
  border-radius: 4px;
  padding: 0 13px;
}

[data-theme="dark"] .post-list {
  border: 1px solid #373e47;
  box-shadow: none;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active,
.post-list-move {
  transition: all 0.2s ease-in-out;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
