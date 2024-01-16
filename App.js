
const nested = React.createElement("div",{},[
    React.createElement("div",{},React.createElement("h1",{},"Inside div one")),
    React.createElement("div",{},[
        React.createElement("h1",{},"Inside div two"),
        React.createElement("h2",{},"Heading two inside div two")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(nested)