  const partner1 = $(".partner div").first();
  const partnerN = $(".partner div").last();
  const offset1 = partner1.offset();
  const offsetN = partnerN.offset();

const scrollLeft = $("figure.image").animate({
  left: '-=160px',
  }, 3000, function() {
});


$('#about').hover(function(e) {
  console.log(e);
});


$('#about').scroll(function() {
  console.log(this);
})
