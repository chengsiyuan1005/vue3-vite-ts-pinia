// 路由守卫 to
interface RouterTo {
  fullPath: string
  path: string
  name: string
  query: any
}

// 路由守卫 from
interface RouterFrom {
  fullPath: string
  path: string
  name: string
  query: any
}