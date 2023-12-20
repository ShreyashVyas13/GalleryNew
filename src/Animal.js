import * as React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";


const Animal = () =>{
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
            src="../Animal/img1.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img2.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img3.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img4.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img5.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img6.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img7.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img8.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img9.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img10.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img11.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img12.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img13.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img14.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img15.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img16.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img17.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img18.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img19.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img20.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img21.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img22.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img23.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img24.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img25.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img26.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img27.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img28.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img29.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img30.jpg" 
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img31.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img32.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img33.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img34.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img35.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img36.jpg"
            style={{ height: "100%", width: "100%" }}
          />
        </SlideshowLightbox>
        <br />
        <SlideshowLightbox className="natures2">
          <img
            src="../Animal/img37.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img38.jpg"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src="../Animal/img39.jpg"
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
export default Animal;
