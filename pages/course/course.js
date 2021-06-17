// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    active:0,
    tab_array:[
      {title:'推荐',message:'tab1'},
      {title:'最新',message:'tab2'},
      {title:'爵士',message:'tab3'},
      {title:'中国舞',message:'tab4'}
    ],

    moon_card:[
      { src:"https://img.yzcdn.cn/vant/cat.jpeg",
        value:"点击学习",
        title:"原创舞蹈",
        tag_message:"标签",
        tag_color:{type:String,value:'primary'},
        label:"添加内容"},

        { src:"https://img.yzcdn.cn/vant/cat.jpeg",
        value:"点击学习",
        title:"原创舞蹈",
        tag_message:"标签",
        tag_color:{type:String,value:'primary'},
        label:"添加内容"},

        { src:"https://img.yzcdn.cn/vant/cat.jpeg",
        value:"点击学习",
        title:"原创舞蹈",
        tag_message:"标签",
        tag_color:{type:String,value:'primary'},
        label:"添加内容"},
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectComponent('#tabs').resize();
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