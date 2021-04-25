


    /*加视觉差内容要修改的地方 1/3 */
    var contentObj = ["top","about","intro","pre1","works_graphic","pre2","works_photo","experience","bottom"];


    var contentNum = contentObj.length;
    for(var i=1; i<=contentNum;i++){
        eval("var posControl"+i+"= $('#posControl"+i+"');");
        /*var posControl2 = $('#posControl2');*/

        eval("var content"+i+"= $('."+contentObj[i-1]+"');");
        /*var content1 = $('.top');*/
    }



    function initialVar(){

        screenHeight = $(window).height();
        screenWidth = $(window).width();
    }


    function initialPos(){

        /*preHeight = screenHeight /2;*/

        /*加视觉差内容要修改的地方 2/3 */
        content1.css({'height':screenHeight});
        content2.css({'height':screenHeight});
        content3.css({});
        content4.css({'height':screenHeight});
        content5.css({});
        content6.css({'height':screenHeight});
        content7.css({});
        content8.css({});
        content9.css({'height':screenHeight});




    }

    initialVar();



$(document).ready(function() {
    initialVar();
    initialPos();
    jsVcenter();
});


$(window).resize(function(){
    initialVar();
    initialPos();
    jsVcenter();

});

$(window).scroll(function() {

    parallax();
    paLayer();


});








function jsVcenter() {


/*    function basic(objectWidth,objectHeight){


        if(screenHeight > 600) {
            var amountTop = (screenHeight - objectHeight) / 2 /10 - 25;
            var amountLeft = (screenWidth - objectWidth) / 2 /10 - 10;
            console.log('screenHeight_up100:'+screenHeight);
        } else {
            amountTop =(screenHeight - objectHeight) / 2  ;
            amountLeft =(screenWidth - objectWidth) / 2 + 5;

        }

        $(this).css('top', amountTop +'rem');
        $(this).css('left', amountLeft +'rem');
    }*/


    $('.jsVcenter').each(function(){

        var objectHeight = $(this).height();
        var amount =(screenHeight - objectHeight) / 2 / 10 ;
        $(this).css({'padding-top':amount +'rem'});
    });

    $('.jsVcenter_up150').each(function(){

        var objectHeight = $(this).height();
        if(screenHeight > 600) {
            var amount = (screenHeight - objectHeight) / 2 /10 - 15;
            console.log('screenHeight_up100:'+screenHeight);
        } else {
                amount =(screenHeight - objectHeight) / 2  ;

            }

        $(this).css('padding-top', amount +'rem');
    });



    $('.jsVcenter_down130').each(function(){
        console.log('jsVcenter_down1000000000000000000000000000');
        var objectHeight = $(this).height();
        var amount = (screenHeight - objectHeight) / 2 / 10 + 13;
        $(this).css('padding-top', amount +'rem');

    });


}


function parallax() {
    var scroll = $(window).scrollTop();
    console.log('parallax scroll:'+scroll);

    /*向下滚动时，背景图的视觉差方式转换为另一种方式*/
    if(scroll != 0){
        $('.layer1').css({'display':'none'});
    }
    else {
        $('.layer1').css({'display':'block'});

    }

    $('.parallax-bg-up').each(function() {

        var Pos = $(this).offset().top;
        var distanceFromBottom = Pos - scroll - screenHeight;

        if (Pos > screenHeight && Pos) {
            $(this).css('background-position', 'center ' + (( -distanceFromBottom  ) * 0.1) +'px');

        } else {
            $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');

        }


    });
    $('.parallax-bg-down').each(function() {
        var Pos = $(this).offset().top;
        var distanceFromTop = Pos - scroll - screenHeight + 1100;

        if (Pos > screenHeight && Pos) {
            $(this).css('background-position', 'center ' + (( -distanceFromTop  ) * 0.1) +'px');

        } else {
            $(this).css('background-position', 'center ' + (( scroll ) * 0.5) + 'px');

        }


    })

}


