<template>
  <b-card
    bg-variant="card"
    border-variant="transparent"
    title="Article title"
    img-src="https://placekitten.com/g/300/300"
    img-fluid
    img-alt="Placeholder image"
    img-top
  >
    <p class="card-text">Article Summary</p>

    <small class="text-muted">Updated 3 minutes ago</small>
  </b-card>
</template>

<script>
export default {
  name: 'ArticleItem',
};
</script>

<style scoped></style>
