import React from "react"
import "./Assets/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
    return (
        // BEM - BLOCK ELEMENT MODIFIER
        <div className="">
            <div className="player__body">
            <Sidebar />
            <Body spotify={spotify} />

            </div>

            

            <Footer />
        </div>
    )
}

export default Player;
