<template>
  <div id="app">
    <!-- 排版 -->
    <section class="code-box">
      <section class="code-box-demo">
        <dui-typography>
          <!-- 1 -->
          <dui-typography-title>Introduction</dui-typography-title>
          <dui-typography-paragraph>In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
          </dui-typography-paragraph>
          <dui-typography-paragraph>After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims touniform the user interface specs for internal background projects, <dui-typography-text strong>lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development.</dui-typography-text>
          </dui-typography-paragraph>
          <!-- 2 -->
          <dui-typography-title level="2">Guidelines and Resources</dui-typography-title>
          <dui-typography-paragraph>We supply a series of design principles, practical patterns and high quality design resources (<dui-typography-text code>Sketch</dui-typography-text>and<dui-typography-text code>Axure</dui-typography-text>), to help people create their product prototypes beautifully and efficiently.
          </dui-typography-paragraph>
          <dui-typography-paragraph>
            <ul>
              <li><a>Principles</a></li>
              <li><a>Patterns</a></li>
              <li><a>Resource Download</a></li>
            </ul>
          </dui-typography-paragraph>
          <!-- 3 -->
          <dui-typography-title>介绍</dui-typography-title>
          <dui-typography-paragraph>蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。</dui-typography-paragraph>
          <dui-typography-paragraph>随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系Ant Design。基于<dui-typography-text mark>『确定』和『自然』</dui-typography-text>
          的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
          <dui-typography-text strong>更好的用户体验</dui-typography-text>。
          </dui-typography-paragraph>
          <!-- 4 -->
          <dui-typography-title level="2">设计资源</dui-typography-title>
          <dui-typography-paragraph>我们提供完善的设计原则、最佳实践和设计资源文件（<dui-typography-text code>Sketch</dui-typography-text>和<dui-typography-text code>Axure</dui-typography-text>），来帮助业务快速设计出高质量的产品原型。
          </dui-typography-paragraph>
          <dui-typography-paragraph>
            <ul>
              <li><a>设计原则</a></li>
              <li><a>设计模式</a></li>
              <li><a>设计资源</a></li>
            </ul>
          </dui-typography-paragraph>
        </dui-typography>
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
h2 {
  border-bottom: 0;
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
