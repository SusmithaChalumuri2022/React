// 1st parameter is html tag
// 2nd parameter is object which contains attributes of the element like id, class etc.,
// 3rd paramater is innerHtml which is children for the element (can be single child or array of children)
const headingEl = React.createElement("h1", {id: "heading"}, "Hello world");

// React.createElement returns js object which is react element and not h1 html tag
console.log(headingEl);

/**
 * Creating multi level html elements using createElement (without JSX)
 * 
 * <div id="root">
 *      <div id="parent">
 *          <h1>first heading</h1>
 *          <h2> second heading</h2>
 *      </div>
 * </div>
 * 
 */
const parentEl = React.createElement("div", {id: "root"}, 
    React.createElement("div", {id: "parent"}, 
        [
            React.createElement("h1", {}, "first heading"),
            React.createElement("h2", {}, "second heading")
        ]
    )
)


const domNode = document.getElementById("container");
// Create one root element in our app so that we can now make use of reactDOM to manipulate browser DOM.
const rootEl = ReactDOM.createRoot(domNode);

console.log(rootEl);

// render method takes the object and creates html element which browser understands
// and will render that element inside root element in DOM tree
rootEl.render(parentEl);