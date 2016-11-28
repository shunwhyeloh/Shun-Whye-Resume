
var bio = {
    "name": "SHUN WHYE LOH",
    "role": "荪蔚",
    "contacts": {
        "github": "github.com/shunwhyeloh",
        "email": "shunwhyel@gmail.com",
        "location": "Singapore, Singapore"
    },

    "skills": [
        "Multilingual: Native in Mandarin, Cantonese, Hokkien, and basic communication in Bahasa Malaysia.", "Basic Programming: HTML, CSS, Python, and JavaScript", "Adobe System: Photoshop CC and Final Cut Pro X", "Microsoft Office"
    ],
	"biopic": "images/me.jpg",
	"display": function() {
		var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);

    var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);

		var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);

		var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);

		/*Header*/
    $("#header").prepend(formattedHTMLheaderRole);

    $("#header").prepend(formattedHTMLheaderName);

		$("#header").append(formattedHTMLbioPic);

		/*Top Contacts & Footer Contacts*/
		$("#topContacts, #footerContacts").append(formattedHTMLgithub);

		$("#topContacts, #footerContacts").append(formattedHTMLemail);

		$("#topContacts, #footerContacts").append(formattedHTMLlocation);


		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (i = 0; i < bio.skills.length; i++) {
				var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedHTMLskills);
			}
		}
	}
};

var education = {
    "schools": [{
        "name": "Nottingham Trent University, School of Art and Design",
        "location": "Singapore, Singapore",
        "majors": ["BA (Hons) Fashion Marketing and Branding"],
		"dates": "Sep 2013 to Oct 2016",
    }],
    "onlineCourses": [{
        "title": [
          "Selected by Management Development Institute of Singapore to represent School of Fashion and Design on the 2014 campaign for recruiting prospective students. The campaign was published on the school's social media channels and was displayed on billboards of various public facilities in Singapore."
        ],
        "dates": "2014",
    }, {

        "title": ["Hosted Argent Asia, a Singapore retail fashion marketing consultancy, at the 2014 Singapore BLUEPRINT trade show that offers emerging and established fashion designers to showcase their latest collections to potential clients onsite. Successfully connected Argent Asia to various prospective designers by carefully studying the host's preferences."],
        "dates": "2014",
    }],
	"display": function() {
		if (education.schools.length > 0) {
			education.schools.forEach(function(school) {
				$("#education").append(HTMLschoolStart);

				var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);

				var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);

        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);

        var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

				$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolLocation);


        for (i=0; i<school.majors.length ;i++) {
					$(".education-entry:last").append(formattedHTMLschoolMajor + formattedHTMLschoolDates);
				}
			});
		}

		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			education.onlineCourses.forEach(function(onlineCourse) {
				$("#education").append(HTMLschoolStart);

				var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);

				var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);

				$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineDates);

			});
		}
	}
};

var work = {
    "jobs": [{
		"employer": "Palace Beauty Appearance Academy Sdn., Bhd.",
        "title": "Business Intern",
        "location": "Penang, Malaysia",
        "dates": "Jan 2014 to Jan 2015",
        "description": ["Designed a new product scheme entitled- H.S.E- Holistic Skin Essentials, a customized set of independent skin care products catering to each individual customers' skin care needs , diagnosed by in-house certified estheticians. Successfully established a close relationship with three customers that returned to repurchase the same set periodically."]
    }],

	"display": function() {
		if (work.jobs.length > 0) {
			work.jobs.forEach(function(job) {
				$("#workExperience").append(HTMLworkStart);

				var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);

				var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);

				var formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);

				var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);

				var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedHTMLworkEmployer);
        $(".work-entry:last").append(formattedHTMLworkLocation);
        $(".work-entry:last").append(formattedHTMLworkTitle);
        $(".work-entry:last").append(formattedHTMLworkDates + formattedHTMLworkDescription);
        //$(".work-entry:last").append(formattedHTMLworkDescription);

				$(".work-entry:last").append();

			});
		}
	}
};

var projects = {
    "projects": [{
        "title":"Consumer trend research and analysis project",
        "description": "Conducted a final year research project on the impact of User-Generated Content campaign on communication between consumers and businesses, by adopting a mixed methodology of qualitative and quantitative analysis. The presentation was highly regarded by critiques from fashion marketing industry as the top in class.",
        "dates": "2016",
        "images": ["images/image1.jpg"]
    }, {
        "title":"Event Planning project",
        "description": ["Elected as the Lead Event Organizer to increase brand awareness, from the initial idea generation to executing the event for House of Sheens, a luxury fashion boutique start up focusing on exotic leather accessories. The event successfully invited respectable local/global media, influential internet fashion bloggers, and socialites. The event was published on Harper's Bazaar Singapore September 2015 edition."],
        "dates": "2015",
        "images": ["images/image2.jpg"]
    }, {
        "title":"Rebranding Strategy project",
        "description": "Pitched a rebranding strategy for Tate and Tonic, a Singapore based fashion retail start up that offers personalized styling services online. Selection of advices were adopted resulting in new company website design, expanded product lines, and increased social media traffic. The pitch book was later selected by the school as the cover project introduced to prospective students.",
        "dates": "2014",
        "images": ["images/image3.jpg"]
    }, {
        "title":"Academic paper",
        "description": "Wrote an academic paper entitled - Materialism Culture: Postmodern Consumerism, focusing on the process of development of self-identification through consumption. The research methods include gathering primary and secondary resources, such as interviews, surveys, and academic publications. Materialism Culture: Postmodern Consumerism was nominated to be published on online fashion media such as Vogue and Harper's Bazaar.",
        "dates": "2014",
        "images": ["images/image5.jpg"]
    }, {
        "title":"Intro to Programming Nanodegree Program, Awarded by Udacity, Silicon Valley, California, United Stateson",
        "description": "Acquired basic proficiency for programming languages such as HTML, CSS, Python, and JavaScript through completion of 5 projects including developing and designing a webpage, coding a game quiz, creating a movie trailer website, and publishing online resume. The course designed for one year was completed in three months.",
        "dates": "2016",
        "images": ["images/image4.jpg"]
    }, {
        "title":"Grade 8, Distinction in Ballet Examination, Awarded by Royal Academy of Dance, Penang, Malaysia",
        "description": "Awarded as the top in class for the highest student level of examination before proceeding to a professional tutor level.",
        "dates": "2011",
        "images": [""]
    }],

	"display": function() {
		if (projects.projects.length > 0) {
			projects.projects.forEach(function(project) {
				$("#projects").append(HTMLprojectStart);

        var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);

        var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);

				var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

				$(".project-entry:last").append(formattedHTMLprojectTitle + formattedHTMLprojectDescription + formattedHTMLprojectDates);

				for(i=0; i<project.images.length; i++){
					var formattedHTMLprojectImage = 		HTMLprojectImage.replace("%data%", project.images[i]);
					$(".project-entry:last").append(formattedHTMLprojectImage);
				}
			});
		}
	}
};



bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);
