import instance from "@/utils/request";

// 登录
export const login = (data: ReqLogin): Res<string> => instance.post('/VxAppUser/login', data)

// 忘记密码
export const forgetPassword = (data: ReqForgetPassword): Res<string> => instance.post('/VxAppUser/retrieve', data)

// 重置密码
export const resetPassword = (data: ReqResetPassword): Res<string> => instance.post('/VxAppUser/resetting', data)

// 注册
export const register = (data: ReqRegister): Res<string> => instance.post('/VxAppUser/register', data)