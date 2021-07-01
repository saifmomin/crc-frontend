
onmessage=function(event){  

console.log("Got msg inside worker.js: " +event.data);

      fetch(event.data).then(function(response) {
           					 return response.json();
       				          }).then(function(json) {
           							 return json;
       						           }).then(function(result) {
     									 // console.log(result);
       									//alert(result)
									postMessage(result);
  									  });

// stop the worker from the worker code.
//self.close();

}

