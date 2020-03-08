<template>
  <div id="app">
    <!-- 排版 -->
    <section class="code-box">
      <section class="code-box-demo">
        <dui-typography-title>h1. Dui Design</dui-typography-title>
        <dui-typography-title level="2">h2. Dui Design</dui-typography-title>
        <dui-typography-title level="3">h3. Dui Design</dui-typography-title>
        <dui-typography-title level="4">h4. Dui Design</dui-typography-title>
      </section>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#app {
  font-size: 14px;
}
.code-box {
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0 0 16px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.code-box-demo {
  padding: 42px 24px 50px;
  color: rgba(0, 0, 0, 0.85);
  // border-bottom: 1px solid #f0f0f0;
}
</style>
