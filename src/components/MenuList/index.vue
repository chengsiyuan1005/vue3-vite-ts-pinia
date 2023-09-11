<template>
	<div class="left-list">
		<header>
			<div class="avatar">
				<img src="@/assets/logo128.svg" alt="" />
			</div>
			<ul class="main-page">
				<li class="list-one" v-for="item in pageList" :key="item" @click="toUrl(`/${item}`)">
					<img :src="`../src/assets/common/${item}.svg`" :alt="item" />
					<span>{{ item }}</span>
				</li>
			</ul>
		</header>
		<el-divider border-style="solid" style="margin-top: 12px; margin-bottom: 12px" />
		<section></section>
		<!-- <el-divider border-style="solid" style="margin-top: 12px; margin-bottom: 12px;"/> -->
		<footer>
			<div class="explore">...</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
  import {useRouter} from 'vue-router'

  const router = useRouter()

  // 页面list
	const pageList = ref(['home', 'charts', 'mine', 'sit']);

  // 页面跳转
  const toUrl = (url:string) => {
    router.push(url)
  }
	
</script>

<style lang="scss" scoped>
	.left-list {
		width: 100%;
		height: 100%;

		header {
			.avatar {
				padding-bottom: 20px;

				img {
					width: 32px;
				}
			}

			.main-page {
				color: #666;

				.list-one {
					height: 20px;
					padding: 6px;
					display: flex;
					align-items: center;
					font-size: 14px;
					cursor: pointer;

					img {
						width: 16px;
						padding: 2px;
						margin-right: 6px;
					}

					span {
						height: 20px;
						line-height: 20px;
					}
				}

				.list-one:hover {
					background-color: #f0f2f4;
					border-radius: 6px;
				}
			}
		}
	}
</style>
