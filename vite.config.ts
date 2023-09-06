import { defineConfig, ConfigEnv, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

// 自动导入vue中hook reactive ref等
import AutoImport from 'unplugin-auto-import/vite';
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src')
			},
		},
		// 代理
		server: {
			host: '0.0.0.0',
			port: Number(env.VITE_APP_PORT),
			open: true, // 自动打开浏览器
			proxy: {
				[env.VITE_APP_BASE_API]: {
					// 匹配请求路径，
					target: env.VITE_APP_TARGET_URL,
					// target: env.VITE_APP_TARGET_URL,
					// target: 'https://api.jisuapi.com', // 代理的目标地址
					changeOrigin: true,
					// secure: true, // 是否https接口
					// ws: true, // 是否代理websockets
	
					// 路径重写，**** 如果你的后端有统一前缀(如:/api)，就不开启；没有就开启
					//简单来说，就是是否改路径 加某些东西
					// rewrite: (path) => path.replace(/^\/api/, ''),
					rewrite: (path) =>
					path.replace(
						new RegExp("^" + env.VITE_APP_BASE_API),
						env.VITE_APP_TARGET_BASE_API
					), // 替换 /dev-api 为 target 接口地址
				},
			},
		},
		plugins: [
			vue(),
			AutoImport({
				//安装两行后你会发现在组件中不用再导入ref，reactive等
				imports: ['vue', 'vue-router'],
				//存放的位置
				dts: 'src/auto-import.d.ts',
			}),
			Components({
				// 引入组件的,包括自定义组件
				// 存放的位置
				dts: 'src/components.d.ts',
			}),
			
		]
  }
})
