// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData 	= require('../data/friends.js');

var path 			= require('path');




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------
	
	

	app.get('/api/friends', function(req, res){
		
	

    






	});

	
	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){


	
		


		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
	var newfriend = req.body;
    var friendsList;
    var bestie;
    var bestieDifferences = null;	

    friendsList = friendsData;
            for (var i = 0; i < friendsList.length - 1; i++) {
                var potentialBestie = friendsList[i];
                //console.log(potentialBestie);

                //console.log("this is potential bestie name : " + potentialBestie.name);
                var potentialBestieScores = potentialBestie.scores
                console.log("these are potential bestie scores : " + potentialBestieScores);
                var differences = 0
                console.log("this is starting differences : ");
                for (var j = 0; j < potentialBestieScores.length; j++) {
                    scoreDifferences = Math.abs(potentialBestie.scores[j] - newfriend.scores[j]);
                    console.log(scoreDifferences);

                    differences += scoreDifferences;






                }
                console.log("this is ending differences : " + differences);

                if (bestieDifferences == null || differences <= bestieDifferences) {
                    bestie = potentialBestie;
                   bestieDifferences = differences;
                    console.log("this is your new bestie " + bestie.name);
                 }


            }

			//res.json(true); // KEY LINE
			res.json({
				"name": bestie.name,
				"scores": bestie.scores,
				"picture": bestie.picture
			});
	








			
		
		

	});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		tableData = [];
		waitListData = [];

		console.log(tableData);
	})
}