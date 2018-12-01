<template>
  <div class="index">
    <div class="wrap" v-for="blog in blogs" :key='blog.id'>
      <figure>
        <router-link :to="`/user/${blog.user.id}`">
          <img :src="blog.user.avatar">
        </router-link>
        <figcaption>{{blog.user.username}}</figcaption>
      </figure>
      <router-link :to="`/detail/${blog.id}`">      
        <h3 class="title">{{blog.title}} <span>{{blog.createdAt | formatDate}}</span> </h3>
        <p class="description">{{blog.description}}</p>
      </router-link>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page.sync="page"
      @current-change="change">
    </el-pagination>
  </div>
</template>
<script src="./template.js"></script>
<style lang="scss" scoped src="./template.scss"></style>

