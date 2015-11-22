
var conditionByAge = {hyper:0, cancer:0, heart:0, diabetes:0, cholestrol:0};




function showGaugeDetail(){
	min = $("#rangeslider").attr("min");
	max = $("#rangeslider").attr("max");
	rn = "";
	
	for(var i = min; i <= max; i++)
	    rn += "<span>"+i+"</span>";
	$("#rn").html(rn);

	updateOutput($("#rangeslider").val(), false);
}

var rfigure, h, v;
function updateOutput(figure, activate) {
  if(activate)
    $("#input-wrapper").addClass("active");
  
  rfigure = Math.round(figure);
  $("#static-output").html(rfigure);
  
  h = figure/max*($("#input-wrapper").width()-$("#reel").width()) + 'px';
  v = rfigure*$("#reel").height()*-1 + 'px';
  
  $("#static-output, #reel").css({left: h});
  $("#rn").css({transform: 'translateY('+v+') translateZ(0)'});
}

function deactivate() {
  $("#input-wrapper").removeClass("active");
}

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

