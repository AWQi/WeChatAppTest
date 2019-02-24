//index.js
//获取应用实例
const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })


Page({
  data: {
    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'https://img01.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fimg02.sogoucdn.com%2Fapp%2Fa%2F100520024%2Fad4741145c4dfd2c0f7c8afed8b1e029&appid=122',
      'https://img01.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fimg02.sogoucdn.com%2Fapp%2Fa%2F100520024%2Fad4741145c4dfd2c0f7c8afed8b1e029&appid=122',
      'https://img01.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fimg02.sogoucdn.com%2Fapp%2Fa%2F100520024%2Fad4741145c4dfd2c0f7c8afed8b1e029&appid=122'
      
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    autoplay: true,
    circular:true,
    // vertical:true
    displayMultipleItems: 1,

//  列表数据 数组
    proList: [{
      proName: 'AAA'
    }, {
      proName: 'BBB'
    }, {
      proName: 'AAA'
    }, {
      proName: 'BBB'
    }, {
      proName: 'AAA'
    }, {
      proName: 'BBB'
    }, {
      proName: 'AAA'
    }, {
      proName: 'BBB'
    }]
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})


// Page({
//   onLoad(options) {
//     this.setData({
//       title: options.title
//     })
//   }
// })