import React from "react"
import "../Components/zuri-pro1.css"
import dp from "../assets/ca1.jpeg"
import dpp1 from "../assets/Icon.png"
import dp2 from "../assets/Social Section.png"
import dp22 from "../assets/Footer.png"
import dp3 from "../assets/vector.png"
import dp4 from "../assets/I4G.png"
import dp5 from "../assets/_Avatar share button.png"


function zuripro1() {
 
    return (
      <div>
        <div className="wrapper">
    
        <img src={dpp1} id="shareBtn"/>
        <img src={dp5} id="menuBtn"/>

        <header>
        <img src={dp} id="profile__img" alt="profile-image"/>
        <div id="twitter">
        <a href="https://twitter.com/eguducasidi">CASIDI MICHAEL</a>
        </div>
        <div>
        <h3 id="slack">CASMIR EGUDU</h3>
        </div>

        </header>

        <main>
        <div id="btn__zuri">
        <a  href="https://training.zuri.team/">Zuri Team</a>
        </div>

        <div id="books">
        <a href="http://books.zuri.team/">Zuri Books</a>

        </div>

        <div id="book__python">
        <a href="https://books.zuri.team/">Python Books</a>
        </div>

        <div id="pitch">
        <a href="https://background.zuri.team/">Background Check for Coders</a>
        </div>

        <div id="book__design">
        <a href="https://books.zuri.team/design-rules">Design Books</a>
        </div>

        </main>
        <div>

        <img src={dp2} id="image2"/>
        <img src={dp22} id="image22"/>

        </div>
        <footer>
        <img src={dp3}/>
        <h2>HNG Internship 9 Frontend Task</h2>
        <img src={dp4}/>
        </footer>
        </div>
      </div>
    )
  }
  
  export default zuripro1