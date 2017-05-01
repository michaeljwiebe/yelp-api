// Yelp API Assignment

// Create a site with a search bar and a list of Philadelphia neighborhoods and/or towns and cities in the metro region. These can be listed in a dropdown menu or just as a collection of buttons/divs. There should also be a button or div that when clicked runs a function that: 

// -  Searches the Yelp API for businesses in the selected neighborhood that match the search criteria from the search bar. 
// - Lists the results on the page with some of the data associated with each result (name, address, image, etc.)

// Additionally: 

// - When a result is clicked, it opens the Yelp page for that business in a new window.
// - When a user makes a new search, the old results go away and the new results  populate the page and are also clickable.




// $.ajax({
//     url: "https://api.yelp.com/oauth2/token",
//     method: "POST",
//     data:{
//         client_id: "YJIsPhVU22xhqXbt4Ti3eQ",
//         client_secret: "rfgBhLQOJRqzpfY0zwVhR0BlprkfdOEvUVj60csXkzo5xhGMZT18HM4yGvzNqsni"
//     },
//     dataType:"json",
//     success: function(response){
//         console.log(response)
//     }

// })

    // $.ajax({
    //     url: "https://api.yelp.com/v3/businesses/search",
    //     data:{
    //        term: "pizza",
    //        location: "Philadelphia",
    //        radius: 1000
    //     },
    //     headers: {
    //     "Authorization": "Bearer Y7h2GxIY4X2kM8jefOht3EL4zwHefHSPloABF6Ar4F1gzqaWzUu4mpTZiFDcir2sJHcW7meS0brXA5lLjWviOQ9BUH5jpdmVpDKRDy5JZk8zb7ZFWVfDiSult28DWXYx"
    // },
    //     dataType:"json",
    //     success: function(response){
    //         console.log(response)
    //     }

    // })


var submit = document.getElementsByClassName("submit")[0];
var search = document.getElementsByClassName("search-box")[0];
var results = document.getElementsByClassName("results")[0];
var searchText;

submit.addEventListener("click", function(){
    searchText = search.value;
    searchYelp(searchText);
});

function searchYelp(input){
    $.ajax({
        url: "https://yelp-search.herokuapp.com/search",
        method: "GET",
        data: {
            term: searchText,
            location: "west philadelphia",
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
    inputObject.businesses.forEach(function(result){
        results.innerHTML += "<div class='result'><h2>" + result.name + "</h2><h3>Rating:" +result.rating + "</h3><h4>Phone: " + result.display_phone + "</h4>";
    });
}















