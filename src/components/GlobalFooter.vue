<template>
  <div class="footer fixed-bottom w-100">
    <p class="text-muted mx-0 my-0">
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
  background-image: linear-gradient(transparent 5%, #323639 95%);
  font-size: 0.85em;

  padding: 1.65rem 1rem 0.35rem 1rem;
}

@media screen and (max-width: 1300px) {
  .footer {
    text-align: center;
  }
}
</style>
