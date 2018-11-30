<template>
  <div>
    <section id="noLogin" v-show="false">
      <h1>LET'S SHARE</h1>
      <p>精品博客汇聚</p>
      <div>
        <el-button  plain>立即登录</el-button>
        <el-button  plain>注册账号</el-button>
      </div>
    </section>
    <section class="login">
      <h1>LET'S SHARE</h1>
      <i class="el-icon-edit"></i>
      <figure>
        <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon">        
        <ul class="msg">
          <li> 我的主页 </li>
          <li> 注销登录 </li>
        </ul>
      </figure>      
    </section>
  </div>
</template>


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

