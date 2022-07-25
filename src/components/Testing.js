export default function Testing() {
    function handleClick() {
        console.log('I have been clicked!')
    }
    function handleHover() {
        console.log("I am being hovered.")
    }
    return (
        <div className="container">
            <img src="https://www.picsum.photos/640/360"
                alt="random"
                onMouseOver={handleHover}
            />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}