/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 /* bio */
 
var bio = {
	"name": "Serhiy Vdovichenko",
	"role": "Web Developer",
	"contacts": {
		"mobile": "434 434 33 33",
		"email": "my_email@gmail.com",
		"github": "my_github.com",
		"twitter": "my_twitter.com",
		"location": "Washington, PA",
	},
	"welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, veniam, rem, eveniet consequatur corrupti voluptates non neque natus corporis vero reprehenderit laudantium accusamus excepturi provident explicabo nobis beatae repudiandae architecto.",
	"skills" : ["HTML 5", "CSS3", "JS"],
	"biopic" : "images/social.png"
};

bio.display = function() {	
	var fullName = bio.name;
	var role = bio.role;
	var	mobile = bio.contacts.mobile;
	var	email = bio.contacts.email;
	var	github = bio.contacts.github;
	var	twitter = bio.contacts.twitter;
	var	location = bio.contacts.location;
	var	welcomeMsg = bio.welcomeMessage;
	var	skills = bio.skills.slice(0);
	var	bioPicture = bio.biopic;
	
	var formatedRole = HTMLheaderRole.replace('%data%', role);
	$('#header').prepend(formatedRole);
	
	var formatedFullName = HTMLheaderName.replace('%data%', fullName);
	$('#header').prepend(formatedFullName);
	
	var formatedMobile = HTMLmobile.replace('%data%', mobile);
	$('#topContacts').append(formatedMobile);
	
	var formatedEmail = HTMLemail.replace('%data%', email);
	$('#topContacts').append(formatedEmail);
	
	var formatedGithub = HTMLgithub.replace('%data%', github);
	$('#topContacts').append(formatedGithub);
	
	var formatedTwitter = HTMLtwitter.replace('%data%', twitter);
	$('#topContacts').append(formatedTwitter);
	
	var formatedLocation = HTMLlocation.replace('%data%', location);
	$('#topContacts').append(formatedLocation);
	
	var formatedwelcomeMessage = HTMLwelcomeMsg.replace('%data%', welcomeMsg);
	$('#header').append(formatedwelcomeMessage);
	
	var formatedBioPicture = HTMLbioPic.replace('%data%', bioPicture);
	$('#header').append(formatedBioPicture);
	
	$('#header').append(HTMLskillsStart);
	
	if (bio.skills.length > 0) {
		for(var indexSkills in bio.skills){
			var formatedSkills = HTMLskills.replace('%data%', skills[indexSkills]); 
			$('#skills').append(formatedSkills + " ");
		}
	}
};

bio.display();

/* education */

var education = {
	"schools": [
		{
		"name": "CCAC",     
		"location": "Pittsburg, PA",     
		"degree": "Associate ",     
		"majors": "Software Development",    
		"dates": "2011 - 2014",    
		"url": "https://www.ccac.edu/"
		},
		{
		"name": "Udacity ",     
		"location": "Online",     
		"degree": "Nanodegree",     
		"majors": "Front-End Web Developer",    
		"dates": "2015 - current",    
		"url": "https://www.udacity.com/"
		}
	],
	"onlineCourses": [
		{
		"title": "Intro to HTML and CSS",     
		"school": "Udacity",        
		"date": "Jul-2015",    
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304/"
		},
		{
		"title": "JavaScript Basics",     
		"school": "Udacity",        
		"date": "Aug-2015",    
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
		"title": "Intro to jQuery",     
		"school": "Udacity",        
		"date": "Aug-2015",    
		"url": "https://www.udacity.com/course/intro-to-jquery--ud245"
		}
	]
};

education.display = function() {
	$('#education').append(HTMLschoolStart);	
	if (education.schools.length > 0) {
		for (var indexEducation in education.schools) {
			var schoolName = education.schools[indexEducation].name;
			var schoolLocation = education.schools[indexEducation].location;
			var schoolDegree = education.schools[indexEducation].degree;
			var schoolMajors = education.schools[indexEducation].majors;
			var schoolDates = education.schools[indexEducation].dates;
			var schoolUrl = education.schools[indexEducation].url;

			var formatedSchoolName = HTMLschoolName.replace('%data%', schoolName);
			$('.education-entry').append(formatedSchoolName);
			
			var formatedSchoolLocation = HTMLschoolLocation.replace('%data%', schoolLocation);
			$('.education-entry').append(formatedSchoolLocation);
			
			var formatedSchoolDegree = HTMLschoolDegree.replace('%data%', schoolDegree);
			$('.education-entry').append(formatedSchoolDegree);
			
			var formatedSchoolMajors = HTMLschoolMajor.replace('%data%', schoolMajors);
			$('.education-entry').append(formatedSchoolMajors);
			
			var formatedSchoolDates = HTMLschoolDates.replace('%data%', schoolDates);
			$('.education-entry').append(formatedSchoolDates);
			
			var formatedSchoolUrl = HTMLschoolName.replace('%data%', schoolUrl);
			$('.education-entry').append(formatedSchoolUrl);
			}
		}
		$('.education-entry').append(HTMLonlineClasses);
	if (education.onlineCourses.length > 0) {
		for (var indexOnlineCourses in education.onlineCourses) {
			var onlineCoursesTitle = education.onlineCourses[indexOnlineCourses].title;
			var onlineCoursesSchool = education.onlineCourses[indexOnlineCourses].school;
			var onlineCoursesDate = education.onlineCourses[indexOnlineCourses].date;
			var onlineCoursesUrl= education.onlineCourses[indexOnlineCourses].url;

			var formatedOnlineCoursesTitle = HTMLonlineTitle.replace('%data%', onlineCoursesTitle);
			$('.education-entry').append(formatedSchoolName);
			
			var formatedOnlineCoursesSchool = HTMLonlineSchool.replace('%data%', onlineCoursesSchool);
			$('.education-entry').append(formatedOnlineCoursesSchool);
			
			var formatedOnlineCoursesDate = HTMLonlineDates.replace('%data%', onlineCoursesDate);
			$('.education-entry').append(formatedOnlineCoursesDate);
			
			var formatedOnlineCoursesUrl = HTMLonlineURL.replace('%data%', onlineCoursesUrl);
			$('.education-entry').append(formatedOnlineCoursesUrl);
		}
	}
};

