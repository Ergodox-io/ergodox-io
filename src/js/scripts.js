$(document).ready(function(){
    $('#nav').onePageNav();

    $('a[href^="http"]').attr('target','_blank');

    $('.toggle').click(function(){
        $('.overview').toggleClass('open');
    });

    fixedBanner()
});

function fixedBanner() {
  var $banner = $('#fixedBanner'),
    cookieName = 'hideBanner'

  if (getCookie(cookieName) !== 'true') {
    $banner.addClass('show')
  }

  $banner.find('.close').click(function() {
    $banner.removeClass('show')
    setCookie(cookieName, true, 30)
  })
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
