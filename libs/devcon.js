/*!
 * DevCon v0.0.1 
 * Copyright 2015 Mauritius Software Craftsmanship Community
 */
// Show any email address(es)
(function () {
    var emailNodes = document.querySelectorAll('.email.obfuscated');
    if (emailNodes) {
        for (var i = 0; i < emailNodes.length; i++) {
            var emailNode = emailNodes[i];
            if (emailNode && emailNode.dataset) {
                var obfuscated = emailNode.dataset.email
                    .replace(/ /, "@")
                    .replace(/ /, ".");
                emailNode.setAttribute('href', 'mailto:' + obfuscated);
                if (!emailNode.textContent) {
                    emailNode.textContent = obfuscated;
                }
                console.log(obfuscated);
            }
        }
    }
})();

//$(document).ready(function () {
//    // navigation click actions	
//    $('.scroll-link').on('click', function (event) {
//        event.preventDefault();
//        var sectionID = $(this).attr("data-id");
//        scrollToID('#' + sectionID, 750);
//    });
//    // scroll to top action
//    $('.scroll-top').on('click', function (event) {
//        event.preventDefault();
//        $('html, body').animate({ scrollTop: 0 }, 'slow');
//    });
//    // mobile nav toggle
//    $('#nav-toggle').on('click', function (event) {
//        event.preventDefault();
//        $('#main-nav').toggleClass("open");
//    });
//});

//// scroll function
//function scrollToID(id, speed) {
//    var offSet = 50;
//    var targetOffset = $(id).offset().top - offSet;
//    var mainNav = $('#main-nav');
//    $('html,body').animate({ scrollTop: targetOffset }, speed);
//    if (mainNav.hasClass("open")) {
//        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
//        mainNav.removeClass("open");
//    }
//}

//if (typeof console === "undefined") {
//    console = {
//        log: function () { }
//    };
//}
