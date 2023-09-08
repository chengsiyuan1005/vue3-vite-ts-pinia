<template>
	<div class="info" @click="toMine()">
		<div class="info-inner">
			<div class="left">
				<img src="../../assets/UserTip/menu.svg" alt="" class="menu" />
				<img src="../../assets/logo256.svg" alt="" class="logo" />
				<span>home</span>
			</div>
			<div class="center"></div>
			<div class="right">
				<el-avatar shape="circle" :size="50" :src="avatarUser.avatarUrl" class="avatar" />
				<p>{{ avatarUser.account }}</p>
				<p>{{ avatarUser.tel }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { getCurrentInstance } from 'vue';
	import { getCookie } from '@/utils/cookie';
	import { userInfo } from '@/api/user';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const AVATAR_BASE_URL = ref(
		getCurrentInstance()?.appContext.config.globalProperties.$AVATAR_BASE_URL
	);
	const avatarUser = ref({
		account: '',
		tel: '',
		type: '',
		avatarUrl: '',
	});

	onMounted(async () => {
		// 获取用户信息
		getUserInfo();
	});

	const getUserInfo = async () => {
		let res = await userInfo(getCookie('userId'));
		console.log(res);
		avatarUser.value = {
			account: res.data.account,
			tel: res.data.tel,
			type: res.data.type,
			avatarUrl: `${AVATAR_BASE_URL.value}/${res.data.avator}`,
		};
	};

	const toMine = () => {
		router.push('/mine');
	};
</script>

<style lang="scss" scoped>
	.info {
		width: 100vw;
		height: 4rem;
		box-shadow: 0 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.1);
		background-color: #f6f8fa;
		display: flex;

		.left {
			height: 4rem;
			width: 21rem;
			display: flex;
			align-items: center;

			.menu {
				height: 1.8rem;
				cursor: pointer;
			}
			
			.logo {
				height: 2rem;
				cursor: pointer;
			}
		}

		.center {
			width: 60vw;
		}

		.right {
			display: flex;
			justify-content: center;
			align-items: center;

			.avatar {
				width: 2.4rem;
				height: 2.4rem;
				animation: avatar 8s linear infinite;
			}

			@keyframes avatar {
				0% {
					transform: rotate(0deg);
				}
				50% {
					transform: rotate(180deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}
	}
</style>
