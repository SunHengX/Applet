// pages/home/childern/recommend/s-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changFix(){
      if(!this.data.isShow){
        console.log("图片加载完成");
this.triggerEvent('imageload');
this.data.isShow=true
      }
 
  
}
  }
})
