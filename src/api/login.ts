import instance from "../utils/request";

// 登录
export const login = (): Res<string> => instance.post("/api/v1/auth/login?username=admin&password=123456");

// 验证码
export const captcha = (): Res<string> =>  instance.get("/api/v1/auth/captcha");