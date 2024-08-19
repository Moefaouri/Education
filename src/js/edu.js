"use strict";

let scrollButton = $("#scroll-up");

$(window).on("scroll", function () {
  let sc = $(window).scrollTop();

  if (sc > 600) {
    $("header").find("nav").addClass("nav-sticky");
  } else {
    $("header").find("nav").removeClass("nav-sticky");
  }
});

$(window).scroll(function () {
  $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
});
scrollButton.click(function () {
  $("html,body").animate({ scrollTop: 0 });
});

$("nav ul").on("click", function (e) {
  $("li a").removeClass("active");
  $(e.target).addClass("active");
});

// reveal sections
const allSections = $(".sec");

const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.each(function () {
  const sec = $(this);
  sec.addClass("section-hidden");
  sectionObserver.observe(sec[0]);
});

const sectionsWithId = $("section[id]");

const activeNavLink = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  const id = entry.target.id;
  $("li a").removeClass("active");
  $(`li a[href="#${id}"]`).addClass("active");
};
const navbarObserver = new IntersectionObserver(activeNavLink, {
  root: null,
  threshold: 0.15,
});

sectionsWithId.each(function () {
  const sec = $(this);

  navbarObserver.observe(sec[0]);
});
