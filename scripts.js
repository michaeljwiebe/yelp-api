var submit = document.getElementsByClassName("submit")[0];
var search = document.getElementsByClassName("search-box")[0];
var results = document.getElementsByClassName("results")[0];
var westPhilly = document.getElementsByClassName("west-philly")[0];
var centerCity = document.getElementsByClassName("center-city")[0];
var southPhilly = document.getElementsByClassName("south-philly")[0];
var northPhilly = document.getElementsByClassName("north-philly")[0];
var northernLiberties = document.getElementsByClassName("northern-liberties")[0];
var locations = document.getElementsByClassName("location");
var searchText;
var i = 0;
var searchLocation;

submit.addEventListener("click", function(){
    if (searchLocation === ""){
        alert("Please click a neighborhood to search");
    }
    results.innerHTML = "";
    searchText = search.innerHTML;
    searchYelp(searchText, searchLocation);
});

[].forEach.call(locations, function(location){
    location.addEventListener("click", function(){
        searchLocation = location.innerHTML;
    })
})

function searchYelp(searchText, searchLocation){
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
            listResults(response);
        }

    })
}

function listResults(inputObject){
    i = 0;
    results.innerHTML = "";
    inputObject.businesses.forEach(function(result){
        results.innerHTML += "<div class='flex result result" + i + "'><h2><a href='" + result.url + "'>" + result.name + "</a></h2><h3>Rating: " + result.rating + "</h3><h4>Phone: " + result.display_phone + "</h4></a>";
        i += 1;
    });
}















