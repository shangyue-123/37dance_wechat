// pages/exercise/exercise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 下拉菜单数据
    option1: [
      { text: '常规课程', value: 0 },
      { text: '私教课', value: 1 },
      { text: '小班课', value: 2 },
    ],
    option2: [
      { text: '周一', value: 'a' },
      { text: '周二', value: 'b' },
      { text: '周三', value: 'c' },
      { text: '周四', value: 'd' },
      { text: '周五', value: 'e' },
      { text: '周六', value: 'f' },
      { text: '周日', value: 'g' },
    ],
    value1: 0,
    value2: 'a',

    // 商品卡片数据
    card:[
      {tag:'标签',price:'10.00',desc:'描述信息',card_title:'商品标题',cell_title:'14:00-15:20 殇月',
      thumb:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=27&gp=0.jpg'},
      {tag:'标签',price:'10.00',desc:'描述信息',card_title:'商品标题',cell_title:'14:00-15:20 殇月',
      thumb:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=27&gp=0.jpg'},
      {tag:'标签',price:'10.00',desc:'描述信息',card_title:'商品标题',cell_title:'14:00-15:20 殇月',
      thumb:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=27&gp=0.jpg'},

    ]
  },


  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTabBar().init();

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