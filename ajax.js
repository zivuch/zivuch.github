let xhr = new XMLHttpRequest();
xhr.open(method, URL, [async, user, password])

//method – HTTP-method. Usually "GET" or "POST".
//URL – the URL to request, a string,
//      can be URL object.
//async – if explicitly set to false,
//        then the request is synchronous,
//        we’ll cover that a bit later.
//user, password – login and password for basic
//                 HTTP auth (if required).


xhr.send([body])


//Listen to xhr events for response.

//These three events are the most widely used:

//load – when the request is complete
//      (even if HTTP status is like 400 or 500),
//      and the response is fully downloaded.
//error – when the request couldn’t be made,
//        e.g. network down or invalid URL.
//progress – triggers periodically while the
//            response is being downloaded,
//            reports how much has been downloaded.

xhr.onload = function() {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function() { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};

xhr.onprogress = function(event) { // triggers periodically
  // event.loaded - how many bytes downloaded
  // event.lengthComputable = true if the server sent Content-Length header
  // event.total - total number of bytes (if lengthComputable)
  alert(`Received ${event.loaded} of ${event.total}`);
};


//We can also specify a timeout using the
// corresponding property:

xhr.timeout = 10000; // timeout in ms, 10 seconds


let url = new URL('https://google.com/search');
url.searchParams.set('q', 'test me!');
// the parameter 'q' is encoded
xhr.open('GET', url); // https://google.com/search?q=test+me%21

We can use xhr.responseType property to set the response format:

//"" (default) – get as string,
//"text" – get as string,
//"arraybuffer" – get as ArrayBuffer (for binary data, see chapter ArrayBuffer, binary arrays),
//"blob" – get as Blob (for binary data, see chapter Blob),
//"document" – get as XML document (can use XPath and other XML methods),
//"json" – get as JSON (parsed automatically).

xhr.responseType = 'json';

Ready states
XMLHttpRequest changes between states as it progresses. The current state is accessible as xhr.readyState.

//All states, as in the specification:

//UNSENT = 0; // initial state
//OPENED = 1; // open called
//HEADERS_RECEIVED = 2; // response headers received
//LOADING = 3; // response is loading (a data packed is received)
//DONE = 4; // request complete
xhr.onreadystatechange = function() {
  if (xhr.readyState == 3) {
    // loading
  }
  if (xhr.readyState == 4) {
    // request finished
  }
};


//Aborting request
//We can terminate the request at any time.
// The call to xhr.abort() does that:

xhr.abort(); // terminate the request

//Synchronous requests
xhr.open('GET', '/article/xmlhttprequest/hello.txt', false);


//HTTP-headers
//XMLHttpRequest allows both to send custom headers
//and read headers from the response.
//There are 3 methods for HTTP-headers:
setRequestHeader(name, value)
xhr.setRequestHeader('Content-Type', 'application/json');

//Gets the response header with the given name
getResponseHeader(name)
xhr.getResponseHeader('Content-Type')

//Returns all response headers
getAllResponseHeaders()

//Headers are returned as a single line, e.g.:
Cache-Control: max-age=31536000
Content-Length: 4260
Content-Type: image/png
Date: Sat, 08 Sep 2012 16:53:16 GMT
