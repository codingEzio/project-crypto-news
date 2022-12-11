<template>
  <b-row>
    <b-col lg="4" sm="6" xs="12" class="mb-4">
      <ArticleItem />
    </b-col>
    <b-col lg="4" sm="6" xs="12" class="mb-4">
      <ArticleItem />
    </b-col>
    <b-col lg="4" sm="6" xs="12" class="mb-4">
      <ArticleItem />
    </b-col>
    <b-col lg="4" sm="6" xs="12" class="mb-4">
      <ArticleItem />
    </b-col>
    <b-col lg="4" sm="6" xs="12" class="mb-4">
      <ArticleItem />
    </b-col>
  </b-row>
</template>

<script>
import ArticleItem from '@/components/articles/ArticleItem';

export default {
  name: 'ArticleList',
  components: {
    ArticleItem,
  },
};
</script>

<style scoped></style>
