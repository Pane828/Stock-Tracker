 $(document).ready(function() {

	// var config = {
	// 	apiKey: "AIzaSyBv5UzhUipQ3IWhQH8A0tAzHeMa7KCkp7E",
	// 	authDomain: "stocktracker-f62c8.firebaseapp.com",
	// 	databaseURL: "https://stocktracker-f62c8.firebaseio.com",
	// 	projectId: "stocktracker-f62c8",
	// 	storageBucket: "",
	// 	messagingSenderId: "352972262657"
	// 	};
	// 	firebase.initializeApp(config);

	// database = database.firebase();

	// Onclick function which makes the AJAX call to the Stock API
	$("#add-stock-btn").on("click", function(event) {
		event.preventDefault();
		//var quote = $(this).attr("data-name");
		var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=7QHDUYVRL0YZMC20";
		// $.ajax({
		// queryUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey="
		// function: "callback",
		// symbol: "jsonp",
		// data: {
		// 	key: "7QHDUYVRL0YZMC20",
		// 	symbols: ""
		// },
		// Performing an AJAX request with the queryURL
		$.ajax({
		    url: queryURL,
		    method: "GET"
		  })
		  // After data comes back from the request
		  .done(function(response) {
		  	console.log(response);
		  });
		  //.done(function(response) {
		  //var results = 
		     
		});

// 		//Barchart may require this call (under review)
// 		var onDemand = new OnDemandClient();

// 		onDemand.setAPIKey('7QHDUYVRL0YZMC20');
// 		onDemand.setJsonP(true);

// 			/* get a quote for AAPL and GOOG */
// 			onDemand.getQuote({symbols: 'AAPL,GOOG'}, function (err, data) {
// 			        var quotes = data.results;
// 			        for (x in quotes) {
// 			            console.log("getQuote: " + quotes[x].symbol + " [" + quotes[x].name + "] = " + JSON.stringify(quotes[x]));
// 			        }
// 			});
// 		});

// 		// Save the returned data into variables
// 		var stockName = ;
// 		var stockPrice = ;
// 		var previousChange = ;
// 		var netChange = ;
// 		var percentChange = ;

// 		// Push to firebase
// 		database.ref("/stockquotes").push({
// 	        name: stockName,
// 	        price: stockPrice,
// 	        change: previousChange,
// 	        net: netChange,
// 	        percent: percentChange
// 	    });


// 		// Firebase updates the html
// 		database.ref("/stockquotes").on("child_added", function(childSnapshot) {

// 			// Log everything that's coming out of snapshot
// 		    console.log(childSnapshot.val().name);
// 		    console.log(childSnapshot.val().price);
// 		    console.log(childSnapshot.val().change);
// 		    console.log(childSnapshot.val().net);
// 		    console.log(childSnapshot.val().percent);

// 		    // Variables for object data
// 		    var newStockName = childSnapshot.val().name;
// 		    var newStockPrice = childSnapshot.val().price;
// 		    var newPreviousPrice = childSnapshot.val().change;
// 		    var newNetChange = childSnapshot.val().net;
// 		    var newPercentChange = childSnapshot.val().percent;
		    
// 		    // Html updated
// 		    // Appends variable data to document's html
// 			$("#quote-table > tbody").append("<tr><td>" + newStockName + "</td><td>" + newStockPrice + "</td><td>" +
// 			  newPreviousPrice + "</td><td>" + newNetChange + "</td><td>" + newPercentChange);
// 			}, function(errorObject) {
// 				console.log("Errors handled: " + errorObject.code);

// 		});

// });
