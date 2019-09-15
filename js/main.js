// Function get element 
const get_element = (e) => document.querySelector(e);

//  Open the menu on click
get_element('.open').addEventListener('click', () => {
    get_element('.nav-list').classList.add('active');
});

//  Close the menu on click
get_element('.close').addEventListener('click', () => {
    get_element('.nav-list').classList.remove('active');
});
