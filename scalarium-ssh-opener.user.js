// ==UserScript==
// @name           scalarium-ssh-opener 
// @namespace      scalarium
// @description    adds an ssh://ubuntu@<server> link next to the java console link
// @include        https://*.scalarium.com/*
// ==/UserScript==
      $('[data-ip]').append("<a href='#' onclick='location.href=\"ssh://ubuntu@\" + $(this).parent().attr(\"data-ip\")'>open externally</a>")

