$('.lang_select').click(function(){
    $('.lang ul').show();
});

$('.lang ul li').click(function(){
    var merong = $(this).text();
    $('.lang_select i').text(merong);
    $('.lang ul').hide();
});

$('.gnb').mouseenter(function(){
    $('.lnb').show();
    $('.lnb_bg').show();
});
$('.lnb_bg').mouseleave(function(){
    $('.lnb').hide();
    $('.lnb_bg').hide();
});

$('h1, .lang, .topmenu').mouseenter(function(){
    $('.lnb').hide();
    $('.lnb_bg').hide();
})

$('.lnb li').mouseover(function(){
    $(this).children('.lnb2').show();
});
$('.lnb li').mouseout(function(){
    $(this).children('.lnb2').hide();
});


// $('#search_wrap').hide();
// $('body').append('<div class="search_modal"></div>');
$('.btn_search').click(function(){
    $('#search_wrap').slideToggle(500);
    $('#search_wrap input').focus().val('');
    
    
    // if($('.search_modal').length == 0){
    //     $('body').append('<div class="search_modal"></div>')
    // }  //처음 0개일때만 새로 추가
    
    $('.search_modal').fadeToggle();

});

        
$('.search_modal').click(function(){
    $('#search_wrap').slideUp(500);
    $('.search_modal').fadeOut();
});



//section01
$('#section01 .tit_box li').click(function(){
    // var liBunho = $(this).index();
    // $('.article ul').hide();
    // $('.article ul').eq(liBunho).show();


    var liDataMerong = $(this).attr('data-merong');
    $('.article ul').hide();
    $('.article ul.'+liDataMerong).show();

    $('#section01 .tit_box li').removeClass('on');
    $(this).addClass('on');

    return false;    //event.preventDefault();

});

// $('.tit_box li').eq(0).click(function(){
//     $('.article ul').hide();
//     $('.article ul').eq(0).show();
// })

// $('.tit_box li').eq(1).click(function(){
//     $('.article ul').hide();
//     $('.article ul').eq(1).show();
// })

// $('.tit_box li').eq(2).click(function(){
//     $('.article ul').hide();
//     $('.article ul').eq(2).show();
// })

// $('.tit_box li').eq(3).click(function(){
//     $('.article ul').hide();
//     $('.article ul').eq(3).show();
// })


$('.baro1 img').click(function(){
    var imgAlt = $(this).attr('alt');

    if(imgAlt == 'icon3'){
        $(this).css({border:'10px solid red'});
    } else if(imgAlt == 'icon2'){
        $(this).css({border:'10px solid lime'})
    } else {
        $(this).css({border:'10px solid orange'})
    }
    

    return false
});


if(window.location.href.match('index.html')){
    merong()
}


// function merong(){
//     var pText = $('.text_box p').text();
//     var pText2 = pText.replace('사랑','메롱');
//     $('.text_box p').text(pText2);
// }



$(window).scroll(function(){   // 스크롤값이 바뀔때 실행

    var scrT = $(window).scrollTop();   //바뀌는 스크롤값을 알아내고
    var winH = $(window).height();   //현화면 높이를 알아내서
    console.log(scrT)


    if(scrT > 500){  //스크롤값이 500보다 큰 때가 오면
        $('.go_top').stop().animate({top:scrT + winH - 110});   //요게 실행
    } else {  //반대의 경우는
        $('.go_top').stop().animate({top:scrT + winH - 110});   //요게 실행
    }

});

$('.go_top').click(function(){
    $('html').animate({scrollTop:0});
});



$('.card_box li').each(function(){
    var cardIndex = $(this).index()+1;
    console.log('카드번호 : '+cardIndex);

    $(this).find('em').text('0'+cardIndex)
});


//현재페이지 표시

var pageUrl = window.location.href;

//visual_sub 에 들어갈 제목불러오기
$('.gnb li a').each(function(){
    var gnbA = $(this).attr('href');
    if(pageUrl.indexOf(gnbA) >= 0){
        var visualText = $(this).parents('.lnb').siblings('a').text();  //1차카테고리명
        $('.text_sub strong').text(visualText);
        
        var sectionH2 = $(this).text();  //2차카테고리명
        $('#section_sub h2').text(sectionH2);

        var lnbHtml = $(this).parents('.lnb').html();  //2차카테고리 lnb안에 있는 li들 html 소스불러오기
        $('.snb').html(lnbHtml);
    };
})

$('.snb li a').each(function(){
    var snbA = $(this).attr('href');
    if(pageUrl.indexOf(snbA) != -1){
        $(this).parent().addClass('on');
    };
});




$('.article > ul > li > p').each(function(){
    var textMaxLength = 80;
    var textLength = $(this).text().length;
    if(textLength >= textMaxLength){
        var pContent = $(this).text().substr(0, textMaxLength); //0번째 자리부터 50개 글자
        $(this).text(pContent + '...');
    };
});



var gnbContent = $('.gnb').html();
$('.m_gnb').html(gnbContent)



$('.m_gnb > li > a').click(function(){
    $(this).siblings('.lnb').slideToggle().parent().siblings().find('.lnb').slideUp();
    return false;
}); 

$('.hambuger').click(function(){
    $('.m_modal').fadeIn(200);
    $('.sidemenu').addClass('on');
});
$('.m_btn_close').click(function(){
    $('.m_modal').fadeOut(200);
    $('.sidemenu').removeClass('on');
});