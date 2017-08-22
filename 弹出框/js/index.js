/**
 * Created by Administrator on 2017/8/22.
 */
requirejs.config({
  paths:{
      jquery:'jquery-1.12.4'
}
    });
require(["jquery","dialog"],function($,Dialog){
$('#open').on("click",function(){
    var setting={
        width:600,
        height:500,
        title:'登陆',
        content:"1.html"
    };
var dialog=new Dialog(setting);
    dialog.open();
})
});