# Typography排版

## 代码演示一

<template>
  <dui-ui-typography1/>
</template>

```html
<template>
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
</template>
```

## 代码演示二

<template>
  <dui-ui-typography2/>
</template>

```html
<template>
  <dui-typography>
    <dui-typography-title>h1. Dui Design</dui-typography-title>
    <dui-typography-title level="2">h2. Dui Design</dui-typography-title>
    <dui-typography-title level="3">h3. Dui Design</dui-typography-title>
    <dui-typography-title level="4">h4. Dui Design</dui-typography-title>
  </dui-typography>
</template>
```

## 代码演示三

<template>
  <dui-ui-typography3/>
</template>

```html
<template>
  <dui-typography>
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
  </dui-typography>
</template>
```

## API

### Typography.Text

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| delete      | 添加删除线样式   | boolean  | -                                                  | false  |
| disabled    | 禁用文本        | boolean  | -                                                  | false  |
| mark        | 添加标记样式     | boolean  | -                                                  | —      |
| code        | 添加代码样式     | boolean  | —                                                  | false  |
| underline   | 添加下划线样式   | boolean  | —                                                  | false  |
| strong      | 是否加粗        | boolean  | —                                                  | false  |
| type        | 是否加载中状态   | string   | secondary | warning | danger                       | -      |

### Typography.Title

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| delete      | 添加删除线样式   | boolean  | -                                                  | false  |
| disabled    | 禁用文本        | boolean  | -                                                  | false  |
| mark        | 添加标记样式     | boolean  | -                                                  | —      |
| code        | 添加代码样式     | boolean  | —                                                  | false  |
| underline   | 添加下划线样式   | boolean  | —                                                  | false  |
| strong      | 是否加粗        | boolean  | —                                                  | false  |
| type        | 是否加载中状态   | string   | secondary / warning / danger                       | -      |
| level       | 重要程度，相当于 h1、h2、h3、h4 | string | 1 / 2 / 3 / 4                          | 1      |

### Typography.Paragraph

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| delete      | 添加删除线样式   | boolean  | -                                                  | false  |
| disabled    | 禁用文本        | boolean  | -                                                  | false  |
| mark        | 添加标记样式     | boolean  | -                                                  | —      |
| code        | 添加代码样式     | boolean  | —                                                  | false  |
| underline   | 添加下划线样式   | boolean  | —                                                  | false  |
| strong      | 是否加粗        | boolean  | —                                                  | false  |
| type        | 是否加载中状态   | string   | secondary / warning / danger                       | -      |