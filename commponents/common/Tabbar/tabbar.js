// commponents/common/Tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    coIndex:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeIndex(event){
     
      
      const index= event.currentTarget.dataset.index;
      // console.log(this.properties.list[index]);
      this.setData({
        coIndex:index
      }),
      this.triggerEvent("itemclick",{index,title:this.properties.list[index]},{})

    }

  }
})
