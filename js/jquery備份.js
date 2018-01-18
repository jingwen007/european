$(function () {
  
    var scrollTop = $('.menu').offset().top;
    console.log('menu離上面的高度：(scrollTop)'+scrollTop);
    var menuheight = scrollTop;//將menu離上面的高度保存起來
    //偵測menu高度要放在scroll之外，不然會一直改變

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        console.log('捲軸的高度：'+scrollVal);

        if (scrollVal >=  scrollTop){
            $('.menu').addClass('menufix');
            $('.menu>ul>li').addClass('menutransition');
            console.log('固定');
            $(".menu>ul>li").height('3rem');//meun高度
            $(".menu>ul>li").css("line-height","3rem");
           
        } 
        if (scrollVal <  menuheight){
            $('.menu').removeClass('menufix');
            $('.menu>ul>li').removeClass('menutransition');
            console.log('移除');
            console.log('menuheight'+menuheight);
             $(".menu>ul>li").removeAttr("style");
        } 
    });

    $('.menu').click(function(){
        $(this).slideToggle(400);
    }
    );


});
// $(function(){
//     var con_before = $('.menu').offset().top;    //定义内容块原来距页面顶部高度
//     $(document).scroll(function(){              //jq的scroll方法处理，滚动即触发
//         var scrollTop = $(document).scrollTop();//获取当前滚动条距顶部页面高度
//     console.log('滚动条高度为：'+scrollTop);   //方便测试，打印查看效果

//     var con_hei = $('.menu').offset().top;   //获取当前内容块距顶部高度
//     console.log('div高度为'+con_hei);      //方便测试，打印查看效果

//     if (scrollTop >= con_hei) {      //如果滚动条大于内容块距顶部高度
//         $('.menu').addClass('fi');       //则给内容块添加固定顶部样式
//         $('.menu').addClass('con');
//         $('.menu').addClass('isStuck');
//     }
//     if (con_hei < con_before){       //如果滚动条小于内容块距顶部高度
//         $('.menu').removeClass('fi');    //则去掉内容块添加固定顶部样式
//         $('.menu').removeClass('con');
//         $('.menu').removeClass('isStuck');
//     };
//     });
// })