<template>
  <div id="app">
    <div class="row">
      <dui-button>默认按钮</dui-button>
      <dui-button type="primary">主要按钮</dui-button>
      <dui-button type="success">成功按钮</dui-button>
      <dui-button type="warning">警告按钮</dui-button>
      <dui-button type="danger">危险按钮</dui-button>
    </div>
    <div class="row">
      <dui-button plain>默认按钮</dui-button>
      <dui-button plain type="primary">主要按钮</dui-button>
      <dui-button plain type="success">成功按钮</dui-button>
      <dui-button plain type="warning">警告按钮</dui-button>
      <dui-button plain type="danger">危险按钮</dui-button>
    </div>
    <div class="row">
      <dui-button round>默认按钮</dui-button>
      <dui-button round type="primary">主要按钮</dui-button>
      <dui-button round type="success">成功按钮</dui-button>
      <dui-button round type="warning">警告按钮</dui-button>
      <dui-button round type="danger">危险按钮</dui-button>
    </div>
    <div class="row">
      <dui-button circle icon="icon-search"></dui-button>
      <dui-button circle icon="icon-edit" type="primary"></dui-button>
      <dui-button circle icon="icon-check" type="success"></dui-button>
      <dui-button circle icon="icon-message" type="warning"></dui-button>
      <dui-button circle icon="icon-delete" type="danger"></dui-button>
    </div>
    <!-- 排版 -->
    <div class="row">
      <dui-typography>
        <dui-typography-title>Dui desgin</dui-typography-title>
        <dui-typography-title level="2">Dui desgin</dui-typography-title>
        <dui-typography-title level="3">Dui desgin</dui-typography-title>
        <dui-typography-title level="4">Dui desgin</dui-typography-title>
        <!-- <dui-typography-paragraph>
          <dui-typography-text></dui-typography-text>
        </dui-typography-paragraph> -->
      </dui-typography>
    </div>
  </div>
</template>

<style lang="scss">
.row {
  margin-top: 10px;
  .dui-button {
    margin-left: 10px;
  }
}
</style>
