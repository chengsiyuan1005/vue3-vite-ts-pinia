import instance from "../utils/request";

// 新闻
// export const newsList = () => instance.get('/xiaohua/all?pagenum=1&pagesize=20&sort=addtime&appkey=96bc7fa736341beb')
// 路由列表
// export const routes = (): Res<null> => instance.post('/api/v1/routes');


export const routes = (): Res<string> => instance.get('/api/v1/routes')

// 菜单列表
export const menus = ():Res<string> => instance.get('/api/v1/menus')

// 菜单删除

// 菜单下拉

