jQuery(function ($) {
  $(".answer").css("display", "none");
  // 質問の答えをあらかじめ非表示

  
  
  //質問をクリック
  $(".question").click(function () {
    
    $(".question").not(this).removeClass("open");
    //クリックしたquestion以外の全てのopenを取る

    $(".question").not(this).next().slideUp(300);
    //クリックされたquestion以外のanswerを閉じる
    
    $(this).toggleClass("open");
    //thisにopenクラスを付与
    
    $(this).next().slideToggle(300);
    //thisのcontentを展開、開いていれば閉じる
  
  });
});