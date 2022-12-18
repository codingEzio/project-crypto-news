const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  baseUrl:
    process.env.NODE_ENV === 'production' ? '/project-crypto-news/' : '/',
});
