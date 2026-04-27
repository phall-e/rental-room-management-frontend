<template>
  <div>
    <h1>សួរស្ដី{{ token }}</h1>
    <div>
      <el-input type=""/>
      <el-button type="primary">Login</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const token = useCookie('token');
  const users = useCookie('users');
</script>

<style>

</style>