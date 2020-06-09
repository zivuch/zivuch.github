// 1 step
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://zivuch.github.io/ajax/data.html');

xhr.send();

xhr.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xht.statusText}`);
  }
  else{
    console.log(xhr.response);
  }
}

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  console.log('Error something wrong');
};
