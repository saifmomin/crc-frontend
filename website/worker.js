//Worker Script
onmessage=function(event){
    fetch(event.data).then(function(response) {
           					return response.json();
       				        }).then(function(json) {
           					return json;
       						}).then(function(result) {
							postMessage(result);
  							});
}

