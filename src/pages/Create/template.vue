<template>
  <div class="create">
    <div class="wrap">
      <h1>创建文章</h1>
      <label>文章标题</label>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <label>内容简介</label>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <label>文章内容</label>
      <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 50}"
        placeholder="请输入内容"
        v-model="textarea3">
      </el-input>

      <el-button type="success">立即创建</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./template.scss"></style>