function paLayer(){

    var scroll = $(window).scrollTop();


    for (var i = 1; i <= contentNum; i++) {
        eval("var content"+i+"Pos = posControl"+i+".offset().top;");
        /*var content2Pos = posControl2.offset().top;*/

        eval("var content"+i+"atTop = content"+i+"Pos - scroll ;");
        /*var content2atTop = content2Pos - scroll ;*/

        eval("var content"+i+"Height = content"+i+".height()");
        /*var content1Height = content1.height();*/

        eval("var content"+i+"PosBottom = content"+i+"Pos + content"+i+"Height;");
        /*var content2PosBottom = content2Pos + content2Height;*/
    }

    /*通过最后一个元素的位置确定内容总长度*/
    var last = $('.screens2');
    var lastPos = last.offset().top;
    var lastHeight = last.height();
    var content3Height = lastPos + lastHeight + screenHeight * 0.1 - content2Height  - content1Height;
    console.log('content3HeightHHHHHHHHHHHHHHHHHHHHHHHHHHH:' + lastPos);
    var content3atBottom = lastPos + lastHeight - scroll ;

    content3.css({'height':content3Height});

    var content2atBottom = content2Pos + content2Height - scroll ;
    var meet = content2PosBottom - content3Pos;


    console.log(content2atTop+':content2atTop');
    console.log(meet+':meet');
    console.log(content2Pos+':content2Pos');
    console.log(content3Pos+':content3Pos');

    var objMoveV = ["lightCircle","intro1_PC","intro1_PC_shadow",
        "intro1_mobile","intro1_mobile_shadow","vi","vi_shadow",
        "screens1","screens1_shadow","book1","screens2","logo_pattern1","logo_pattern2"];
    var objMoveH = ["titleGraphic","titleVI","titleMedia","titleGuideline"];
    var objMove = objMoveV.concat(objMoveH);
    console.log('objMoveeeeeeeeeeeeeeeeeeeeeeeeee:' + objMove);

    for (var m = 0; m < objMove.length; m++) {

        /*声明上下移动对象的位置并初始化*/
        window[objMoveV[m]+"Top"] = 0;
        /*var lightCircleTop;*/

        /*声明从左到右移动对象的位置并初始化*/
        window[objMoveH[m]+"Left"] = 0;
        /*var titleGraphicLeft;*/

        /*声明从右到左移动对象的位置并初始化*/
        window[objMoveH[m]+"Right"] = 0;
        /*var titleVIRight;*/

        /*声明所有移动对象*/
        window[objMove[m]] = $('.'+ objMove[m]);
        /* var lightCircle = $('.lightCircle');*/



    }



    function settingTop(object, top, origin, speed, max){

        top = screenHeight * origin - scroll * speed;

        object.css({'top':top});
        console.log(object+'Topppppppppppppppppp speed:' + speed+" top" + top);

    }

    function settingLeft(object, left, origin, speed, max){
        left = screenWidth * origin + scroll * speed;
        var maxLeft = screenWidth * max;
        if(left > maxLeft){
            return;
        }
        object.css({'margin-left': left});
    }

    function settingRight(object, right, origin, speed,max){
        right = screenWidth * origin + scroll * speed;
        var maxRight = screenWidth * max;
        if(right > maxRight){
            return;
        }
        object.css({'margin-right': right,'display':'block', 'float':'right'});

    }

    /*function animateH(object, left, origin, speed, max){
        left = screenWidth * origin + scroll * speed;
        var maxLeft = left / screenWidth;

        /!*向右运动时*!/
        if(speed >0 && maxLeft > max){
            return;
        }

        /!*向左运动时*!/
        if(speed <0 && maxLeft < max){
            return;
        }
        object.css({'margin-left': left});

    }*/

    /*screens1.css({'max-width':screenWidth*1.5});
    screens1_shadow.css({'max-width':screenWidth*1.5});
    screens2.css({'max-width':screenWidth*1.5});*/

    settingTop(lightCircle, lightCircleTop, 1, 0.7);
    settingRight(titleGraphic,titleGraphicRight,-0.2,0.2,0.05);
    settingTop(intro1_PC, intro1_PCTop, 1.6, 0.6);
    settingTop(intro1_PC_shadow, intro1_PC_shadowTop, 1.5, 0.5);
    var intro1_PCBottom = intro1_PC.offset().top + intro1_PC.height();
    settingTop(intro1_mobile, intro1_mobileTop,-0.4,-0.35,intro1_PCBottom);
    settingTop(intro1_mobile_shadow, intro1_mobile_shadowTop,-0.3,-0.12,intro1_PCBottom);
    settingLeft(titleVI,titleVILeft,0.1,0.2,0.5);
    settingTop(vi,viTop,1.1,0.35);
    settingTop(vi_shadow,vi_shadowTop,1.12,0.3);
    settingLeft(titleMedia,titleMediaLeft,0.2,0.2,0.75);
    settingTop(screens1,screens1Top,1.5,0.3);
    settingTop(screens1_shadow,screens1_shadowTop,1.6,0.32);
    settingLeft(titleGuideline,titleGuidelineLeft,-0.1,0.25,0.8);
    settingTop(book1,book1Top,1.5,0.25);
    settingTop(screens2,screens2Top,2,0.348);


    if(content2atTop < 0 &&  content2atTop > -content2Height ) {
        /*content2内容的top到达窗口top，并且开始向上滚动的时候，
        下层的content3内容的top也开始从窗口bottom向上滚动，
        这时控制content2内容滚动的是滚动条，控制content3内容滚动的是"content2Height  - content2_out * 0.5"*/

        /*INTRO部分不需要调用paLayerMove*/
        /*paLayerMove(2,-1);*/

    }

    function moveCondition(x){
        var y=x+1;
        var condition = "content"+x+"atTop <= -content"+x+"Height &&  content"+y+"atTop > -content"+y+"Height";
        /*content2atTop <= -content2Height &&  content3atTop > -content3Height
         content2内容的bottom到达窗口top，这时content3内容的top也到达了窗口的top,
         即content2内容的bottom与content3内容的top相遇了，
         这时content3内容继续向上滚动，content4内容开始同样的流程*/

        return eval(condition);
    }

    function moveConditionDown(x){
        var y=x+1;
        var condition = "content"+x+"atTop <= -content"+x+"Height &&  content"+y+"atTop > -content"+y+"Height";
        /*
        content2atTop <= -content2Height &&  content3atTop > -content3Height
         content2内容的bottom到达窗口top，这时content3内容的top也到达了窗口的top,
         即content2内容的bottom与content3内容的top相遇了，
         这时content3内容继续向上滚动，content4内容开始同样的流程*/

        return eval(condition);
    }

    function paLayerMove(x,z){
        eval("console.log('---------layer"+x+" top reach top----------')");

        var y=x+1;
        eval("var content"+x+"_out =  content"+x+"PosBottom - scroll ;");
        eval("var content"+y+"Top = content"+x+"Height  - content"+x+"_out * 0.5;");
        eval("posControl"+y+".css({'top': content"+y+"Top ,'z-index':"+z+"});");

        /* console.log('---------layer2222222222222 reach top----------');

         var content2_out =  content2PosBottom  -  scroll ;
         var content3Top = content2Height  - content2_out * 0.5;
         posControl3.css({'top': content3Top ,'z-index':-1});*/
    }


    if(content3atBottom < (screenHeight * 1.5)) {
        /*paLayerMove(3,-2);*/
        if(screenWidth<=1400){
            settingTop(logo_pattern1,logo_pattern1Top,1.3,0.3);
                if(screenWidth<=1024) {
                    settingTop(logo_pattern1,logo_pattern1Top,1.8,0.3);
                }

            }
        else{
            settingTop(logo_pattern1,logo_pattern1Top,1.2,0.3);
        }

    }

    if(moveCondition(3)) {
        /*paLayerMove(4,-2);*/
        if(screenWidth<=1400){
             settingTop(logo_pattern2,logo_pattern2Top,1.35,0.25);
                if(screenWidth<=1024) {
                    settingTop(logo_pattern2,logo_pattern2Top,1.45,0.2);
                }
        }
        else{
            settingTop(logo_pattern2,logo_pattern2Top,1.25,0.26);
        }

    }

    if(moveCondition(4)) {
        paLayerMove(5,-2);

    }
    if(moveCondition(5)) {
        /*paLayerMove(6,-2);*/

    }

    if(moveCondition(6)) {
        paLayerMove(7,-2);

    }

    /*加视觉差内容要修改的地方 3/3 */

}



