import React from "react"
import "./Assets/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player() {
    return (
        // BEM - BLOCK ELEMENT MODIFIER
        <div className="">
            <div className="player__body">
            <Sidebar />
            <Body />

            </div>

            

            <Footer />
        </div>
    )
}

export default Player
