import React, {useState} from "react";
import '../css/Meme.css';

export default function Meme(){

    console.log("rendered");

    const [memeData, setMemeData] = useState({});


    React.useEffect(()=>{fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setMemeData(data))}, [])



    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:""
    });


    function getMemeImage(){

        const random = Math.floor(Math.random()* memeData.data.memes.length);
        const url = memeData.data.memes[random].url;
        setMeme((pre)=>{return {...pre, randomImage:url}});
    }

    function handleChamge(event){
        const {value , name} =  event.target;
        setMeme(pre => {return {...pre, [name] : value}})
    }
    
    return(
        <main className="meme">
            <div className="form">
                    <input value={meme.topText} name="topText" onChange={handleChamge} placeholder="Text1" type="text" id="text1" />
                    <input value={meme.bottomText} name="bottomText" onChange={handleChamge} placeholder="Text2" type="text" id="text2" />
                    <button onClick={getMemeImage} id="button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} id="memeimage" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}