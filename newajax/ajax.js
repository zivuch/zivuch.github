let xhr = new XMLHttpRequest();

xhr.open('GET','https://zivuc.github.io/newajax/data.xml');
xhr.responseType = 'document';
xhr.send();

xhr.onload = function() {
  if(xhr.status != 200) {
    console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
  }
  else{
    console.log(`Done, got ${xhr.response.length} bytes`); // response is the server
    const xml = xhr.response;
    console.log(xml.getElementsByTagName('user'));
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
  alert("Request failed");
};
