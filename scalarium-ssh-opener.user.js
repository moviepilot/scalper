// ==UserScript==
// @name           scalarium-ssh-opener 
// @namespace      scalarium
// @description    adds an ssh://ubuntu@<server> link next to the ip link (the link has the console icon). On linux with gnome use the script 'open-ssh-linux'; for this,  you need to install these dependencies: xdotool & wmctrl
// @include        https://*.scalarium.com/*
// ==/UserScript==


// Add jQuery
    var GM_JQ = document.createElement('script');
    GM_JQ.src = 'http://jquery.com/src/jquery-latest.js';
    GM_JQ.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(GM_JQ);

// Check if jQuery's loaded
    function GM_wait() {
      if(typeof unsafeWindow.jQuery == 'undefined') { window.setTimeout(GM_wait,100); }
      else { jQuery = unsafeWindow.jQuery; letsJQuery(); }
    }
    GM_wait();

// All your GM code must be inside this function
    function letsJQuery() {

      jQuery('[data-ip]').append("<a title='open in external program' href='#' onclick='location.href=\"ssh://ubuntu@\" + $(this).parent().attr(\"data-ip\")'><img src='https://manage.scalarium.com/images/icons/ssh.png'></a>")
    }

