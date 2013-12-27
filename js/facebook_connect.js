/**
 * 
 */
var MN = MN || {};

var menuOpen 			= new Boolean(false);

MN.currentCourse		= new Number(0);
MN.currentPage			= new Number(0);

MN.menuEnabled			= new Boolean(false);
MN.userName;

MN.init = function()
{
	MN.getCourseCards();
	MN.setGeneralButtons();
	MN.getFacebookInfo();
};

MN.getFacebookInfo = function()
{
	// Additional JS functions here
	  window.fbAsyncInit = function() 
	  {
	  	FB.init({
	      appId      : '112393062252356', // App ID
	      channelUrl : '//www.cartondonofriopartners.com/agile_courseware/channel.html', // Channel File
	      status     : true, // check login status
	      cookie     : true, // enable cookies to allow the server to access the session
	      xfbml      : true  // parse XFBML
	    });
	
	    // Additional init code here
		FB.getLoginStatus(function(response) 
		{
			if (response.status === 'connected') {
	    		// connected
	    		testAPI();
	  		} 
	  		else if (response.status === 'not_authorized') 
	  		{
	    		// not_authorized
	    		//login();
	  			$('#fbUserName').html('Log In');

	  			$('.userProfileIcon').click(function()
	  			{
	  				login();
	  			});
	  		} 
	  		else 
	  		{
	    		// not_logged_in
	    		//login();
	  			$('#fbUserName').html('Log In');

	  			$('.userProfileIcon').click(function()
	  			{
	  				login();
	  			});
	  		}
	 	});
	  };
	  
	  function login() 
	  {
	  	FB.login(function(response) 
	  	{
	  		if (response.authResponse) 
	  		{
	  			// connected
	  			testAPI();
		   	} else {
		    	// cancelled
		    }
	  	});
	  };
	  
	  function testAPI() {
		    console.log('Welcome!  Fetching your information.... ');
		    FB.api('/me', {fields: 'id,name,picture', limit:3}, function(response) 
		    {
		        //console.log('Good to see you, ' + response.name + '.');
		        MN.setUserFacebookID(response);
		    });
		}
	
	  // Load the SDK Asynchronously
	  (function(d){
	     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement('script'); js.id = id; js.async = true;
	     js.src = "//connect.facebook.net/en_US/all.js";
	     ref.parentNode.insertBefore(js, ref);
	   }(document));
};

MN.setUserFacebookID = function(userInfo)
{
	console.log('user info: ' + userInfo.name + ' pic: ' + userInfo.id);
	$('#fbUserName').html(userInfo.name);
	MN.userName			= userInfo.name;
	//$('#fbUserIcon').html('<img src="https://graph.facebook.com/' + userInfo.id + '/picture?type=large&return_ssl_results=1" />')
};

MN.setGeneralButtons = function()
{
	
	$('.menuBtn').click(function()
	{
		if(menuOpen == false)
		{
			MN.setMenuNav();
			menuOpen = true;
			$('#leftMenu').stop().stop().animate({
				right: '+320'
			}, 1000, 'easeInOutBack');
		}
		else
		{
			menuOpen = false;
			$('#leftMenu').stop().stop().animate({
				right: '-320'
			}, 1000, 'easeInOutBack');
		}
	});
	
	$('.leftMenuBtn').click(function()
	{
		//MN.resetPages();
		MN.currentPage 		 	= this.id;
		PN.getPage(this.id);
	});
	
	$('.nextTextBtn').click(function()
	{
		MN.currentPage++;
		PN.getPage(MN.currentPage);
	});
	
	$('.backTextBtn').click(function()
	{
		MN.currentPage--;
		PN.getPage(MN.currentPage);
	});
	
	$('.responseCloseBtn').click(function()
	{
		$('.responseContainer').fadeOut(500);
		Q.getNextQuestion();
	});
	
	$('.nextSlide').click(function()
	{
		MN.currentPage++;
		PN.getPage(MN.currentPage);
	});
	
	$('.prevSlide').click(function()
	{
		MN.currentPage--;
		PN.getPage(MN.currentPage);
	});
};


MN.getCourseCards = function()
{

	var jsonPath;

	$.getJSON('json/course.json', function(data)
	{	
		$.each(data.course, function(i, item)
		{
			var courseNumber 			= data.course[i].id+1;
			var courseName 				= data.course[i].name;
			var courseRunningTime 		= data.course[i].estimatedTime;
			var courseSummary 		 	= data.course[i].summary;
			var courseIconLg			= data.course[i].largeThumbnail;
			var courseIconSm			= data.course[i].smallThumbnail;
			
			
			//create course block buttons
			$('#courseSelect').append('\
			<div class="courseSelectCard left" id="' + courseNumber + '">\
			<div class="front">\
				<figure>\
					<img src="' + courseIconLg + '" alt="Default Image" />\
					<figcaption>\
						Lesson ' + courseNumber + '\
					</figcaption>\
				</figure>\
				<h2>' + courseName + ' </h2>\
			</div>\
			\
			<div class="back">\
				<div class="courseCardBack clearfix">\
					<div class="courseCardBackImage left">\
						<img src="' + courseIconSm + '" alt="' + courseName + '" />\
					</div>\
					<div class="courseCardBackTop right">\
						<h3>' + courseName + '</h3>\
						<p><strong>Running Time</strong>: ' + courseRunningTime + '</p>\
					</div>\
				</div>\
				<div class="courseCardCopy">\
					' + courseSummary + '\
				</div>\
			</div>\
		</div>');
		});
		MN.setCardFlip();
	});
};

