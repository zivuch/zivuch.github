// 1 step
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.javatpoint.com/xmlpages/emails.xml');

xhr.withCredentials = true;

xhr.responseType = 'xmlDoc';
xhr.send();

xhr.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xht.statusText}`);
  }
  else{
    console.log(xhr.response);
  }
}

// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     console.log(`Received ${event.loaded} bytes`); // no Content-Length
//   }
// };

xhr.onerror = function() {
  console.log('Error something wrong!!!!');
};


const built = (arr) => {
  const root = document.getElementById('root');
  arr.forEach((item, i) => {
    let div = document.createElement('div');
    let h1 = document.createElement('h3')
    let p = document.createElement('p');
    let img = document.createElement('img');

    h1.innerText = item.name;
    p.innerText = item.company.name;
    img.setAttribute('src', `https://robohash.org/${item.id}?200x200`)

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(p);

    root.appendChild(div);
  });

}
