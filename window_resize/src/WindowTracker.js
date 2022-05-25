import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight)

    React.useEffect(() => {
        function watch() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener("resize", watch)

        return function () {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watch)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}
            <br />
            Window height: {windowHeight}</h1>
    )
}
