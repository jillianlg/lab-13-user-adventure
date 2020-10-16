// import functions and grab DOM elements
const form = document.querySelector('form');
// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    // console.log(data.get('name'), data.get('breed'));
});