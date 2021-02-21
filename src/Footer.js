import React from "react"
import "./Assets/Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";


function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://media.pitchfork.com/photos/5a282efb12b9202b45f92d95/1:1/w_600/Lil%20Baby%20Too%20Hard.jpg" alt="" />
                <div className="footer__songInfo">
                    <h4>Freestyle</h4>
                    <p>Lil Baby</p>
                </div>
            </div>

            <div className="footer__center">
                {/* change "green" */}
            <ShuffleIcon className="footer__salmon" />
            <SkipPreviousIcon className="footer__icon" />
            <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
            <SkipNextIcon className="footer__icon" />
            <RepeatIcon className="footer__salmon" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>



        </div>
    )
}

export default Footer;