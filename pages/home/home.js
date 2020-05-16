// pages/home/home.js
import {
  GetMint,
  Getgoods
} from "../../network/home.js"
const types=['pop','sell','new']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    list:['流行','精选','新款'],
    goods:{
      "pop":{page:0, list:[]},
      "sell":{page:0, list:[]},
      "new":{page:0, list:[]},
    },
    cuType:"pop",
    optiondata:false,
    isFixed:false,
    TabscollTop:0

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.GetMintData(),
   this.getGoodsData('pop'),
   this.getGoodsData('sell'),
   this.getGoodsData('new')

  },
 
  // -----------------------网络请求---------------------------------
  // 网络请求的数据,轮播图以及分类的数据
  GetMintData(){
    GetMint().then(res=>{
      // console.log(res);
      const banners=res.data.data.banner.list
      const recommends=res.data.data.recommend.list
      this.setData({
        banners:banners,
        recommends:recommends
      })
    })
  },
  // 商品分类的网络请求
  getGoodsData(type){
    const page=this.data.goods[type].page+1
Getgoods(type,page).then(res=>{
  // console.log(res);
  const list=res.data.data.list
    // this.data.goods[type].list.push(...list)
    const Lodelist=this.data.goods[type].list
Lodelist.push(...list)
const typeLIst=`goods.${type}.list`
const pageKey=`goods.${type}.page`
this.setData({
  [typeLIst]:Lodelist,
  [pageKey]:page
})
wx.hideLoading()
})
  },
  //-------------------网络请求结书--------------------------------------------
  getList(event){
    const index= event.detail.index
    // console.log(index);
    // if(index==1){
    //  this.data.cuType="pop";
    // }
    const type=types[index]
    this.setData({
      cuType:type
    })

  },
  // -------------------加载动画
  showLoading(){
    wx.showLoading({
      title:'加载中'
    })
  },
  // ------------下拉加载更多的函数
onReachBottom(){
  // console.log("滑动到底部了");
  this.showLoading()
  this.getGoodsData(this.data.cuType)

},
onPageScroll(options){
// console.log(options);
const option= options.scrollTop
// console.log(option);

if(option>=1000){
  this.setData({
   optiondata:true
  })
}else{
  this.setData({
    optiondata:false
   })
}
const flag=this.data.TabscollTop
if(option>=flag){
  this.setData({
    isFixed:true
  })
}else{
  this.setData({
    isFixed:false
  })
}
},
handeLoad(){
  let query= wx.createSelectorQuery()
   query.select('#tab-con').boundingClientRect(rect=>{
      // console.log(rect);
      this.data.TabscollTop=rect.top
    }).exec()
    // console.log(1);
}
})