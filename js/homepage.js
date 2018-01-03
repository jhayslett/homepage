document.addEventListener("DOMContentLoaded", function(){

	var links = [
		["SurveyGizmo Application","https://app.surveygizmo.com/login/v1"],
		["Knowledge Center - Production","http://portalprd.discounttire.com/portal/server.pt"],
		["Amazon Music","https://music.amazon.com/home"]
	];

	var html = "";
	var linkArea = document.querySelector(".linksBody");
	html += "<ul>";
	for(var i = 0; i < links.length; i++) {
		html += "<li><a target='_blank' href='" + links[i][1] + "'>" + links[i][0] + "</a></li>";
	}
	html += "</ul>";
	linkArea.innerHTML = html;

});
