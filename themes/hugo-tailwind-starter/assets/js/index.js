// Hamburger Menu
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click',function(){
    toggleClasses(btn, menu, menu, 'open-menu', 'flex', 'hidden');
}, false);

// Search Bar
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');

searchBtn.addEventListener('click',function(){
    toggleClasses( element2=searchBar, element3=searchBar, class2='block', class3='hidden');
    }, false);



// Utility functions
// Function toggleClasses takes three elements and three classes and toggles those classes on each element. ELement 3 and Class 3 are optional.
function toggleClasses(element1=null, element2, element3, class1=null, class2, class3) {
    if (element1 && class1) {
        element1.classList.toggle(class1);
    }
    element2.classList.toggle(class2);
    element3.classList.toggle(class3);
}