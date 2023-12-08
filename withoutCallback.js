const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies(cookies) {
  storeCookie = [];
  cookies.forEach((cookie) => {
    storeCookie.push(cookie['name']);
  });
  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(function printCookie() {
    storeCookie.forEach((printEachCookie) => {
      document.body.innerHTML += "<p>"+printEachCookie+"</p>";
    }, 1000);
  });
  console.log(storeCookie);
  return storeCookie;
}

//Progression 3: Create a function to creat cookies
// use setTimeout() -- use 2000 units for time parameter
function getNewCookie(newCookie,cookies){
  setTimeout(function addNewCookie(){
    cookies.push(newCookie);
  },2000)
;  
}

// Progression 4: calling functions
getCookies(cookies);
getNewCookie(newCookie,cookies);
