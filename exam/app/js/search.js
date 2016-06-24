$(document).ready(function() {


$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	{
		tags: "",
		tagmode: "any",
		format: "json"
	},
	function(data) {
	$.each(data.items, function(i,item){
	$("<img/>").attr("src", item.media.m.replace(/_m/i, "_b")).prependTo(".isotope")
	.wrap("<div class='item'></div>");
	if ( i == 6 ) 
	return false;
	});
});
  
   $("form").submit(function (event) {
   $(".isotope").empty();
     $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	{
		tags: $("#searchterm").val(),
		tagmode: "any",
		format: "json"
	},
	function(data) {
	$.each(data.items, function(i,item){
	$("<img/>").attr("src", item.media.m.replace(/_m/i, "_b")).prependTo(".isotope")
	.wrap("<div class='item'></div>");
	if ( i == 6 ) 
	return false;
	});
	});
   return false;
});


});