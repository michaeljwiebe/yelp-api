

// - When a result is clicked, it opens the Yelp page for that business in a new window.
// - When a user makes a new search, the old results go away and the new results  populate the page and are also clickable.

var submit = document.getElementsByClassName("submit")[0];
var search = document.getElementsByClassName("search-box")[0];
var results = document.getElementsByClassName("results")[0];
var westPhilly = document.getElementsByClassName("west-philly")[0];
var centerCity = document.getElementsByClassName("center-city")[0];
var southPhilly = document.getElementsByClassName("south-philly")[0];
var northPhilly = document.getElementsByClassName("north-philly")[0];
var northernLiberties = document.getElementsByClassName("northern-liberties")[0];
var searchText;
var i = 0;
var searchLocation = "";

submit.addEventListener("click", function(){
    if (searchLocation = ""){
        alert("Please click a neighborhood to search");
    }
    searchText = search.value;
    searchYelp(searchText);
});
westPhilly.addEventListener("click", function(){
    searchLocation = "west philly";
});
centerCity.addEventListener("click", function(){
    searchLocation = "center city";
});
southPhilly.addEventListener("click", function(){
    searchLocation = "south philly";
});
northPhilly.addEventListener("click", function(){
    searchLocation = "north philly";
});
northernLiberties.addEventListener("click", function(){
    searchLocation = "northern liberties";
});

function searchYelp(input){
    $.ajax({
        url: "https://yelp-search.herokuapp.com/search",
        method: "GET",
        data: {
            term: searchText,
            location: searchLocation,
            radius: 1000,
            sort_by: "rating"

        },
        success: function(response){
            console.log(response);

            i = 0;
            results.innerHTML = "";
            listResults(response);
        }

    })
}

function listResults(inputObject){
    inputObject.businesses.forEach(function(result){
        results.innerHTML += "<div class='result result" + i + "'><h2><a href='" + result.url + "'>" + result.name + "</a></h2><h3>Rating: " + result.rating + "</h3><h4>Phone: " + result.display_phone + "</h4></a>";
        i += 1;
    });
}















