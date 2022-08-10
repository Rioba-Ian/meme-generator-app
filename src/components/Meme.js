import { useState } from "react"
import MemesData from "../assets/data/MemesData"

export default function Meme() {
    /**
     * update our state to save meme-related
     * data as an object called meme with three properties:
     * topText, bottomText, randomImage
     * 
     * another state variable called allMemeImages which 
     * defaults to memesData
     */
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/345v97.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(MemesData)

    function getMemeImage() {
        const memesData = allMemeImages.data.memes
        const randNo = Math.floor(Math.random() * memesData.length)
        const url = memesData[randNo].url
        console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMemeData => ({
            ...prevMemeData,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <input
                    className="inputs"
                    type="text"
                    placeholder="top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    className="inputs"
                    type="text"
                    placeholder="bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button onClick={getMemeImage} className="meme-button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="img-memes" alt="random from API" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}