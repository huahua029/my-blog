<template>
  <div class="create">
    <div class="wrap">
      <h1>编辑文章</h1>
      <label>文章标题</label>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="title">
      </el-input>
      <label>内容简介</label>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="description">
      </el-input>
      <label>文章内容</label>
      <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 50}"
        placeholder="请输入内容"
        v-model="content">
      </el-input>

      <el-button @click="onEdit" type="success">保存</el-button>
    </div>
  </div>
</template>

<script src="./template.js"></script>
<style lang="scss" scoped src="./template.scss"></style>
