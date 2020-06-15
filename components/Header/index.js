// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

export const noel = (selector) => document.createElement(selector);

export const gretel = (selector)=> document.querySelector(selector);

export const gretels = (selector) => document.querySelectorAll(selector);

export const append = (appendTo, element) => {
    let parent = appendTo;
    let child = element;
    parent.appendChild(element);
    return parent;
}

const header = gretel('.header-container');

function Header(){
    const headC = append(header, makeHeader())

    return headC;
}

Header();

function makeHeader(){

    const header = noel('header');
    header.classList.add('header');

    const date = noel('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';
    append(header, date);

    const title = noel('h1');
    title.textContent = 'Lambda Times';
    append(header, title);

    const temp = noel('span');
    temp.textContent = '98\u{00B0}';
    append(header, temp)
    return header
}
