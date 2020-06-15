// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const noel = (selector) => document.createElement(selector);

const gretel = (selector)=> document.querySelector(selector);

const gretels = (selector) => document.querySelectorAll(selector);

const append = (appendTo, element) => {
    let parent = appendTo;
    parent.appendChild(element);
    return parent;
}

const elem = (selector, elClass, txtCont, appendTo) => {
    const element = noel(selector);
    element.classList.add(elClass);
    txtCont && (element.textContent = txtCont);
    append(appendTo, element);
    console.log('element parent = ', element)
    return element;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log('this is the response: ', response)
    const tabs = Tabs(response);
})
     .catch(error => console.log(error));

function Tabs(resData){
    const {data} = resData;
    console.log('resData = ', data)
    const tabs = data.topics;
    
    return tabs.forEach(tab => {
        let topics = gretel('.topics');
        let element = elem('div', 'tab', tab, topics);
        return element;
    })

}

