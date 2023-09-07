import instance from "@/utils/request";

// 根据id获取用户信息
export const userInfo = (id:string): Res<string> => instance.get(`/VxAppUser/${id}/details`)