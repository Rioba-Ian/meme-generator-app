import TrollfFace from "../assets/Troll Face.png"


export default function Header() {
    return (
        <header className="header">
            <img className="header-img" src={TrollfFace} alt="trolling face" />
            <h2 className="header-title">MemeGenerator</h2>
            <h3 className="header-text">React Course-Project 3</h3>
        </header >
    )
}