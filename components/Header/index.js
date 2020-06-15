// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class='header'>
//    <span class='date'>SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class='temp'>98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const header = gretel('.header-container');

function Header(){
    makeHeader(header)

    return headC;
}

Header();

function makeHeader(root){

    const headerHere = elem('header', 'header', null, root);

    const date = elem('span', 'date', 'SMARCH 28, 2019', headerHere);

    const title = elem('h1', 'title', 'Lambda Times', headerHere);

    const temp = noel('span', 'temperature', '98\u{00B0}', headerHere);

    return headerHere
}
