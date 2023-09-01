// 对所有 模块 .vue文件声明
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 对 vue-router 模块声明
// declare module 'vue-router'

// 对 path 模块声明
declare module 'path'