education.display();

/* work */

var work = {
	"jobs": [
		{
		"employer": "Washington School District",     
		"title": "System Administrator",     
		"location": "Washington, PA",     
		"dates": "Nov-2014 : Curerent",    
		"description": "WSD I mainly responsible for Google apps administration , Active Directory, Daily tech support on the field, deployment"
		},
		{
		"employer": "North Allegheny School District",     
		"title": "Intern",     
		"location": "Pittsburg, PA",     
		"dates": "Jun-2014 : Nov-2014",    
		"description": "Internship in NASD. I have been able to explore diferent branches of IT: networking, administration, deployment"
		}
	]
};

work.display = function() {
	$('#workExperience').append(HTMLworkStart);
	if(work.jobs.length > 0) {
		for(var indexJobs in work.jobs) {
			var jobEmployer = work.jobs[indexJobs].employer;
			var jobTitle = work.jobs[indexJobs].title;
			var jobLocation = work.jobs[indexJobs].location;
			var jobDates = work.jobs[indexJobs].dates;
			var jobDescription = work.jobs[indexJobs].description;
			
			var formatedJobEmployer = HTMLworkEmployer.replace('%data%', jobEmployer);
			$('.work-entry').append(formatedJobEmployer);
			
			var formatedJobTitle = HTMLworkTitle.replace('%data%', jobTitle);
			$('.work-entry').append(formatedJobTitle);
			
			var formatedJobLocation = HTMLworkLocation.replace('%data%', jobLocation);
			$('.work-entry').append(formatedJobLocation);
			
			var formatedJobDates = HTMLworkDates.replace('%data%', jobDates);
			$('.work-entry').append(formatedJobDates);
			
			var formatedJobDescription = HTMLworkEmployer.replace('%data%', jobDescription);
			$('.work-entry').append(formatedJobDescription );
		}
	}
};

work.display();

/* projects */

var projects = {
	"projects": [
		{   
		"title": "Mellisime Cognac",          
		"dates": "Aug-2015 : in development",    
		"description": "E-commerce project for small cognac maker in the south of France",
		"images": ["images/millisime-cognac.jpg", "images/millisime-logo.jpg","images/millisime-phone.jpg"]
		},
		{   
		"title": "Washington School",         
		"dates": "Jun-2015 : in development",    
		"description": "Re-design and development of new web-site for Washington School District",
		"images": ["images/wsd-mobile.jpg", "images/wsd-mac-pro.jpg", "images/wsd-ipad.jpg"]
		}
	]
};

projects.display = function() {
	$('#projects').append(HTMLprojectStart);
	if(projects.projects.length > 0) {
		for(var indexProjects in projects.projects) {
			var titleProjects = projects.projects[indexProjects].title;
			var datesProjects = projects.projects[indexProjects].dates;
			var descriptionProjects = projects.projects[indexProjects].description;
			
			var formatedTitleProjects = HTMLprojectTitle.replace('%data%', titleProjects);
			$('.project-entry').append(formatedTitleProjects);
			
			var formatedDatesProjects = HTMLprojectDates.replace('%data%', datesProjects);
			$('.project-entry').append(formatedDatesProjects);
			
			var formatedDescriptionProjects = HTMLprojectDescription.replace('%data%', descriptionProjects);
			$('.project-entry').append(formatedDescriptionProjects);
			
			if(projects.projects[indexProjects].images.length > 0) {
				for(var indexImages in projects.projects[indexProjects].images) {
					var imagesProjects = projects.projects[indexProjects].images[indexImages];
					var formatedImagesProjects = HTMLprojectImage.replace('%data%', imagesProjects);
					$('.project-entry').append(formatedImagesProjects);
				}
			}
		}
	}
};

projects.display();

/* map */

$("#mapDiv").append(googleMap);