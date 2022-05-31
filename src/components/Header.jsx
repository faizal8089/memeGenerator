import React from "react";
import '../css/Header.css'

export default function Header(){
    return(
        <div className="header">
            <div id="logo">
                <img id="logoimg" src="https://www.pngall.com/wp-content/uploads/2016/03/Troll-Face-Meme-PNG.png" alt="" />
                <span id="logotitle">Meme Generator</span>
            </div>
            <h3 id="project">React Course - Project 3</h3>
        </div>
    );
}