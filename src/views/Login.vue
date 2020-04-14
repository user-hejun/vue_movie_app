<template>
  <div class="block">
    <p>{{ 'login' | upper}}</p>
    <el-form 
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-width="100px">
      <el-form-item
        label="账号"
        prop="account"
      >
        <el-input type="account" placeholder="请输入账号" v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '账号不能为空'},
          // {
          //   validator: function(rule, value, callback){
              
          //   }
          // }
        ],
        password: [
          { required: true, message: '密码不能为空'},
          { min: 6, message: '密码最少为6位数'}
        ]
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'SET_USER_INFO'
    ]),
    submitForm(name) {
      this.$refs[name].validate(valid => {
        if(valid) {
          this.$axios.post('/user/login', {
            account: this.loginForm.account,
            password: this.loginForm.password
          }).then(res => {
            if(res.data.code === 200) {
              this.SET_USER_INFO(res.data.data);
              this.$message({
                message: '登录成功!',
                type: 'success'
              });
              this.$router.push({
                name: 'Home'
              })
            }else {
              this.$message({
                message: res.data.data.message,
                type: 'warning'
              });
            }
          })
          
        }
      })
    },
    resetForm(name) {
      this.$refs[name].resetFields()
    }
  },
}
</script>

<style lang="scss">
  .block {
    position: absolute;
    width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #074c08;
    padding: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>