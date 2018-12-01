<template>
  <div class="wrap">
    <header>
      <img :src="user.avatar">
      <span>{{user.username}}</span>
    </header>
    <section v-for="blog in blogs" :key="blog.id">
      <div class="day">{{getTime(blog.createdAt).date}}</div>
      <div class="month">{{getTime(blog.createdAt).month}}月</div>
      <div class="year">{{getTime(blog.createdAt).year}}</div>
    <router-link :to="`/detail/${blog.id}`">
      <h3 class="title">{{blog.title}}</h3>
      <div class="description">{{blog.description}}</div>
    </router-link>    
    </section>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="change">
    </el-pagination>
  </div>
</template>
<script src="./template.js"></script>
<style lang="scss" scoped src="./template.scss"></style>
