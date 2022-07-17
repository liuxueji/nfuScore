<template>
  <div class="app">
    <el-menu class="nav"
             mode="horizontal"
             background-color="#fff"
             text-color="#909399"
             active-text-color="#409EFF"
             router>
      <el-menu-item index="/">成绩查询</el-menu-item>
      <el-menu-item index="/bjcj">班级排行榜</el-menu-item>
      <el-menu-item index="/xycj">学院排行榜</el-menu-item>
      <el-menu-item index="/xxcj">学校排行榜</el-menu-item>
      <el-menu-item id="loginid"
                    index="/login">登录</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<style>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .nav {
    padding: 10px;
    background: #798ca0;
  }

  #loginid {
    float: right;
  }
</style>
