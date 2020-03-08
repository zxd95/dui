<template>
  <div id="app">
    <!-- 排版 -->
    <section class="code-box">
      <section class="code-box-demo">
        <dui-typography-text>Dui Design</dui-typography-text><br />
        <dui-typography-text type="secondary">Dui Design</dui-typography-text><br />
        <dui-typography-text type="warning">Dui Design</dui-typography-text><br />
        <dui-typography-text type="danger">Dui Design</dui-typography-text><br />
        <dui-typography-text disabled>Dui Design</dui-typography-text><br />
        <dui-typography-text mark>Dui Design</dui-typography-text><br />
        <dui-typography-text code>Dui Design</dui-typography-text><br />
        <dui-typography-text underline>Dui Design</dui-typography-text><br />
        <dui-typography-text delete>Dui Design</dui-typography-text><br />
        <dui-typography-text strong>Dui Design</dui-typography-text><br />
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
