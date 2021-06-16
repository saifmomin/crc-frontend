window.onload = fetchCount;

//alert("Page is loaded - START");

    function fetchCount() {
        return fetch('https://nqzivwsyvi.execute-api.ap-south-1.amazonaws.com/Stage/visits').then(function(response) {
            return response.json();
        }).then(function(json) {
            return json;
        }).then(function(result) {
        console.log(result);
        //alert(result)
        document.getElementById("visitor_count").innerHTML = "You're guest # " +  result + " to check out my profile page !";
    });

  //alert("Page is loaded - END");

}
