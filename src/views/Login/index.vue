<template>
	<div class="login">
		<div class="login-form">
			<el-form
				:label-position="labelPosition"
				label-width="100px"
				:model="loginData"
				style="max-width: 460px"
			>
				<el-form-item label="Account">
					<el-input v-model="loginData.username" />
				</el-form-item>
				<el-form-item label="Password">
					<el-input v-model="loginData.password" />
				</el-form-item>
			</el-form>
		</div>
		<div class="login-button">
			<LoginButton></LoginButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import LoginButton

	const labelPosition = ref('left');
</script>
