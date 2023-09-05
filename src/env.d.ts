/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 环境变量 Ts 智能提示
interface ImportMetaEnv {
  ViTE_APP_TITLE: string;
  VITE_APP_PORT: string;
  VITE_APP_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 对 vue-router 模块声明
// declare module 'vue-router'

// 对 path 模块声明
declare module 'path'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare interface ApiResult<T> {
  data: T
  msg: string
  success: string
  code: number
}

declare interface ListInfoResult<T> {
  results: Array<T>
  length: number
  pages: number
}
