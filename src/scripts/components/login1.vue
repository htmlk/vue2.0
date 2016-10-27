<template>
  <div class="login-box">
      <div class="login-header">
        <ul>
          <li><router-link :to="{ path:'/'}">返回</router-link></li>
          <li>{{info}}</li>
          <li><router-link :to="{ path:'/index/main'}">跳过</router-link></li>
        </ul>
      </div>

      <div class="login-btn">
          <ul>
            <li><div><img src="/images/ic_bind_weixin.png" alt=""></div><p>微信</p></li>
            <li><div><img src="/images/ic_bind_qq.png" alt=""></div><p>QQ</p></li>
            <li><div><img src="/images/ic_bind_weibo.png" alt=""></div><p>微博</p></li>
          </ul>
      </div>
      <div class="login-content">
        <ul>
          <li><p>————</p><p>手机号快速{{info}}</p><p>————</p></li>
          <li><input type="tell"  placeholder="请输入手机号"/></li>
          <li><input type="button" name="name" value="下一步" ></li>
          <li><p>快速{{info}}</p><p>使用账号密码{{info}}</p></li>
        </ul>
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        info:''
      }
    },
    mounted:function(){
        this.$nextTick(function(){
          //获取传过来的id
         var id=this.$route.params.loginid
          if(id==2){
              this.info="登录"
          }else{
            this.info="注册"
          }
      })
    }
  }
</script>
