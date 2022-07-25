import MemesData from "../assets/data/MemesData"

export default function Meme() {
    function getMemeImage() {
        const memesData = MemesData.data.memes
        const randNo = Math.floor(Math.random() * memesData.length)
        const url = memesData[randNo].url
        console.log(url)


    }
    return (
        <main>
            <div className="form">
                <input className="inputs" type="text" placeholder="top text"></input>
                <input className="inputs" type="text" placeholder="bottom text"></input>
                <button onClick={getMemeImage} className="meme-button">Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}