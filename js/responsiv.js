$(function (){
    isNavBarHidden = true;
   $('body > header .nav_one .dashbord_menu_icon img').click(function (){
        if(isNavBarHidden){
          $('#dashbord_side_bar').css('width','0px');
          $('#mobile_nav_effect_backgroud').show();
          $('#dashbord_side_bar').show();
          $('#dashbord_side_bar').animate({
           width: '250px'
       },200);
      }
   });
   
   $('#mobile_nav_effect_backgroud').click(function (){
       $('#dashbord_side_bar').animate({
           width: '0px'
       },200,function (){
           $('#dashbord_side_bar').hide();
           $('#mobile_nav_effect_backgroud').hide();
       });
   });
   
   isNavBarHeaderHidden = true;
   navBarHeight = $('body > header .nav_two').height();
   $('#nav_bar_menu_icon').click(function (){
       if(isNavBarHeaderHidden){
      $('body > header .nav_two').css('height','10px');
      $('body > header .nav_two').show();
      $('body > header .nav_two').animate({
           height: navBarHeight
       },200);
        isNavBarHeaderHidden = false;
        }
        else{
            $('body > header .nav_two').animate({
                height: '0px'
            },200, function (){
                $('body > header .nav_two').hide();
            });
            isNavBarHeaderHidden = true;
        }
   });
});