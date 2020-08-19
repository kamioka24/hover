// hoverの使い方
// functionで区切る(引数を２つ書くことに注意)

$(function() {
  $('#language-wrapper').hover(
    function() {
      $('.language-text').fadeIn(); // マウスを載せた時の処理
    }, // functionの間のカンマを忘れないように
    function() {
      $('.language-text').fadeOut(); // マウスを外した時の処理
    }
  );
});