<template>
    <div class="indexContainer">
        <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl" alt="">
        <button class="btn" v-else open-type="getUserInfo" @getuserinfo="getUserInfo">点击获取用户登录的信息</button>
        <p class="username">hello {{userInfo.nickName}}</p>
        <div class="goStudy" @tap="toDetail">
           <!-- 不想上冒泡的写法  <p @tap.stop="handleChild">开启小程序之旅</p>  -->
           <p>开启小程序之旅</p>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            userInfo:{},
            isShow:false
        }
    },

    beforeMount(){
        this.handleGetUserInfo();
    },

    methods:{
        //获取用户登陆信息
        handleGetUserInfo(){
            //获取用户登陆信息
            wx.getUserInfo({
                success: (data) => {
                    this.userInfo = data.userInfo;
                    // console.log(this.userInfo)
                    this.isShow = true
                },
                fail:()=>{
                    console.log("获取失败")
                }
            });
        },
        getUserInfo(data){
            //判断用户是否授权
            if (data.mp.detail.rawData){
                this.handleGetUserInfo()
                //用户授权成功 
                // handleGetUserInfo(rawData)
            }
        },
        toDetail(){
          wx.switchTab({ url: '/pages/list/main' });
        },
    }
}

</script>

<style lang="wxss">
  page{
    background: #74DEFF;
  }
  .indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index_img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin:100rpx 0;
  }
  .username{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }
  .goStudy{
    width: 220rpx;
    height: 80rpx;
    font-size: 24rpx;
    border:1rpx solid #000;
    border-radius: 10rpx;
    line-height: 80rpx;
    text-align: center;
  }
  .btn{
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    margin: 100rpx 0;
    line-height: 300rpx;
    text-align: center;
    font-size: 26rpx;
}
</style>
