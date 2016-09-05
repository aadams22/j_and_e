$(function(){
  $("#intro > div > h3").hide();

  var names = $("#intro > div > h3:nth-of-type(1)");
  var date  = $("#intro > div > h3:nth-of-type(2)");

  function addText(n,d) {
    n.fadeIn(3000);
    setTimeout(function(){ d.fadeIn(3000); }, 2000);
  }
  
  addText(names, date);
});