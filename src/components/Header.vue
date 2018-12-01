<template>
  <div>
    <section id="noLogin" v-if="!isLogin">
      <h1>LET'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div>
        <el-button  plain>
          <router-link to="/login"> 
            立即登录
          </router-link>     
        </el-button>
        <el-button  plain>
          <router-link to="/register">              
            注册账号
          </router-link>                      
        </el-button>
      </div>
    </section>
    <section class="login"  v-else>
      <h1>LET'S SHARE</h1>
      <router-link to="edit"> 
        <i class="el-icon-edit"></i>
      </router-link>
      <figure>
        <img :src="user.avatar">        
        <ul class="msg">
          <li>我的</li>
          <li @click="onLogout">注销</li>
        </ul>
      </figure>      
    </section>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  data(){
    return {
    }
  },
  computed:{
    ...mapState(['isLogin','user'])    
  },
  created(){
    this.checkLogin()
  },
  methods:{
    ...mapActions(['checkLogin','logout']),
    onLogout(){
      this.logout()
    } 
  }
}
</script>

<style lang="scss" scoped>

#noLogin{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  color: white;
  h1{
    margin-top: 80px;
    font-size: 40px;
  }
  p{
    margin-top: 30px;
  }
  .el-button{
    display: inline-block;
    margin: 60px 20px;
    padding: 5px;
    color: #009933;
  }
}
.login{
  display: flex;
  align-items: center;
  color: white;
  h1{
    flex: 15;
  }
  i{
    flex:1;
    font-size: 25px;
  }
  figure{
    flex: 1;
    position: relative;
    img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    }
    ul{
      display: none;
      position: absolute;
      color: #000;
      li{
        padding: 4px 0;
      }
    }
    &:hover ul{
      display: block;
    }
  }
}

</style>
