<template>
  <div class="root">
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: { Footer },
};
</script>

<style lang="less">
@import (reference) './assets/styles/variables/global.less';
@import (reference) './assets/styles/bundles/typography.less';

html {
  #type.monospace();
  box-sizing: border-box;
  font-size: 62.5%;
  height: 100%;
}

* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  &:before,
  &:after {
    box-sizing: inherit;
  }
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  #type.body();
  background-color: @background;
  color: @default-copy;
  min-height: 100vh;
  text-rendering: optimizeLegibility;
}

.root {
  display: flex;
  flex-flow: column;
  min-height: inherit;
}

body,
html {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

main {
  margin: @base-unit * 6 auto;
}

::selection {
  background-color: @selection;
  color: @background;
}
</style>
