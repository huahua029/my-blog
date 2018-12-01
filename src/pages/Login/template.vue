<template>
  <div class="login">
    <label>用户名</label>
    <el-input v-model="username" autofocus placeholder="用户名"></el-input>
    <label>密码</label>
    <el-input v-model="password" placeholder="密码"></el-input>    

    <el-button @click="onLogin">立即登录</el-button>
    <p>没有账号？<span><router-link to="/register">注册新用户</router-link></span></p>
  </div>
</template>

<script src="./template.js"></script>
<style lang="scss" scoped src="./template.scss"></style>
