<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登陆"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell-group inset>
      <van-field
        v-model="user.mobile"
        left-icon="smile-o"
        right-icon="warning-o"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        left-icon="music-o"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button class="send-btn" size="small" round
            >发送验证码</van-button
          >
        </template>
      </van-field>
    </van-cell-group>

    <div class="login-btn-wrap">
      <van-button class="login-btn" type="primary" block @click="onLogin"
        >登陆</van-button
      >
    </div>
  </div>
</template>

<script>
import login from "@/api/user";

export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        mobile: "",
        code: "",
      },
    };
  },
  methods: {
    async onLogin() {
      try {
        const result = await login(this.user);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  .login-btn-wrap {
    padding: 26px 16px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
      .login-button__text {
        font-size: 15px;
      }
    }
  }
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      color: #666666;
      font-size: 11px;
    }
  }
}
</style>
