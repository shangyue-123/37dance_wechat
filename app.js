// app.js
App({

  globalData:{
    URL:"http://13.125.250.44:8003"
  },


  onLaunch() {
    var URL = this.globalData.URL
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    wx.login({
      success: res => {
        if(res.code){
          wx.request({
            url:URL+'/user/wx_login',
            method:"GET",
            data:{
              appid:'wx28c6c91e15a39926',
              secret:'0ac0efcab2c9bd671e9ddcd4ac8ee993',
              js_code:res.code,
              grant_type:'authorization_code'
            },
            success(res){
              wx.setStorageSync('Token', res.data) 
            }
          })
        }
      }
    })
  },
  
})
