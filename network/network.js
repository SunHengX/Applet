export default function (options){
  return new Promise((resolve,reject)=>{
wx.request({
  url: options.url,
  method:options.method || "GET",
  data:options.data || null,
  success:resolve,
  fail:reject
})
})
}