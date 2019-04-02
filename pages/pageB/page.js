// pages/page_2/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success(res) {
        console.log(res)
        console.log("res.openid"+res.openid);
        wx.getUserInfo({

          success(res) {
            console.log(res)
            const userInfo = res.userInfo
            const nickName = userInfo.nickName
            const avatarUrl = userInfo.avatarUrl
            const gender = userInfo.gender // 性别 0：未知、1：男、2：女
            const province = userInfo.province
            const city = userInfo.city
            const country = userInfo.country
          }

        })
        //获取 openid
        if (res.code) {
          wx.request({
            url: 'http://localhost:8080/user/login?js_code='+res.code,
            success(res){
                console.log(res);
            }
          })
          // 发起网络请求
          wx.request({
            // url: 'https://test.com/onLogin',
            // url :'https://api.weixin.qq.com/sns/jscode2session',
          url: ' https://api.weixin.qq.com/sns/jscode2session?'+
            'appid=' +'wxc3cf0443ee135b49'+
            '&secret=' +'1ab03f49ae960bcaeafe853c0ca76d05'+
          '&js_code='+res.code+
          '&grant_type=authorization_code',
            method: 'GET',
            data: {
              code: res.code,
              appid:res.appid ,
              secret:res.secret,
               js_code:res.js_code,
                grant_type:'authorization_code',
            },
            success(res) {
              console.log("请求成功");
              console.log(res);
              console.log(res.openid);
            },
            fail(res) {
              console.log("请求失败")
              console.log(res);
            }

          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})