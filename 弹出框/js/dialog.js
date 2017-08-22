/**
 * Created by Administrator on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(["jquery"],function($){
   function Dialog(setting){
       this.$container=$('<div id="container"></div>');
       this.$dialogMask=$('<div id="dialog-mask"></div>');
       this.$dialogMain=$('<div id="dialog-main"></div>');
       this.$dialogTitle=$('<div id="dialog-title"></div>');
       this.$dialogTextItem=$('<div id="dialog-text-item"></div>');
       this.$dialogTextClose=$('<div id="dialog-text-close">[X]</div>');
       this.$dialogContent=$('<div id="dialog-content"></div>');
       this.defaultSetting={
         height: 400,
         width:500,
         title: '注册',
         content:''
       };
       $.extend(this.defaultSetting,setting);
   }
    Dialog.prototype.open=function(){
        this.$container.append(this.$dialogMask).append(this.$dialogMain);
        this.$dialogMain.append(this.$dialogTitle).append(this.$dialogContent);
        this.$dialogTitle.append(this.$dialogTextItem).append(this.$dialogTextClose);
        $('body').append(this.$container);
        this.$dialogTextItem.html(this.defaultSetting.title);
        this.$dialogMain.css({
            width: this.defaultSetting.width,
            height:this.defaultSetting.height,
            marginLeft: -this.defaultSetting.width/2,
            marginTop:  -this.defaultSetting.height/2
        });
        if(this.defaultSetting.content.indexOf('.html')!=-1){
            this.$dialogContent.load(this.defaultSetting.content);
        }else{
            this.$dialogContent.html(this.defaultSetting.content);
        }
       this.$dialogTextClose.on('click',function(){
           this.close();
       }.bind(this));

    };
   Dialog.prototype.close=function(){
       this.$container.remove();
   };
return Dialog;
});
