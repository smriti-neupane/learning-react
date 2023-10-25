//1. React is composable. Learned how to make a React function. 

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}
ReactDOM.render (
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)


//2. React is declarative. Appended header in div without using inner HTML.
//Imperative way of programming:
const h2 = document.createElement("h2")
h2.textContent = "Imperative programming"
h2.className = "header"
document.getElementById("root").append(h2)

//But, with React, we can do it in a more efficient and faster way:
//Declarative way:

<h3 className="header">How do I do it?</h3>

ReactDOM.render("header", document.getElementById("root"))
