var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#a_counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 600) {
      if (cc < 2) {
        $(".anumber").addClass("a_viz");
        $('span').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 400 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});