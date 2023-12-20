import * as React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";


const Gaming = () =>{
    const changeLanguage = (event) => {
        // setValue(event.target.value);
        window.location.href = "/" + event.target.value;
      };
    return(
        <>
      <link rel="stylesheet" href="../dist/css/lightbox.min.css" />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/> 
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0" />

      <div className="bdy">
        <div className="head">
          <img src="../img/banner.png" alt="" />
        </div>
        <div className="search">
          <select onChange={changeLanguage}>
            <option>---Select---</option>
            <option value="animal">Animal</option>
            <option value="technology">Technology</option>
            <option value="gaming">Gaming</option>
            <option value="nature">Nature</option>
            <option value="food">Food</option>
          </select>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <div className="natures">
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img1.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img2.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img3.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img4.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img5.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img6.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img7.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img8.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img9.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img10.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img11.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img12.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img13.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img14.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img15.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img16.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img17.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img18.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img19.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img20.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img21.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img22.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img23.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img24.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img25.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img26.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img27.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img28.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img29.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img30.jpg" 
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img31.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img32.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img33.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img34.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img35.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img36.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Gaming/img37.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img38.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Gaming/img39.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />  
      </div>
      <div id="page7">
                <div id="foot-img">
                    <img src="../img/logo.jpg" alt="" />
                </div>
                <div id="foot">
                    &copy;The Gallery All Rights Reserved. <br/> <br/> Website Designed By mr.SV
                </div>
                <div id="icon">
                    <a href="https://web.whatsapp.com/send?hiphone=8866477123" target="_blank"><img src="../img/ws.gif" alt=""/></a>
                    <a href="https://twitter.com/VadechaShreyash?t=qJLMZme0B_Kq1sfTb9HQ9A&s=09" target="_blank"><img src="../img/twt.gif" alt=""/></a>
                    <a href="https://instagram.com/shreyash.vyas.13?igshid=YmMyMTA2M2Y=" target="_blank"><img src="../img/insta.gif" alt=""/></a>
                </div>
            </div>
      <script src="../dist/js/lightbox-plus-jquery.min.js"></script>
    </>
    )
}
export default Gaming;