MN.openCourse = function(courseID)
{
	if(courseID > 4)
	{
		alert('This course is not currently available.');
	}
	else
	{
		MN.resetPages();
		MN.currentCourse 			= courseID;
		MN.currentPage				= 1;
		MN.clearAllPages();
		$('#courseSection' + MN.currentCourse + '').delay(750).fadeIn(750);
		PN.getPage(1);
		//$('#' + MN.currentCourse + '-' + MN.currentPage + '').delay(750).fadeIn(750);
	}
	
};



MN.setCardFlip = function()
{

	$('.courseSelectCard').hover(function()
	{
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});
	
	$('.courseSelectCard').click(function()
	{
		MN.openCourse(this.id);
	});
};

MN.setMenuNav = function()
{
	switch(MN.currentCourse)
	{
		case "1":
			$('#leftMenu #list').html('');
			$.getJSON('json/introduction.json', function(data)
			{	
				$.each(data.topics, function(i, item)
				{
					var buttonID 			= data.topics[i].id;
					var buttonName			= data.topics[i].name;
					
					if(MN.currentPage == buttonID)
					{
						$('#leftMenu #list').append('<li id="' + buttonID + '" class="leftMenuBtn current">' + buttonName + '</li>');
					}
					else
					{
						$('#leftMenu #list').append('<li id="' + buttonID + '" class="leftMenuBtn">' + buttonName + '</li>');
					}
				});
				MN.setMenuButtonClick();
			});
		break;
		
		case "2":
			$('#leftMenu #list').html('');
			$.getJSON('json/agile_software.json', function(data)
			{	
				$.each(data.topics, function(i, item)
				{
					var buttonID 			= data.topics[i].id;
					var buttonName			= data.topics[i].name;
					
					if(MN.currentPage == buttonID)
					{
						$('#leftMenu #list').append('<li id="' + buttonID + '" class="leftMenuBtn current">' + buttonName + '</li>');
					}
					else
					{
						$('#leftMenu #list').append('<li id="' + buttonID + '" class="leftMenuBtn">' + buttonName + '</li>');
					}
				});
				MN.setMenuButtonClick();
			});
		break;
		
		case "3":
			$('#leftMenu #list').html('');
			$.getJSON('json/test_project.json', function(data)
			{	
				$.each(data.topics, function(i, item)
				{
					var buttonID 			= data.topics[i].id;
					var buttonName			= data.topics[i].name;
					
					if(MN.currentPage == buttonID)
					{
						$('#leftMenu #list').append('<li id="' + buttonID + '" class="leftMenuBtn current">' + buttonName + '</li>');
					}
					else
					{
						$('#leftMenu #list').append('<li id="' + buttonID + '" class="leftMenuBtn">' + buttonName + '</li>');
					}
				});
				MN.setMenuButtonClick();
			});
		break;
		
		case "4":
		break;
	}
};

MN.setMenuButtonClick = function()
{
	$('.leftMenuBtn').click(function()
	{
		//MN.resetPages();
		MN.currentPage 		 	= this.id;
		PN.getPage(this.id);
	});
};

MN.resetPages = function()
{
	$('#homePage').fadeOut(750);
	$('#courseSection1').fadeOut(750);
	$('#courseSection2').fadeOut(750);
	$('#courseSection3').fadeOut(750);
	$('#courseSection4').fadeOut(750);
	
	//close menu
	menuOpen = false;
	$('#leftMenu').stop().stop().animate({
		right: '-320'
	}, 750, 'easeInOutBack');
};

MN.clearAllPages = function()
{
	$('#1-1').hide();
	$('#1-2').hide();
	$('#1-3').hide();
	$('#1-4').hide();
	$('#1-5').hide();
	$('#1-6').hide();
	
	$('#2-1').hide();
	$('#2-2').hide();
	$('#2-3').hide();
	$('#2-4').hide();
	$('#2-5').hide();
	$('#2-6').hide();
	
	$('#3-1').hide();
	$('#3-2').hide();
	$('#3-3').hide();
	$('#3-4').hide();
	$('#3-5').hide();
	
	$('#4-1').hide();
	$('#4-2').hide();
	$('#4-3').hide();
	$('#4-4').hide();
	$('#4-5').hide();
	$('#4-6').hide();
	
};