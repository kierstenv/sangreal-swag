  const partner1 = $(".partner div").first();
  const partnerN = $(".partner div").last();
  const offset1 = partner1.offset();
  const offsetN = partnerN.offset();

const scrollLeft = $("figure.image").animate({
  left: '-=160px',
  }, 3000, function() {
});

// const scrollRight = $(".partner").animate({
//   left: '+=100px',
//   }, 2000, function() {
// });
