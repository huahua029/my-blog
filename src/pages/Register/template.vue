<template>
  <div class="rigster">
    <label>用户名</label>
    <el-input v-model="username" autofocus placeholder="用户名"></el-input>
    <label>密码</label>
    <el-input v-model="password" type="password" placeholder="密码"></el-input>    

    <el-button @click="onRegister">立即注册</el-button>
    <p>已有账号？<span><router-link to="/login">立即登录</router-link></span></p>
  </div>
</template>

<script src="./template.js"></script>
<style lang="scss" scoped src="./template.scss"></style>
