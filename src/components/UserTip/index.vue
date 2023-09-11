<template>
	<div class="info" >
		<div class="info-inner">
			<div class="left">
				<img src="../../assets/UserTip/menu.svg" alt="" class="menu" />
				<img src="../../assets/logo256.svg" alt="" class="logo" />
				<span class="title">home</span>
			</div>
			<div class="right">
				<div class="search">
					<el-input v-model="inputVal" placeholder="Please input" class="input-with-select">
						<template #prepend>
							<el-select v-model="selectTitle" placeholder="Select" style="width: 115px">
								<el-option label="Restaurant" value="1" />
								<el-option label="Order No." value="2" />
								<el-option label="Tel" value="3" />
							</el-select>
						</template>
						<template #append>
							<el-button :icon="Search" />
						</template>
					</el-input>
				</div>
				<el-avatar shape="circle" :size="50" :src="avatarUser.avatarUrl" class="avatar" @click="toUrl('/mine')"/>
				<span class="sit" @click="toUrl('/sit')"><img src="@/assets/UserTip/sit.svg" alt=""></span>
				<span class="add"  @click="toUrl('/more')"><img src="@/assets/UserTip/more.svg" alt=""></span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { getCurrentInstance, ref } from 'vue';
	import { Search } from '@element-plus/icons-vue';
	import { getCookie } from '@/utils/cookie';
	import { userInfo } from '@/api/user';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	// 输入框
	const inputVal = ref<string>('');
	const selectTitle = ref<string>('');

	// 个人信息
	const AVATAR_BASE_URL = ref<string>(
		getCurrentInstance()?.appContext.config.globalProperties.$AVATAR_BASE_URL
	);
	const avatarUser = ref<object>({
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


	const toUrl = (path:string) => {
		router.push(`${path}`);
	};

</script>

<style lang="scss" scoped>
	.info {
		width: 100vw;
		height: 64px;
		box-shadow: 0 0.075rem 0.075rem 0 rgba(0, 0, 0, 0.1);
		background-color: #F6F8FA;

		.info-inner {
			height: 32px;
			padding: 16px;
			width: calc(100vw - 32px);
			display: flex;
			font-size: 14px;

			.left {
				width: 21rem;
				display: flex;
				align-items: center;
				width: 60%;
				min-width: 80px;

				.menu {
					height: 22px;
					padding: 6px;
					cursor: pointer;
					margin-right: 12px;
				}

				.logo {
					height: 26px;
					padding: 1px;
					cursor: pointer;
					margin-right: 4px;
				}

				.title {
					font-weight: 700;
					height: 32px;
					line-height: 32px;
					padding: 0 12px;
					border-radius: 8px;
				}
				.title:hover {
					background-color: #EAEDF1;
				}
			}

			.right {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 40%;
				display: flex;
				justify-content: right;
				align-items: center;

				.search {
					.input-with-select {
						width: 28rem;
					}
					width: 30rem;
				}

				.avatar {
					width: 32px;
					height: 32px;
					animation: avatar 8s linear infinite;
					margin-right: 12px;
					cursor: pointer;
				}

				.sit, .add {
					box-sizing: border-box;
					border: 1px solid #ccc;
					height: 28px;
					border-radius: 7px;
					display: flex;
					align-items:center;
					cursor: pointer;

					img {
						width: 16px;
						padding: 6px;
					}
				}

				.sit:hover, .add:hover {
					background-color: #EAEDF1;
				}

				.sit {
					margin-right: 12px;
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
	}
</style>
