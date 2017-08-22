/**
 * Created by Administrator on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
require(['jquery','carousel'],function($,Carousel){
var setting1={
    selecter:'#container1',
    width:520,
    height:280,
    arrowPos:'bottom',
    imgArr:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
    listStyle:'squary',
    speed:500
};
    var carousel1=new Carousel(setting1);
    carousel1.init();
    var setting2={
        selecter:'#container2',
        width:520,
        height:280,
        arrowPos:'center',
        imgArr:['img/1.jpg','img/2.jpg','img/3.jpg'],
        listStyle:'circle',
        speed:1000
    };
    var carousel2=new Carousel(setting2);
    carousel2.init();
});