// 1 step
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://zivuch.github.io/ajax/data.json');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xht.statusText}`);
  }
  else{
    // const data = xhr.response;
    // console.log(xhr.response);
    // const data = JSON.parse(xhr.response);
    console.log(xhr.response); 
    // console.log(JSON.parse(xhr.response));
  }
}

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  console.log('Error something wrong');
};
