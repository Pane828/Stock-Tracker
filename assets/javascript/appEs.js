// $(document).ready(function() {

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
//	$("#add-stock-btn").on("click", function() {
		// var quote = $(this).attr("data-name");
		// var queryUrl = 
		// // Performing an AJAX request with the queryURL
		// $.ajax({
		//     url: queryURL,
		//     method: "GET"
		//   })
		//   // After data comes back from the request
		//   .done(function(response) {
		//   var results = 
		     
		// });

		// Barchart may require this call (under review)
//		var onDemand = new OnDemandClient();

//		onDemand.setAPIKey('bbde72c1a7aa995ca24f291fa6bbf632');
//		onDemand.setJsonP(true);

			/* get a quote for AAPL and GOOG */
//			onDemand.getQuote({symbols: 'AAPL,GOOG'}, function (err, data) {
//			        var quotes = data.results;
//			        for (x in quotes) {
//			            console.log("getQuote: " + quotes[x].symbol + " [" + quotes[x].name + "] = " + JSON.stringify(quotes[x]));
//			        }
//			});
//		});

		// Save the returned data into variables
///		var stockPrice = ;
//		var previousChange = ;
//		var netChange = ;
//		var percentChange = ;

		// Push to firebase
//		database.ref("/stockquotes").push({
	    //     name: stockName,
	    //     price: stockPrice,
	    //     change: previousChange,
	    //     net: netChange,
	    //     percent: percentChange
	    // });


		// Firebase updates the html
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
var GBP = 0;
var EUR = 0;
var CHF = 0;
var CAD = 0;
var RUB = 0;
var stockPrice = 10;

 function CurrencyConverter() {

	var endpoint = 'live';
	var access_key = '34f7aa0bec1b3e840bfec1a470ef081f';
	var base = 'USD';
	var currencySelect = $(".currency").val().trim();
	var quoterate = base + currencySelect;
//	This is a placeholder for the amount that we are converting;
	amount = '10';

	console.log(quoterate);


	$.ajax({
	    url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
	    dataType: 'jsonp',
	    success: function(json) {
		GBP = json.quotes.USDGBP;
		EUR = json.quotes.USDEUR;
		CHF = json.quotes.USDCHF;
		CAD = json.quotes.USDCAD;
		RUB = json.quotes.USDRUB;
	    console.log(json);
	    console.log(GBP);  
	    console.log(EUR);  
	    console.log(CHF);  
	    console.log(RUB);  
	    console.log(CAD);                         
	    }
	})
};

function calculation () {

var dropDown = $("#selectedC option:selected").val();

	if (dropDown == "RUB") {
		outPut = RUB * stockPrice;
		console.log(outPut);
	} else if (dropDown == "CAD") {
		outPut = CAD * stockPrice;
		console.log(outPut);
	} else if (dropDown == "CHF") {
		outPut = CHF * stockPrice;
		console.log(outPut);
	} else if (dropDown == "EUR") {
		outPut = EUR * stockPrice;
		console.log(outPut);
	} else if (dropDown == "GBP") {
		outPut = GBP * stockPrice;
		console.log(outPut);
	}
};