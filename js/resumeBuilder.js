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
		"github": "snooky23",
		"twitter": "avilevin",
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
	"display":  function() 
	{ 
		//put my role
		var formatedRole = HTMLheaderRole.replace("%data%", bio["role"]);
		$("#header").prepend(formatedRole);

		//Put my name
		var formatedName = HTMLheaderName.replace("%data%", bio["name"]);
		$("#header").prepend(formatedName);

		//Put div frame
		$("#header").append(HTMLcontactStart);

		//Put my mobile
		var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#contact-details").append(formatedMobile);

		//Put my email
		var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#contact-details").append(formatedEmail);

		//put my gihub
		var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#contact-details").append(formatedGithub);

		//put my twitter
		var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#contact-details").append(formatedTwitter);

		//put location
		var formatedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
		$("#contact-details").append(formatedLocation);

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
	},
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
	}],
	"display":  function() {
		var schools = education.schools;
		if (schools !== null && schools.length > 0) {
			for(var school in schools) {
				var currentSchool = schools[school];
				$("#education").append(HTMLschoolStart);

				var formattedName = HTMLschoolName.replace("%data%", currentSchool.name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", currentSchool.degree);
				var formattedNameDegree = formattedName + " " + formattedDegree
				$(".education-entry:last").append(formattedNameDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", currentSchool.dates);
				$(".education-entry:last").append(formattedDates);

				var formattedLocation = HTMLschoolLocation.replace("%data%", currentSchool.location);
				$(".education-entry:last").append(formattedLocation);

				//check size of pictures
				var majorsArray = currentSchool.majors;
				if (majorsArray !== null && majorsArray.length > 0) {
					for(major in majorsArray) {
						var formattedMajor = HTMLschoolMajor.replace("%data%", majorsArray[major]);
						$(".education-entry:last").append(formattedMajor);
					}
				}
			}
		}
		$(".education-entry:last").append(HTMLonlineClasses);

		var onlineCourses = education.onlineCourses;
		if (onlineCourses !== null && onlineCourses.length > 0) {
			for(var course in onlineCourses) {
				var currentOnlineCourse = onlineCourses[course];
				
				var formattedTitle = HTMLonlineTitle.replace("%data%", currentOnlineCourse.title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", currentOnlineCourse.school);
				var formattedTitleAndSchool = formattedTitle + " " + formattedOnlineSchool;
				$(".education-entry:last").append(formattedTitleAndSchool);

				var formattedOnlineDates = HTMLonlineDates.replace("%data%", currentOnlineCourse.date);
				$(".education-entry:last").append(formattedOnlineDates);

				var formattedUrl = HTMLonlineURL.replace("%data%", currentOnlineCourse.url);
				$(".education-entry:last").append(formattedUrl);
			}
		}
	}
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
	}],
	"display":  function() {
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

				var formattedExperience = HTMLworkDescription.replace("%data%", currentJob.description);
				$(".work-entry:last").append(formattedExperience);		
			}
		}
	},
	"displaymap": function() {
		$("#mapDiv").append(googleMap);
	}
};

var projects = {
	"my_projects": [{
		"title": "Just In Case",
		"dates": "2014",
		"description": "JUST IN CASE is an accident management APP. This app is meant to help you JUST IN CASE you're involved in an accident. It's offers a quick and simple way for generating a report in PDF format. The user can save Pictures, Text , GPS location etc. The application was developed with Eclipse for android ADT, Java, cloud computing, consideration and UI design and implementation models with on android OS 4.4 kitkat.",
		"images": ["images/jisproject.PNG","images/jiscam.PNG"]
	}],
	"display":  function() {
		var projectsArray = projects.my_projects;
		if (projectsArray !== null && projectsArray.length > 0) {
			for(var project in projectsArray) {
				var currentProject = projectsArray[project];
				$("#projects").append(HTMLprojectStart);

				var formattedTitle = HTMLprojectTitle.replace("%data%", currentProject.title);
				$(".project-entry:last").append(formattedTitle);	
				
				var formattedDates = HTMLprojectDates.replace("%data%", currentProject.dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%", currentProject.description);
				$(".project-entry:last").append(formattedDescription);

				//check size of pictures
				var imagesArray = currentProject.images;
				if (imagesArray !== null && imagesArray.length > 0) {
					for(image in imagesArray) {
						var formattedPicture = HTMLprojectImage.replace("%data%", imagesArray[image]);
						$(".project-entry:last").append(formattedPicture);
					}
				}
			}
		}
	}
};


//****************************************
//Main code:

bio.display();
work.display();
projects.display();
education.display();
work.displaymap();
//Get all job locations
function locationizer(work_obj) {
	var locationsArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationsArray.push(newLocation);
	}
	return locationsArray;
}

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}




