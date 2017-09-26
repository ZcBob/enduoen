/**
 * Created by Administrator on 2017/7/28 0028.
 */
$(window).scroll(function(){
//            console.log(1);
    var top=$(window).scrollTop();
    if( top>300 ){
        $('#top').css({display:'block'})

    }else{
        $('#top').css({display:'none'})
    }
//            alert(top);
})
$('#top').on('click',function(){
//            $(this)
//            alert(1);
    $('body,html').animate({scrollTop:'0px'});
})
$(window).scroll(function () {
    var aaa=$(window).scrollTop();
    if(aaa>60){
        $('#Nav').css('box-shadow','0 0 10px #999')
    }else {
        $('#Nav').css('box-shadow','none')
    }
})
// $('.dropdown').on('mouseenter',function(){
//     $(this).children('ul').slideDown();
// }).mouseleave(function(){
//     $(this).children('ul').slideUp();
// })
