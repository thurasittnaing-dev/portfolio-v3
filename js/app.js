$("#dark-theme").hide();
$(document).ready(function () {
  // type effect
  var typed = new Typed("#typeEffect", {
    strings: ["Full-Stack Developer"],
    typeSpeed: 100,
    loop: false,
  });

  // light mode swithch
  $("#light-theme").on("click", function () {
    $("body").removeClass("dark-theme");
    $("body").addClass("light-theme");

    $("#light-theme").hide();
    $("#dark-theme").show();
  });

  // dark mode swithch
  $("#dark-theme").on("click", function () {
    $("body").removeClass("light-theme");
    $("body").addClass("dark-theme");

    $("#light-theme").show();
    $("#dark-theme").hide();
  });

  // Scroll
  const section = $("#section");
  const aboutPage = $("#aboutPage");
  const projectPage = $("#projectPage");

  $("#section").on("scroll", function () {
    const scrollPosition = section.scrollTop();

    if (scrollPosition >= projectPage.position().top) {
      $("#about").removeClass("active");
      $("#projects").addClass("active");
    } else if (scrollPosition >= aboutPage.position().top) {
      $("#projects").removeClass("active");
      $("#about").addClass("active");
    }
  });
});
