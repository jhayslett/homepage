document.addEventListener("DOMContentLoaded", function(){

	var links = [
		["SurveyGizmo Application","https://app.surveygizmo.com/login/v1","Work"],
		["Knowledge Center - Production","http://portalprd.discounttire.com/portal/server.pt","Work"],
		["Knowledge Center - Staging","http://portalprd.discounttire.com/portal/server.pt","Work"],
		["Amazon Music","https://music.amazon.com/home","Personal"],
		["Edit Homepage JS","https://github.com/jhayslett/homepage/blob/master/js/homepage.js","Classwork"],
		["SlickDeals","https://slickdeals.net","Personal"],
		["Modern Developer - Study","http://study.moderndeveloper.com","Classwork"],
		["Modern Developer - QA","http://qa.moderndeveloper.com","Classwork"],
		["CodePen","https://codepen.io/dashboard/","Classwork"],
		["Github","https://github.com","Classwork"],
		["GitHub - Coursework","https://github.com/moderndeveloper-students/coursework-jhayslett","Classwork"],
		["Pexels","https://www.pexels.com/","Developer Resources - Stock Photography"],
		["Pomodone App","https://my.pomodoneapp.com/account/todoist","Productivity Tools"],
		["Todoist","https://en.todoist.com/app?lang=en","Productivity Tools"],
		["Playstation Vue","https://vue.playstation.com/watch/home","Personal"]
	];

	var html = "";
	var linkArea = document.querySelector(".linksBody");
	html += "<ul>";

	// CREATE INDEX OF HEADERS
	// 
	// 
	var linkCategories = [];
	links.forEach(function(link){
		if(!linkCategories.includes(link[2])) {
			linkCategories.push(link[2]);
		}
	})
	console.log(linkCategories)


	linkCategories.forEach(function(linkCategory){
		// html += "<li>" + linkCategory + "</li>";
	})

	for(var i = 0; i < links.length; i++) {
		html += "<li class='" + links[i][2] + "'><a target='_blank' href='" + links[i][1] + "'>" + links[i][0] + "</a></li>";
	}
	html += "</ul>";
	linkArea.innerHTML = html;

});
