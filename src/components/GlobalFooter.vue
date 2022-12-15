<template>
  <div class="footer fixed-bottom w-100 px-3 py-3 text-right">
    <p class="text-muted my-0">
      Written by
      <b-link class="text-light" href="https://github.com/codingezio"
        >CodingEzio
      </b-link>
      .
    </p>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
};
</script>

<style scoped>
.footer {
  background-image: linear-gradient(transparent 5%, #323639 100%);
  font-size: 0.85em;
}
</style>
