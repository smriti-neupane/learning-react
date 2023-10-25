//Creating a navbar in JSX

const navbar = (
    <div className = "navigationbar">
        <h1>Wander Travel Guide</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
)

ReactDOM.render (
    navbar,
    document.getElementById("root")
)
