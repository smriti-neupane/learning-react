import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer () {
    return (
        <footer>
                <small>© 2021 Neupane development. All rights reserved.</small>
            </footer>
    )
}

function MainContent () {
    return (
        <div>
         <h1>Why am I at Cornell?</h1>
            <ol>
                <li>I want to learn as much as I can.</li>
                <li>I want to know what I like.</li>
                <li>I want to know how much I can push myself.</li>
                <li>I am getting this great education for free.</li>
                <li>Because I lie.</li>
            </ol>
        </div>
    )
}
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
