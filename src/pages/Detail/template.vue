<template>
  <div class="wrap">
    <header class="detail">
      <router-link :to="`/user/${user.id}`">
        <img :src="user.avatar">      
      </router-link>      
      <h2 class="title">
        {{title}}
      </h2>
      <p class="msg">
          {{user.username}}发表于
        <span>{{updatedAt | formatDate}}</span>
      </p>
    </header>
    <section v-html='markdown'></section>
  </div>
</template>

<script src="./template" ></script>
<style lang="scss" scoped src="./template.scss"></style>

