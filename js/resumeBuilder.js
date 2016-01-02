/*
This is empty on purpose! Your code to build the resume will go here.
 */

//My JSON Details

var bio = {
	"name": "Avi Levinshtein",
	"role": "Mobile Deveolpoer",
	"contacts": {
		"mobile": "+972-545-930806",
		"email": "aviavi23@gmail.com",
		"github": "https://github.com/snooky23/frontend-nanodegree-resume",
		"location": "Tel-Avi, Isreal"
	},
	"welcomeMessage": "Welcome to my profile!",
	"skills": [
		"Hard worker",
		"Curious",
		"Team Player",
		"3P shoot"
	],
	"biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/048/200/0be56be.jpg",
};

var education = {
	"schools": [{
		"name": "Afeka Collage",
		"location": "Tel-Avi, Israel",
		"degree": "Computer Software Engineering, Bachelor of Science (BSc)",
		"majors": ["Mobile Systems Software, Software and Information Technology"],
		"dates": "2011-2015",
		"url": "http://english.afeka.ac.il/"
	}],
	"onlineCourses": [{
		"title": "Front-End Developer",
		"school": "udacity",
		"date": "2015-2016",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
	}]
};

var work = {
	"jobs": [{
		"employer": "ironSource",
		"title": "Mobile Developer",
		"location": "Tel-Aviv, Israel",
		"dates": "2015 - Present",
		"description": "Develop comprehensive and customizable SDK's for app distribution and monetization and in charge of product releases. It includes working together with different developing teams from abroad or inside our workplace. My work environment focus mostly on Android , iOS & JavaScript."
	}, {
		"employer": "RRMedia",
		"title": "Network & InfoSec Engineer",
		"location": "Airport-City, Israel",
		"dates": "2013 - 2015",
		"description": "Providing technical advice and guidance for clients , Writing specification & requirements documents. System design and optimum product portfolio combinations for customers throughout all stages of integration and - testing & Implementing products and providing Tier 3 level support."
	}]
};

var projects = {
	"projects": [{
		"title": "Just In Case",
		"dates": "2014",
		"description": "JUST IN CASE is an accident management APP. This app is meant to help you JUST IN CASE you're involved in an accident. It's offers a quick and simple way for generating a report in PDF format. The user can save Pictures, Text , GPS location etc. The application was developed with Eclipse for android ADT, Java, cloud computing, consideration and UI design and implementation models with on android OS 4.4 kitkat.",
		"images": ["https://www.dropbox.com/s/jcum3xuqj32cc1k/Cellular%20Applications%20-%20GIC.pptx"]
	}]
};

//put my role
var formatedRole = HTMLheaderRole.replace("%data%", bio["role"]);
$("#header").prepend(formatedRole);

//Put my name
var formatedName = HTMLheaderName.replace("%data%", bio["name"]);
$("#header").prepend(formatedName);

//Put my mobile
var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formatedMobile);

//Put my email
var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formatedEmail);

//put my gihub
var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formatedGithub);

//put my twitter
// ....

//put location
var formatedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
$("#header").append(formatedLocation);

//Put my picture
var formatedPicture = HTMLbioPic.replace("%data%", bio["biopic"]);
$("#header").append(formatedPicture);

//Put my skilles
var skills = bio["skills"];
if (skills !== null && skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(var skill in skills) {
		var formatedSkill = HTMLskills.replace("%data%", skills[skill]);
		$("#skills").append(formatedSkill);
	}
}

//****************************************
//Put my jobs
var jobs = work.jobs;
if (jobs !== null && jobs.length > 0) {
	for(var job in jobs) {
		var currentJob = jobs[job];
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", currentJob.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", currentJob.title);
		var formattedEmployerTittle = formattedEmployer + " " + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTittle);
		
		var formattedDates = HTMLworkDates.replace("%data%", currentJob.dates);
		$(".work-entry:last").append(formattedDates);

		//var formattedLocation = HTMLworkLocation.replace("%data%", currentJob.location);
		var formattedExperience = HTMLworkDescription.replace("%data%", currentJob.description);
		$(".work-entry:last").append(formattedExperience);
		
	}
}




