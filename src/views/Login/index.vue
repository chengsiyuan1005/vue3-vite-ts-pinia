<template>
	<div class="login">
		<div class="login-form">
			<el-form
				:label-position="labelPosition"
				:model="ruleForm"
				style="max-width: 24rem"
				size="large"
				:rules="loginRule"
			>
				<el-form-item prop="account">
					<el-input v-model="ruleForm.account" placeholder="Account" style="width: 24rem" />
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" placeholder="Password" type="password" />
				</el-form-item>
			</el-form>
		</div>
		<div class="submit">
			<el-button color="#1d78b7" @click="submit()">Login</el-button>
		</div>
		<div class="login-button">
			<login-button />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { login } from '@/api/login';
	import { useRouter } from 'vue-router';
	import { setCookie } from '@/utils/cookie';
	import LoginButton from '@/components/LoginButton/index.vue';
	import type { FormRules } from 'element-plus';
	import {ElMessage} from 'element-plus'
	import 'element-plus/theme-chalk/index.css'
 
	const router = useRouter();

	const labelPosition = ref('left');

	const ruleForm = ref({
		account: '',
		password: '',
	});

	

	const isLoginReg = ref(false);

	const validateAccount = (rule: any, value: any, callback: any) => {
		if (value.trim() < 1) {
			callback(new Error('Please input the account'));
		} else {
			callback();
		}
	};

	const validatePassword = (rule: any, value: any, callback: any) => {
		if (value.trim() < 1) {
			callback(new Error('Please input the password'));
		} else if (ruleForm.value.account.trim().length > 0) {
			isLoginReg.value = true;
			callback();
		}
	};

	const loginRule = reactive<FormRules<typeof ruleForm>>({
		account: [{ validator: validateAccount, trigger: 'blur' }],
		password: [{ validator: validatePassword, trigger: ['blur', 'change'] }],
	});

	const submit = async () => {
		if (!isLoginReg.value) return;
		let res = await login({
			account: ruleForm.value.account.trim(),
			password: ruleForm.value.password.trim(),
		});
		if (res.status === 200) {
			router.push({ name: 'home' });
			// set cookie
			setCookie('token', res.data.token, 7);
			// set user id
			setCookie('userId', res.data.id, 7)
		} else {
			// 登录错误提示
			console.log('first')
			openCenter('account or password error!')
		}
	};

	const openCenter = (val:string) => {
		ElMessage({
			showClose: true,
			message: val,
			center: true,
		});
	};
</script>

<style lang="scss" scoped>
	.login-form {
		width: 24rem;

		input {
			width: 24rem;
		}
	}
	.submit {
		width: 24rem;

		button {
			width: 24rem;
		}
	}
</style>
