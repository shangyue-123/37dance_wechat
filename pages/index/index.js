// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图起始页
    active:0,
    tab_array:[
      {title:'推荐',message:'tab1'},
      {title:'最新',message:'tab2'},
      {title:'爵士',message:'tab3'},
      {title:'中国舞',message:'tab4'}
    ],

    // 轮播图图片
    imgUrls: [
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=27&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=231620273,2622968107&fm=27&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=281531042,273318123&fm=27&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=2731345960,2613387946&fm=26&gp=0.jpg"
    ],

    // 功能跳转
    grad:[
      {text:'零基础',url:"/pages/appointment/appointment",link_type:"navigateTo"},
      {text:'基本功'},
      {text:'抖音舞'},
      {text:'燃脂瘦身'},
      {text:'名师课堂'},
      {text:'线下约课'},
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
  onLoad() {
    
   
  },

  onShow: function (options) {
    this.getTabBar().init();
    this.selectComponent('#tabs').resize();
    
  },

  // 点击搜索框事件
  toSearch(){
    console.log('进入搜索')
  },

  

})
