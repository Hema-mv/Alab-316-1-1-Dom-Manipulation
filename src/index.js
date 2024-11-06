
const mainEl = document.querySelector("main");
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a
//variety of ways to do this; pick whichever one that you think works best in
// this situation.
const h1 = document.createElement("h1")
h1.innerText = "DOM Manupulation"
mainEl.appendChild(h1)
//mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Set the height of the topMenuEl element to be 100%.
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// Add a class of flex-around to topMenuEl.

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


  //Iterate over the entire menuLinks array and for each "link" objec
for (let menu of menuLinks) {
    const a = document.createElement("a") 
    a.setAttribute("href", menu.href) 
    a.textContent = menu.text 
    topMenuEl.append(a) 
}
