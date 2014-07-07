
/* Helper function. Need to use to get player info. */
function parseFile(file){
	var player_info_arr = new Array();
	var request = new XMLHttpRequest();
	var file_parsed = false;
	request.open("GET", file, false);

	/* Deal with loading time and unforseen errors */
	request.onreadystatechange = function(){
		if (request.status == 200 && request.readyState == 4){
			file_parsed = true;
		}
	}
	request.send();
	if (file_parsed){
		/* If the file was parsed safely, an array of player info is created */
		player_info_arr = request.responseText.split('#');
	}
	return player_info_arr;
};

/* Player Object (name, college, major, words from rob, picture. INCOMPLETE function.*/
function Player(player_file){
	var player_info = parseFile(player_file);

	/* player_file needs to be in spefic order for this code to work */
	this.name = player_info[0];
	this.college = player_info[1];
	this.major = player_info[2];
	this.pic_path = player_info[3];
	this.flag_path = player_info[4];
	this.color = player_info[5];
};

/* 
 * Creates a testimonial that will be inputted on the "Testimonials" page. 
 * testimonial_file = path to file with testimonial content
 * col_side = "left" or "right" side of Testimonial section
 * NOTE: testimonial_file needs to be in a specific order for this code to work (see README).
 */
function createTestimonialWithFile(testimonial_file, col_side) {
	var test_s = parseFile(testimonial_file);
	var name = test_s[0];
	var college = test_s[1];
	var pic = test_s[2];
	var content = test_s[3];		// NOTE: need a helper method to allow for paragraphs in file!
	var space = name.indexOf(" ");
	var col = "";
	if (col_side == "left"){
		col = "test-col-left";
	}
	else if (col_side == "right"){
		col = "test-col-right"
	}
	else{
		col = "test-col-left";
	}
	var column = document.getElementById(col);

	column.innerHTML += 
	'<div id="test-' + name.substring(0,space) + '-' + name.substring(space+1,name.length) + '" class="sub-container-testimonial mod">' +
		'<div class="img-container-testimonial-lg container-circle">' +
			'<img src="' + pic + '">' + 
		'</div>' +
		'<h4 class="player-name-testimonial">' + name + '</h4>' +
		'<span class="ext-title">' + college + '</span>' +
		'<p>' + content + '</p>' +
	'</div>'

	/* MODEL
	<div id="test-jonathan-schroeder" class="sub-container-testimonial">
		<div class="img-container-testimonial-lg container-circle">
			<img src="images/ProfPics/JonathanSchroederLg.png">
		</div>
		<h4 class="player-name-testimonial">Jonathan Schroeder</h4>
		<span class="ext-title">Boston College</span>
		<p>
			look no further than Rob Budacsek at Tennis Connection.”
		</p>
	</div>
	*/
};

/* 
 * Creates a player card that will be inputted on the "Players" page.
 * player_file = path to file with player card content (separate for each player)
 * NOTE: testimonial_file needs to be in a specific order for this code to work (see README).
 */
function createPlayerCardWithFile(player_file){
	var player_info = parseFile(player_file);
	// var newPlayer = new Player(player_file);
	// players[players.length] = newPlayer;
	var player_lib = document.getElementById('player-lib');
	var bkrd_color = "";
	var border_color = "";
	var name = player_info[0];
	var college = player_info[1];
	var major = player_info[2];
	var pic = player_info[3];
	var flag = player_info[4];

	player_lib.innerHTML += 
	// '<div class="player-card module mod" style="background: ' + bkrd_color + '; border-color: ' + border_color + ';">' +
	'<div class="player-card module mod">' +
		'<div class="container-player-card">' +
			'<div class="img-container-flag">' +
				'<img src="' + flag + '">' +
			'</div>' +
			'<div class="img-container-player container-circle">' +
				'<img src="' + pic + '">' +
			'</div>' + 
			'<h4 class="player-name">' + name + '</h4>' +
			'<span class="ext-title">' + college + '</span>' +
			'<span class="ext-title-sm">' + major + '</span>' +
		'</div>' +
	'</div>';

	/* MODEL
	<div class="player-card module" style="background: #ca4101; border-color: #A83601;">
		<div class="container-player-card">
			<div class="img-container-flag">
				<img src="images/CardFlags/cmu.jpg">
			</div>
			<div class="img-container-player container-circle">
				<img src="images/ProfPics/FirstLast.jpg">
			</div>
			<h4 class="player-name" alt="John Doe">John Doe</h4>
			<span class="ext-title" alt="College University">University of California</span>
			<span class="ext-title-sm" alt="Undecided">Comp Sci</span>
		</div>
	</div>
	*/
};

function loadPlayersFromFolder(player_folder){
	/* For each file in player_folder, create a new player,
	   and add them to the Player Library */
};

// HTML -->

// Check for the various File API support.
// if (window.File && window.FileReader && window.FileList && window.Blob) {
// 	loadPlayers();
// } else {
// 	alert('File APIs not supported by your browser. Get Chrome, it is the shit.');
// 	createPlayerCardWithFile('readables/Players/EmilyBaretta.txt');
// 	createPlayerCardWithFile('readables/Players/AimeeTarun.txt');
// 	createPlayerCardWithFile('readables/Players/JackKasbeer.txt');
// }






