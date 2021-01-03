﻿!(function (e) {
   "use strict";
   var a,
       t,
       i,
       s,
       o,
       n,
       r,
       l,
       d,
       c,
       p,
       u,
       m,
       v,
       h,
       g,
       f,
       w,
       C,
       y,
       b,
       k,
       x,
       I,
       S,
       _,
       T,
       P,
       z,
       H,
       q,
       O,
       D,
       M,
       W,
       j,
       A,
       B,
       U = e(window),
       E = e(document),
       L = parseInt(991, 10),
       R = e("body");
   U.on("load", function () {}),
       (function () {
           function a() {
               var a = parseInt(e(".header").innerHeight(), 10);
               parseInt(U.innerWidth(), 10) <= L ? e(".header:not(.header--dark, .header--light, .header-fixed)").css("min-height", "auto") : e(".header:not(.header--dark, .header--light, .header-fixed)").css("min-height", a);
           }
           E.ready(function () {
               a();
           }),
           
            U.on("resize", function () {
                   a();
               });
           var t = parseInt(e(".header-nav").offset().top, 10),
               i = parseInt(t + 1, 10);
           e(window).on("scroll", function () {
               var a = e(".header--sticky");
               parseInt(e(window).scrollTop(), 10) >= i ? a.addClass("header-fixed") : a.removeClass("header-fixed");
           }),
               e(function () {
                   var a = e(".header--sticky");
                   U.on("resize", function () {
                       if (U.width() > L) return a.removeClass("no-stick");
                       a.addClass("no-stick");
                   }).trigger("resize");
               });
       })(),
       (a = e("#header, .header").attr("data-header-hover")),
       (t = e("#header, .header")),
       "true" === a ? e(t).addClass("header-hover") : e(t).removeClass("header-hover"),
       (i = e(".nav-menu > ul > li")),
       (s = e(".nav-dropdown")),
       (o = e(".nav-menu-item")),
       (n = e(".menu-mobile-btn")),
       (r = e(".nav-menu")),
       e('.nav-dropdown .row [class*="col-"] figure').siblings("img").addClass("themeshot-img"),
       e(".nav-menu > ul > li:has( > .nav-dropdown)").prepend('<span class="menu-dropdown-icon"></span>'),
       e(".nav-dropdown > ul > li:has( > .nav-dropdown-sub)").addClass("sub-dropdown-icon"),
       e(".nav-menu > ul > li:has( > .nav-dropdown)").addClass("dd-menu-dropdown-icon"),
       U.on("resize", function () {
           e(window).width() > L && e(".nav-dropdown > ul > li ul li:has(.nav-dropdown-sub)").addClass("sub-dropdown-icon"),
               e(window).width() <= L && e(".nav-dropdown > ul > li ul li:has(.nav-dropdown-sub)").removeClass("sub-dropdown-icon");
       }),
       E.ready(function () {
           i.on("mouseenter mouseleave", function (a) {
               e(window).width() > L && (e(this).children(".nav-dropdown").stop(!0, !1).fadeToggle(150), a.preventDefault());
           }),
               e(".menu-dropdown-icon").on("click", function () {
                   e(window).width() <= L && e(this).siblings(".nav-dropdown").stop(!0, !1).fadeToggle(150);
               }),
               U.on("resize", function () {
                   e(window).width() > L && e(".nav-dropdown, .nav-dropdown-sub").fadeOut(150);
               }),
               o.on("mouseenter mouseleave", function (a) {
                   e(window).width() > L && (e(this).children(".nav-dropdown-sub").stop(!0, !1).fadeToggle(150), a.preventDefault());
               }),
               o.on("click", function () {
                   e(window).width() <= L && e(this).children(".nav-dropdown-sub").stop(!0, !1).fadeToggle(150);
               });
       }),
       U.on("resize", function () {
           s.each(function (a) {
               if (e(this).hasClass("center")) {
                   var t = e(this).outerWidth() / 2 - e(this).parents(o).outerWidth() / 2;
                   U.width() > L ? e(this).css("left", "-" + t + "px") : e(this).css("left", "0");
               }
           });
       }),
       n.on("click", function (a) {
           r.toggleClass("show-on-mobile"), e(this).toggleClass("active"), a.preventDefault();
       }),
       (l = e(".dropdown--trigger")),
       (d = e(".dropdown--menu")),
       (c = "trigger--active"),
       (p = "dropdown--active"),
       (u = "parent--active"),
       (m = function () {
           d.removeClass(p), d.siblings(l).removeClass(c), d.parent().removeClass(u);
       }),
       l.append("<i class='dropdown--trigger-arrow fa fa-angle-down'></i>"),
       l.on("click", function (a) {
           a.stopPropagation(),
               e(this).hasClass(c)
                   ? (e(this).removeClass(c), e(this).siblings(d).removeClass(p), e(this).parent().removeClass(u))
                   : (l.removeClass(c).siblings(d).removeClass(p).parent().removeClass(u), e(this).addClass(c), e(this).siblings(d).addClass(p), e(this).parent().addClass(u));
       }),
       E.on("click touchstart", function (a) {
           e(a.target).closest(d, l).length || (l.removeClass(c), d.removeClass(p), l.parent().removeClass(u), a.stopPropagation());
       }),
       e(".nav-icon-trigger:not(.dropdown--trigger)").on("click", function (e) {
           m();
       }),
       e(window).on("scroll", function () {
           e(window).scrollTop() >= e(".header-nav").offset().top && e(".topbar-component .dropdown--trigger").hasClass(c) && m();
       }),
       (v = e(".search-menu-btn")),
       (h = e(".searchbar-menu")),
       (g = e(".search-close-icon")),
       (f = "active"),
       (w = "search-menu-open"),
       (C = "search-active"),
       (y = function () {
           h.removeClass(w), v.removeClass(f), v.parent().removeClass(C);
       }),
       v.on("click", function (a) {
           a.stopPropagation(),
               e(this).hasClass(f)
                   ? (e(this).removeClass(f), h.removeClass(w), e(this).parent().removeClass(C))
                   : (v.removeClass(f).parent().removeClass(C),
                     h.removeClass(w),
                     e(this).addClass(f),
                     h.addClass(w),
                     e(this).parent().addClass(C),
                     setTimeout(function () {
                         e(".searchbar-menu input.search-field").focus();
                     }, 300));
       }),
       g.on("click", function (e) {
           y();
       }),
       E.on("click touchstart", function (a) {
           e(a.target).closest(h, v).length || (v.removeClass(f), h.removeClass(w), v.parent().removeClass(C), a.stopPropagation());
       }),
       e(".dropdown--trigger, .cart-sidebar-btn, .user-menu-btn, .menu-mobile-btn").on("click", function (e) {
           y();
       }),
       (b = e(".cart-sidebar-btn")),
       (k = e(".cart-sidebar-menu")),
       (x = e(".close-cart-sidebar")),
       (I = "active"),
       (S = "cart-sidebar-open"),
       (_ = "cart-active"),
       (T = function () {
           R.removeClass(S), b.removeClass(I), b.parent().removeClass(_);
       }),
       b.on("click", function (a) {
           a.stopPropagation(),
               e(this).hasClass(I)
                   ? (e(this).removeClass(I), R.removeClass(S), e(this).parent().removeClass(_))
                   : (b.removeClass(I).parent().removeClass(_), R.removeClass(S), e(this).addClass(I), R.addClass(S), e(this).parent().addClass(_));
       }),
       x.on("click", function (e) {
           T();
       }),
       E.on("click touchstart", function (a) {
           e(a.target).closest(k, b).length || (b.removeClass(I), R.removeClass(S), b.parent().removeClass(_), a.stopPropagation());
       }),
       e(".dropdown--trigger, .search-menu-btn").on("click", function (e) {
           T();
       }),
       e.fn.extend({
           rotaterator: function (a) {
               var t = { fadeSpeed: parseInt(500, 10), pauseSpeed: parseInt(100, 10), child: null };
               return (
                   (a = e.extend(t, a)),
                   this.each(function () {
                       var t = a,
                           i = e(this);
                       if (
                           (e(i.children(), i).each(function () {
                               e(this).hide();
                           }),
                           t.child)
                       )
                           s = t.child;
                       else var s = e(i).children(":first");
                       e(s).fadeIn(t.fadeSpeed, function () {
                           e(s)
                               .delay(t.pauseSpeed)
                               .fadeOut(t.fadeSpeed, function () {
                                   var a = e(this).next();
                                   0 == a.length && (a = e(i).children(":first")), e(i).rotaterator({ child: a, fadeSpeed: t.fadeSpeed, pauseSpeed: t.pauseSpeed });
                               });
                       });
                   })
               );
           },
       }),
       E.ready(function () {
           e(".offer-hignlight").rotaterator({ fadeSpeed: parseInt(500, 10), pauseSpeed: parseInt(3e3, 10) });
       }),
       e(".promotion-close").on("click", function () {
           e(".promotion-box").slideUp(50, function () {
               e(this).css({ display: "none", opacity: "0" });
           });
       }),
       E.ready(function () {
           
       }),
       E.on("mouseup", function (a) {
           var t = e("#newsletter-popup");
           t.is(a.target) || 0 !== t.has(a.target).length || (t.fadeOut(), e("#active-newsletter-popup").fadeOut());
       }),
       e(".owl-carousel").each(function (a) {
           var t = e(this),
               i = "#header, .header",
               s = "header--dark",
               o = "header--light";
           if (
               (t.on("initialized.owl.carousel translated.owl.carousel refreshed.owl.carousel", function (a) {
                   var t = e(".owl-carousel").find(".owl-item.active .item").attr("data-slide_theme");
                   "light-slide" == t && e(i).addClass(o).removeClass(s), "dark-slide" == t && e(i).addClass(s).removeClass(o);
               }),
               "true" === t.attr("data-nav"))
           )
               var n = !0;
           else n = !1;
           if ("true" === t.attr("data-dots")) var r = !0;
           else r = !1;
           function l() {
               U.width() < parseInt(992, 10) ? e(".owl-product-gallery-slider").addClass("owl-carousel owl-theme") : e(".owl-product-gallery-slider").removeClass("owl-carousel owl-theme");
           }
           function d() {
               e(".owl-product-gallery-slider").owlCarousel({
                   navigation: !0,
                   slideSpeed: 500,
                   margin: 0,
                   paginationSpeed: 400,
                   autoplay: !0,
                   autoHeight: !0,
                   items: 1,
                   singleItem: !0,
                   itemsDesktop: !1,
                   itemsDesktopSmall: !1,
                   itemsTablet: !1,
                   itemsMobile: !1,
                   loop: !0,
                   dots: !1,
                   nav: !0,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
               });
           }
           e(".intro_slider1").owlCarousel({
               nav: n,
               dots: r,
               navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
               margin: 0,
               items: 1,
               singleItem: !0,
               stagePadding: 0,
               smartSpeed: 200,
               autoplay: !0,
               autoplayTimeout: 6e3,
               autoplayHoverPause: !0,
               loop: !0,
               autoHeight: !0,
               responsive: { 0: { nav: !1, dots: !0 }, 768: { nav: !1, dots: !0 }, 992: { nav: !0, dots: !1 } },
           }),
               e(".product-item-5").owlCarousel({
                   items: 5,
                   loop: !1,
                   margin: 30,
                   autoplay: !1,
                   autoplayHoverPause: !0,
                   singleItem: !0,
                   dots: !1,
                   nav: !0,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   responsive: { 0: { items: 1 }, 320: { items: 1 }, 480: { items: 2 }, 775: { items: 3 }, 991: { items: 4 }, 1170: { items: 5 } },
               }),
               e(".product-item-4").owlCarousel({
                   items: 4,
                   loop: !1,
                   margin: 30,
                   autoplay: !1,
                   autoplayHoverPause: !0,
                   singleItem: !0,
                   dots: !1,
                   nav: !0,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   responsive: { 0: { items: 1 }, 320: { items: 1 }, 480: { items: 2 }, 775: { items: 2 }, 991: { items: 3 }, 1170: { items: 4 } },
               }),
               e(".product-item-3").owlCarousel({
                   items: 3,
                   loop: !1,
                   margin: 30,
                   autoplay: !1,
                   autoplayHoverPause: !0,
                   singleItem: !0,
                   dots: !1,
                   nav: !0,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   responsive: { 0: { items: 1 }, 480: { items: 1 }, 775: { items: 2 }, 991: { items: 3 }, 1170: { items: 3 } },
               }),
               e(".product-item-2").owlCarousel({
                   items: 2,
                   loop: !1,
                   margin: 30,
                   autoplay: !1,
                   autoplayHoverPause: !0,
                   singleItem: !0,
                   dots: !1,
                   nav: !0,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   responsive: { 0: { items: 1 }, 480: { items: 1 }, 775: { items: 2 }, 991: { items: 2 }, 1170: { items: 2 } },
               }),
               e(".product-item-1").owlCarousel({
                   items: 1,
                   loop: !1,
                   margin: 30,
                   autoplay: !1,
                   autoplayHoverPause: !0,
                   singleItem: !0,
                   dots: !0,
                   nav: !0,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   responsive: { 0: { items: 1 }, 480: { items: 1 }, 775: { items: 1 }, 991: { items: 1 }, 1170: { items: 1 } },
               }),
               e(".review-slider").owlCarousel({
                   items: 5,
                   loop: false,
                   margin: 20,
                   autoplay: !0,
                   autoplayTimeout: 3e3,
                   autoplayHoverPause: !0,
                   singleItem: !0,
                   autoHeight: !0,
                   dots: !1,
                   nav: !1,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   responsive: { 0: { items: 1 }, 580: { items: 2 }, 991: { items: 3 }, 1140: { items: 3 }, 1450: { items: 3 } },
               }),
               e(".testimonials-slider").owlCarousel({
                   items: 1,
                   loop: !0,
                   margin: 0,
                   slideSpeed: 300,
                   autoplay: !0,
                   autoplayHoverPause: !0,
                   autoHeight: !0,
                   singleItem: !0,
                   dots: !0,
                   nav: !1,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   animateIn: "fadeIn",
                   animateOut: "fadeOut",
               }),
               e(".blog-slider").owlCarousel({
                   items: 4,
                   loop: !1,
                   margin: 30,
                   autoplay: !1,
                   autoplayHoverPause: !0,
                   singleItem: !0,
                   dots: !1,
                   nav: !0,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   responsive: { 0: { items: 1 }, 480: { items: 1 }, 775: { items: 2 }, 991: { items: 3 }, 1170: { items: 3 } },
               }),
               e(".review-slider").owlCarousel({
                items: 4,
                loop: !1,
                margin: 5,
                autoplay: !1,
                autoplayHoverPause: !0,
                singleItem: !0,
                dots: !1,
                nav: !0,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: { 0: { items: 1 }, 480: { items: 1 }, 775: { items: 2 }, 991: { items: 4 }, 1170: { items: 4 } },
               }),
               e(".brand-logo-slider").owlCarousel({
                   items: 7,
                   loop: !0,
                   margin: 0,
                   autoplay: !0,
                   autoplayHoverPause: !0,
                   dots: !1,
                   nav: !1,
                   singleItem: !0,
                   transitionStyle: !0,
                   responsive: { 0: { items: 1 }, 250: { items: 1 }, 320: { items: 2 }, 550: { items: 3 }, 775: { items: 4 }, 991: { items: 6 }, 1170: { items: 6 } },
               }),
               e(".instagram-slider").owlCarousel({
                   items: 5,
                   loop: !0,
                   margin: 0,
                   autoplay: !0,
                   autoplayTimeout: 3e3,
                   autoplayHoverPause: !0,
                   singleItem: !0,
                   autoHeight: !0,
                   dots: !1,
                   nav: !1,
                   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                   responsive: { 0: { items: 1 }, 580: { items: 2 }, 991: { items: 3 }, 1140: { items: 4 }, 1450: { items: 5 } },
               }),
               E.ready(function () {
                   U.width() < parseInt(992, 10) ? d() : e(".owl-product-gallery-slider").addClass("off"), l();
               }),
               U.on("resize", function () {
                   var a;
                   U.width() < parseInt(992, 10) ? d() : ((a = e(".owl-product-gallery-slider")).trigger("destroy.owl.carousel"), a.addClass("off")), l();
               }),
               t.owlCarousel();
       }),
       (function () {
         //   var a = e(".product-media-slider"),
         //       t = e(".product-media-thumb-slider");
         //   if (t.hasClass("thumb-vertical-slider")) var i = !0;
         //   else i = !1;
         //   if (t.hasClass("thumb-vertical-slider"));
         //   else;
         //   a.slick({
         //       dots: !1,
         //       fade: !0,
         //       cssEase: "linear",
         //       slidesToShow: 1,
         //       slidesToScroll: 1,
         //       adaptiveHeight: !0,
         //       asNavFor: t,
         //       infinite: !0,
         //       nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
         //       prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
         //   }),
         //       t.slick({
         //           slidesToShow: 6,
         //           slidesToScroll: 1,
         //           lazyLoad: "progressive",
         //           asNavFor: a,
         //           vertical: i,
         //           dots: !1,
         //           centerMode: !1,
         //           adaptiveHeight: !0,
         //           infinite: !1,
         //           focusOnSelect: !0,
         //           nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
         //           prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
         //       }),
         //       e(".product-media-thumb-slider .slick-slide").removeClass("slick-active"),
         //       e(".product-media-thumb-slider .slick-slide").eq(0).addClass("slick-active"),
         //       a.on("beforeChange", function (a, t, i, s) {
         //           var o = s;
         //           e(".product-media-thumb-slider .slick-slide").removeClass("slick-active"), e(".product-media-thumb-slider .slick-slide").eq(o).addClass("slick-active");
         //       });
       })(),
       e(".background-image").each(function () {
           var a = e(this).attr("data-background"),
               t = e(this).attr("data-bg-posX"),
               i = e(this).attr("data-bg-posY");
           e(this)
               .css("background-image", 'url("' + a + '")')
               .css("background-position-x", t)
               .css("background-position-y", i);
       }),
       (P = e(".filter-menu-btn")),
       (z = e(".filterbar-dropdown-menu")),
       (H = e(".filter-close-icon")),
       (q = "active"),
       (O = "filter-dropdown-menu-open"),
       (D = "filter-active"),
       P.on("click", function (a) {
           a.stopPropagation(),
               e(this).hasClass(q)
                   ? (e(this).removeClass(q), z.removeClass(O), e(this).parent().removeClass(D))
                   : (P.removeClass(q).parent().removeClass(D), z.removeClass(O), e(this).addClass(q), z.addClass(O), e(this).parent().addClass(D));
       }),
       H.on("click", function (e) {
           z.removeClass(O), P.removeClass(q), P.parent().removeClass(D);
       }),
       (M = e(".product-list-switcher")),
       (W = e(".product-grid-switcher")),
       (j = e(".product-list-item")),
       M.on("click", function (e) {
           e.preventDefault(), j.addClass("product-list-view"), M.addClass("product-view-icon-active"), W.removeClass("product-view-icon-active");
       }),
       W.on("click", function (e) {
           e.preventDefault(), j.removeClass("product-list-view"), M.removeClass("product-view-icon-active"), W.addClass("product-view-icon-active");
       }),
    //    e(".price-range-slider").slider({
    //        range: !0,
    //        min: 0,
    //        max: 500,
    //        values: [0, 400],
    //        slide: function (a, t) {
    //            e(".price-range-from-to").html("Price : <span class='from'>$" + t.values[0] + "</span> &mdash; <span class='to'>$" + t.values[1]), e(".price_range_min").val(t.values[0]), e(".price_range_max").val(t.values[1]);
    //        },
    //    }),
    //    e(".price-range-from-to").html("Price : <span class='from'>$" + e(".price-range-slider").slider("values", 0) + "</span> &mdash; <span class='to'>$" + e(".price-range-slider").slider("values", 1) + "</span>"),
    //    e(".price_range_min").val(e(".price-range-slider").slider("values", 0)),
    //    e(".price_range_max").val(e(".price-range-slider").slider("values", 1)),
       E.ready(function () {
           e('.product-color-choose input[type="radio"]')
               .on("change.symptom", function () {
                   e(this).toggleClass("active", this.checked), e(this).closest("input").toggleClass("active", this.checked);
               })
               .trigger("change.symptom");
       }),
       e(".product-color-choose input").on("click", function () {
           var a = e(this).attr("data-image");
           e(".product-color-choose .active").removeClass("active"), e(".left-column img[data-image = " + a + "]").addClass("active"), e(this).addClass("active");
       }),
       E.ready(function () {
           e('.product-select-size input[type="checkbox"]')
               .on("change.symptom", function () {
                   e(this).parent().toggleClass("active", this.checked), e(this).closest("input").toggleClass("active", this.checked);
               })
               .trigger("change.symptom");
       }),
       e(".product-select-size label").on("click", function () {
           var a = e(this).find("input");
           if (a.is(":checked")) {
               var t = e("input:checkbox[name='" + a.attr("name") + "']");
               e(t).prop("checked", !1), e(t).removeClass("active"), e(t).parent().removeClass("active"), a.prop("checked", !0), a.addClass("active"), a.parent().addClass("active");
           } else a.prop("checked", !1), a.removeClass("active"), a.parent().removeClass("active");
       }),
       e(".product-select-size input[disabled]").parent().addClass("disabled"),
       e(".product-select-size input[disabled]").addClass("disabled"),
       e(".comment-form .stars a").on("click", function () {
           e(".comment-form .stars .active").removeClass("active"), e(this).addClass("active");
       }),
       (A = e(".quantity").attr("min")),
       (B = e(".quantity").attr("max")),
       e(".quantityPlus").on("click", function () {
           var a = parseInt(e(this).prev(".quantity").val(), 10);
           e("p:first").text(),
               a != parseInt(B, 10) &&
                   e(this)
                       .prev(".quantity")
                       .val(a + 1);
       }),
       e(".quantityMinus").on("click", function () {
           var a = parseInt(e(this).next(".quantity").val(), 10);
           a != parseInt(A, 10) &&
               e(this)
                   .next(".quantity")
                   .val(a - 1);
       }),
       (function () {
           e(".widget_nav_menu .menu > li:has( > ul )").addClass("main-accordionIcon"),
               e(".widget_nav_menu .menu > li:has( > ul ) > a").after("<span class='jq-accordionIcon'></span>"),
               e(".widget_nav_menu .menu > li li:has( > ul ) > a").after("<span class='jq-accordionIcon'></span>"),
               e(".widget_nav_menu .menu li ul").hide(),
               e(".widget_nav_menu .menu li .jq-accordionIcon").on("click", function (a) {
                   e(".widget_nav_menu .menu li a").each(function (a) {
                       e(this).next().next().is("ul") && e(this).next().next().is(":visible") && e(this).next().next().is("ul.sub-menu") && e(this).next().next().is(":hidden") && e(this).next().slideUp();
                   }),
                       e(".widget_nav_menu .menu ul ul").slideUp(),
                       (a = e(this)).next().is("ul") && a.next().is(":visible")
                           ? a.next().slideUp()
                           : (e(".widget_nav_menu .menu > li:has( > ul )").hasClass("main-accordionIcon is-active") &&
                                 (e(this).closest(".main-accordionIcon.is-active").children(".jq-accordionIcon").next().is(":visible") ||
                                     (e(".widget_nav_menu .menu > li.main-accordionIcon.is-active").find("> ul").slideUp(), e(".widget_nav_menu .menu > li.main-accordionIcon.is-active").removeClass("is-active"))),
                             a.next().slideDown());
               });
           var a = e(".widget_nav_menu .menu ul > li > .jq-accordionIcon");
           e(".widget_nav_menu .menu li .jq-accordionIcon").on("click", function (t) {
               e(this).parent("li").hasClass("is-active") ? e(this).parent("li").removeClass("is-active") : (e(a).parent("li").not(this).removeClass("is-active"), e(this).parent("li").addClass("is-active"));
           });
       })(),
       (function () {
           if (e(".product-gallery-style3").length) new StickySidebar(".product-page-content", { containerSelector: ".product-gallery-style3", topSpacing: 90, bottomSpacing: 20, minWidth: 992 });
       })(),
       e('[data-toggle="tooltip"]').tooltip(),
       e("[data-countdown]").each(function () {
           var a = e(this),
               t = e(this).data("countdown");
           a.countdown(t, function (e) {
               a.html(e.strftime('<div><span class="days">%D</span>Days</div><div><span>%H</span>Hours</div><div><span>%M</span>Minutes</div><div><span>%S</span>Second</div>'));
           });
       }),
       e("[data-countdown]").on("finish.countdown", function (a) {
           e(this).html("<div><span>This offer has expired!</span></div>").addClass("disabled").css("color", "#fd6262 ");
       }),
    //    e(".popup-youtube, .popup-vimeo, .popup-gmaps, .video-popup").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
    //    e(".mfp-gallery-popup").magnificPopup({
    //        delegate: ".mfp-gallery-popup-link",
    //        type: "image",
    //        tLoading: "Loading image #%curr%...",
    //        mainClass: "mfp-img-mobile",
    //        closeOnContentClick: !1,
    //        gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
    //        image: {
    //            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    //            titleSrc: function (e) {
    //                return e.el.attr("title");
    //            },
    //        },
    //    }),
    //    e(".mfp-link-popup").magnificPopup({ type: "image" }),
    //    e(".insta-gallery").magnificPopup({ type: "image", delegate: "a", gallery: { enabled: !0 } }),
       (function () {
        //    var a = new Instafeed({
        //        get: "user",
        //        userId: "17841407867034883",
        //        limit: 8,
        //        resolution: "standard_resolution",
        //        accessToken: "IGQVJWaTJtWmg4R2VRTkE1TmluN0VMc29HMXF0enYyOXJudjhNWlJWczM1ZA3g4YnZA2X20tdjY1ZAHd0cnRwZAUNrMGdHZAmFuWngxX3U0TFdpNUNlSi1qbzVNN2hwREVXQmthMVU4ckRTendEQXpNWFJTS0w1WmdXNmpVS0JZA",
        //        sortBy: "most-recent",
        //        template:
        //            '<div class="col-sm-6 col-md-4 col-lg-3 instaimg nf-grid-item"><a href="{{image}}" title="{{caption}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="fa fa-heart"></i> {{likes}}</span><span class="comments"><i class="fa fa-comment"></i> {{comments}}</span></div><img src="{{image}}" alt="{{caption}}" class="img-responsive"></div></a></div>',
        //        target: "instagram-feed",
        //        after: function () {
        //            this.hasNext() || t.setAttribute("disabled", "disabled");
        //        },
        //    });
        //    if (e("#instagram-feed").length) {
        //        a.run();
        //        var t = document.getElementById("instafeed-load-btn");
        //        t.addEventListener("click", function () {
        //            a.next();
        //        });
        //    }
        //    var i = new Instafeed({
        //        get: "user",
        //        userId: "17841407867034883",
        //        limit: 6,
        //        resolution: "standard_resolution",
        //        accessToken: "IGQVJWaTJtWmg4R2VRTkE1TmluN0VMc29HMXF0enYyOXJudjhNWlJWczM1ZA3g4YnZA2X20tdjY1ZAHd0cnRwZAUNrMGdHZAmFuWngxX3U0TFdpNUNlSi1qbzVNN2hwREVXQmthMVU4ckRTendEQXpNWFJTS0w1WmdXNmpVS0JZA",
        //        sortBy: "most-recent",
        //        template:
        //            '<div class="col-sm-6 col-md-4 col-lg-2 instaimg nf-grid-item"><a href="{{link}}" title="{{caption}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="fa fa-heart"></i> {{likes}}</span><span class="comments"><i class="fa fa-comment"></i> {{comments}}</span></div><img src="{{image}}" alt="{{caption}}" class="img-responsive"></div></a></div>',
        //        target: "instagram-feed_2",
        //    });
        //   e("#instagram-feed_2").length && i.run();
          
       })(),
       e('a[data-toggle="tab"]').on("shown.bs.tab", function (a) {
           e(e(a.target).attr("href")).find(".owl-carousel").owlCarousel("invalidate", "width").owlCarousel("update");
       }),
       (function () {
           var a = document.querySelector(".product-gallery-grid");
           if (e(a).length) new Isotope(a, { layoutMode: "fitRows", itemSelector: ".product-gallery-image" });
           var t = document.querySelector(".blog-masonry-wrap");
           if (e(t).length) new Isotope(t, { itemSelector: ".blog-item-grid", percentPosition: !0, masonry: { columnWidth: ".blog-item-grid", horizontalOrder: !1 } });
           var i = document.querySelector(".portfolio-masonry");
           if (e(i).length) new Isotope(i, { itemSelector: ".portfolio-item-grid", percentPosition: !0, masonry: { columnWidth: ".portfolio-item-grid.col-lg-6, .portfolio-grid-sizer", horizontalOrder: !1 } });
           var s = document.querySelector(".portfolio-grid");
           if (e(s).length) new Isotope(s, { layoutMode: "fitRows", itemSelector: ".portfolio-item-grid" });
       })()
       
})(jQuery);
