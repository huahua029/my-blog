<template>
  <div class="rigster">
    <label>用户名</label>
    <el-input v-model="input" autofocus placeholder="用户名"></el-input>
    <label>密码</label>
    <el-input v-model="input" placeholder="密码"></el-input>    

    <el-button>立即注册</el-button>
    <p>已有账号？<span>立即登录</span></p>
  </div>
</template>

<style lang="scss" scoped src="./template.scss"></style>
