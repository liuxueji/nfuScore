<template>
  <div class="login_container">
    <div class="login_box">
      <el-form label-width="0px"
               class="login_form">
        <el-form-item class="item-header">
          <h2>登录</h2>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="username"
                    prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="password"
                    prefix-icon="el-icon-lock"
                    type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary"
                     @click="buttonlogin">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    buttonlogin () {

      console.log(this);
      this.axios.post("http://ecampus.nfu.edu.cn:2929/jw-privilegei/User/r-login?username=" + this.username + "&password=" + this.password
      ).then((result) => {
        if (result.data.msg != false) {
          console.log(result.data);
          // 将值传给vuex中的settoken存储
          this.$store.commit('settoken', result.data)
          this.$router.push('/');
        } else {
          console.log("login erorr!");
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>
<style >
  .login_container {
    background-color: #eee;
    height: 100%;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .item-header {
    text-align: center;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>