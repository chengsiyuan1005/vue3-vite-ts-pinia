//一般情况下，接口类型会放到一个文件
// 下面两个TS接口，表示要传的参数
interface ReqLogin {
  account: string
  password: string
}

interface ReqForgetPassword {
  account: string
  tel: string
}

interface ReqResetPassword {
  id: string,
  password: string
}

interface ReqRegister {
  username: string
  account: string
  password: string
  type: number | string
  tel: number
  createTime: string
}




// Res是返回的参数，T是泛型，需要自己定义，返回对数统一管理***
type Res<T> = Promise<ItypeAPI<T>>;
// 一般情况下响应数据返回的这三个参数，
// 但不排除后端返回其它的可能性，
interface ItypeAPI<T> {
  // data: T,//请求的数据，用泛型
  data: any,
  code: number //返回后端自定义的200，404，500这种状态码
  config?: object,
  status: number
}

// 组件传参
interface IProps {
  title?: string,
  data: any
}
