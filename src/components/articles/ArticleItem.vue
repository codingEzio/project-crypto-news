<template>
  <b-card no-body bg-variant="card" border-variant="transparent">
    <a
      :href="url"
      target="_blank"
      rel="noreferrer noopener"
      class="card-img-container"
    >
      <b-img-lazy
        :src="img"
        :alt="title"
        class="card-img card-img-top"
        blank-color="#3a4752"
        blank-height="350"
        blank-width="350"
      />
    </a>

    <b-card-body>
      <a
        :href="url"
        target="_blank"
        rel="noreferrer noopener"
        class="text-light"
      >
        <h4 class="card-title" v-html="title" />
      </a>

      <p class="card-text" v-html="body" />

      <small class="text-muted">
        Updated {{ published }} by {{ publisher }}
      </small>
    </b-card-body>
  </b-card>
</template>

<script>
import { formatDistance } from 'date-fns';

export default {
  name: 'ArticleItem',

  props: {
    url: String,
    img: String,
    body: String,
    title: String,
    date: Number,
    publisher: String,
  },

  computed: {
    published() {
      return formatDistance(new Date(this.date * 1000), new Date());
    },
  },
};
</script>

<style scoped>
.article {
  display: inline-block;
}

.card-title,
.card-text {
  word-break: break-word;
}

.card-text {
  text-align: justify;
  text-align-last: left;
  text-justify: distribute;

  hyphens: auto;
}

.card-img-container {
  display: block;
}

.card-img {
  filter: grayscale(50%) saturate(80%);
}
</style>
