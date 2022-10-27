<template>
  <div class="post">
    <h1>This is the page with ID {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.post {
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 0 3px #bebebe;
}
</style>
