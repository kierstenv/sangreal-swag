  const partner1 = $(".partner div").first();
  const partnerN = $(".partner div").last();
  const offset1 = partner1.offset();
  const offsetN = partnerN.offset();

const scrollLeft = $("figure.image").animate({
  left: '-=160px',
  }, 3000, function() {
});

// const sections = $("section");
// const container = $(".scrollContainer");
// container.addEventListener('scroll', function() {
//   sections.forEach(e, i => {
//     const top = (e.getBoundingClientRect().top);
//     if (top == 0) {
//       e.classList.add('inView');
//     } else {
//       e.classList.remove('inView');
//     }
//   });
// // });

// container.dispatchEvent(new Event('scroll'));

$('#about').hover(function(e) {
  console.log(e);
});


