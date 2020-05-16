import request from "./network.js"
const Baseurl= "http://152.136.185.210:8000/api/n3"


// ---------------轮播数据--------------------
export function GetMint(){
  
   return  request({
    url:  Baseurl+"/home/multidata"
  })
}
//-----------------分类数据-----------------
export function Getgoods(type,page){
  
  return  request({
   url:  Baseurl+"/home/data",
   data:{
     type,
     page
   }
 })
}
