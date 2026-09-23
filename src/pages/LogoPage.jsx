import React, { useEffect, useRef, useState } from "react";

import airithim1 from "../assets/logos/airithim.png";
import Akirhs1 from "../assets/logos/Akirhs.png";
import ccp1 from "../assets/logos/ccp.png";
import DrGaikwad1 from "../assets/logos/DrGaikwad.png";
import globus1 from "../assets/logos/globus.png";
import Lanova1 from "../assets/logos/Lanova.png";
import Loma1 from "../assets/logos/Loma.png";
import Lotus1 from "../assets/logos/Lotus.png";
import NairCA1 from "../assets/logos/NairCA.png";
import neostar1 from "../assets/logos/neostar.png";
import poojalad1 from "../assets/logos/poojalad.png";
import Rbs1 from "../assets/logos/Rbs.png";
import RDVIt1 from "../assets/logos/RDVIt.png";
import ronak1 from "../assets/logos/ronak.png";
import Soupherb1 from "../assets/logos/Soupherb.png";
import video1 from "../assets/logos/video1.mp4";
import Airithm from "../assets/logos/Airithm.mp4";
import GlobusHomepage from "../assets/logos/GlobusHomepage.mp4";
import CaNair from "../assets/logos/CaNair.mp4";
import LaNova from "../assets/logos/LaNova.mp4";
import LotusDevelopers from "../assets/logos/LotusDevelopers.mp4";
import RonakAdv from "../assets/logos/RonakAdv.mp4";
import akirahs from "../assets/logos/akirahs.mp4";
import RBS from "../assets/logos/RBS.mp4";
import CCP from "../assets/logos/CCP.mp4";
import LomaDental from "../assets/logos/LomaDental.mp4";
import RDVIT from "../assets/logos/RDVIT.mp4";
import DrGaikwad from "../assets/logos/DrGaikwad.mp4";
import PoojaLadAssociates from "../assets/logos/PoojaLadAssociates.mp4";
import Soupherb from "../assets/logos/Soupherb.mp4";
import Neostar from "../assets/logos/Neostar.mp4";

/* =====================================================
   LOGOS
===================================================== */

const logos = [
  {
    title: "Dr.Gaikwad ",
    imgurl: DrGaikwad1,
    url: DrGaikwad,
  },
  {
    title: "Soupherb",
    imgurl: Soupherb1,
    url: Soupherb,
  },
  {
    title: "Loma Dental",
    imgurl: Loma1,
    url:LomaDental,
  },
  {
    title: "RDV IT",
    imgurl: RDVIt1,
    url: RDVIT,
  },
  {
    title: "Lotus Developers",
    imgurl: Lotus1,
    url: LotusDevelopers,
  },
  {
    title: "Neostar website",
    imgurl: neostar1,
    url: Neostar,
  },
  {
    title: "Akirhs website",
    imgurl: Akirhs1,
    url: akirahs,
  },
  // {
  //   title: "Lotus",
  //   imgurl: Lotus1,
  //   url: video1,
  // },
  {
    title: "CCP",
    imgurl: ccp1,
    url: CCP,
  },
  {
    title: "Pooja Lad & Associates",
    imgurl: poojalad1,
    url: PoojaLadAssociates,
  },
  {
    title: "CA Nair",
    imgurl: NairCA1,
    url: CaNair,
  },
  {
    title: "La nova",
    imgurl: Lanova1,
    url: LaNova,
  },
  {
    title: "Rekha Bright Steels",
    imgurl: Rbs1,
    url: RBS,
  },
  {
    title: "Ronak Advertising",
    imgurl: ronak1,
    url: RonakAdv,
  },
  {
    title: "Globus",
    imgurl: globus1,
    url: GlobusHomepage,
  },
  {
    title: "Airithm",
    imgurl: airithim1,
    url: Airithm,
  },
];

/* =====================================================
   TILE SIZE
===================================================== */

const TILE_WIDTH = 1400;
const TILE_HEIGHT = 1000;

/* =====================================================
   LOGO POSITIONS
===================================================== */
/* =====================================================
   LOGO POSITIONS — 16 LOGOS
===================================================== */
const logoPositions = [
     { top: 100, left: 100 },
     { top: 120, left: 450 },   
     { top: -80, left: 700 },   
     { top: -20, left: 1100 },   
     { top: 350, left: 250 },   
     { top: 340, left: 500 },   
     { top: 330, left: 850 },   
     { top: 350, left: 1100 },   
     { top: 550, left: 100 },   
     { top: 520, left: 650 },   
     { top: 600, left: 900 },   
     { top: 690, left: 400 },   
     { top: 256, left: 0 },
     { top: 80, left: 900 },
     { top: 220, left: 700 },
     { top: 620, left: 1200 },
];


/* =====================================================
   TILE POSITIONS
===================================================== */

const tilePositions = [
  [-1, -1],
  [0, -1],
  [1, -1],

  [-1, 0],
  [0, 0],
  [1, 0],

  [-1, 1],
  [0, 1],
  [1, 1],
];

/* =====================================================
   MODULO
===================================================== */

const getModulo = (value, size) => {
  return ((value % size) + size) % size;
};

/* =====================================================
   LOGO TILE
===================================================== */

const LogoTile = ({ x, y, onLogoClick }) => {
  return (
    <div
      className="logo-tile"
      data-x={x}
      data-y={y}
    >
      {logos.map((logo, index) => {
        const position = logoPositions[index];

        return (
          <div
            key={index}
            className="logo-click-area"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
            onClick={(e) => {
              e.stopPropagation();

              onLogoClick(
                logo.url,
                logo.title
              );
            }}
          >
            <img
              src={logo.imgurl}
              alt={logo.title}
              draggable={false}
              className={`brandlogo1 logo${index + 1}`}
            />
          </div>
        );
      })}
    </div>
  );
};

/* =====================================================
   MAIN COMPONENT
===================================================== */

const LogoWall = () => {
  /* ===================================================
     REFS
  =================================================== */

  const viewportRef = useRef(null);
  const worldRef = useRef(null);

  // Popup ref
  const popupRef = useRef(null);

  /* ===================================================
     DRAG REFS
  =================================================== */

  const isDragging = useRef(false);
  const hasDragged = useRef(false);

  const startX = useRef(0);
  const startY = useRef(0);

  const currentX = useRef(0);
  const currentY = useRef(0);

  const offsetX = useRef(0);
  const offsetY = useRef(0);

  /* ===================================================
     POPUP STATE
  =================================================== */

  const [isPopupOpen, setIsPopupOpen] =
    useState(false);

  const [selectedUrl, setSelectedUrl] =
    useState("");

  const [selectedTitle, setSelectedTitle] =
    useState("");

  const [showPopupHeader, setShowPopupHeader] =
    useState(false);

  /* ===================================================
     UPDATE WORLD
  =================================================== */

  const updateWorld = () => {
    if (!worldRef.current) {
      return;
    }

    const x = getModulo(
      offsetX.current,
      TILE_WIDTH
    );

    const y = getModulo(
      offsetY.current,
      TILE_HEIGHT
    );

    const tiles =
      worldRef.current.querySelectorAll(
        ".logo-tile"
      );

    tiles.forEach((tile) => {
      const tileX =
        Number(tile.dataset.x);

      const tileY =
        Number(tile.dataset.y);

      tile.style.transform = `
        translate3d(
          ${tileX * TILE_WIDTH + x}px,
          ${tileY * TILE_HEIGHT + y}px,
          0
        )
      `;
    });
  };

  /* ===================================================
     POINTER DOWN
  =================================================== */

  const handlePointerDown = (e) => {
    /*
     * Logo वर click केल्यास
     * drag सुरू करू नये.
     */

    if (
      e.target.closest(
        ".logo-click-area"
      )
    ) {
      return;
    }

    isDragging.current = true;
    hasDragged.current = false;

    startX.current = e.clientX;
    startY.current = e.clientY;

    currentX.current = offsetX.current;
    currentY.current = offsetY.current;

    viewportRef.current?.classList.add(
      "is-dragging"
    );

    try {
      e.currentTarget.setPointerCapture(
        e.pointerId
      );
    } catch (error) {}
  };

  /* ===================================================
     POINTER MOVE
  =================================================== */

  const handlePointerMove = (e) => {
    if (!isDragging.current) {
      return;
    }

    const moveX =
      e.clientX - startX.current;

    const moveY =
      e.clientY - startY.current;

    if (
      Math.abs(moveX) > 5 ||
      Math.abs(moveY) > 5
    ) {
      hasDragged.current = true;
    }

    offsetX.current =
      currentX.current + moveX;

    offsetY.current =
      currentY.current + moveY;

    updateWorld();
  };

  /* ===================================================
     POINTER UP
  =================================================== */

  const handlePointerUp = (e) => {
    isDragging.current = false;

    viewportRef.current?.classList.remove(
      "is-dragging"
    );

    try {
      e.currentTarget.releasePointerCapture(
        e.pointerId
      );
    } catch (error) {}
  };

  /* ===================================================
     POINTER CANCEL
  =================================================== */

  const handlePointerCancel = (e) => {
    isDragging.current = false;

    viewportRef.current?.classList.remove(
      "is-dragging"
    );

    try {
      e.currentTarget.releasePointerCapture(
        e.pointerId
      );
    } catch (error) {}
  };

  /* ===================================================
     OPEN POPUP
  =================================================== */

  const handleLogoClick = (
    url,
    title
  ) => {
    if (!url) {
      return;
    }

    setSelectedUrl(url);
    setSelectedTitle(title);

    // Popup open झाल्यावर initially hide
    // setShowPopupHeader(false);

    setIsPopupOpen(true);
  };

  /* ===================================================
     CLOSE POPUP
  =================================================== */

  const closePopup = () => {
    setIsPopupOpen(false);

    setSelectedUrl("");
    setSelectedTitle("");

    // setShowPopupHeader(false);
  };

  /* ===================================================
     POPUP TOP 100PX DETECTION
     
     Popup च्या top पासून 100px मध्ये
     cursor असेल तर header SHOW.
     
     Popup च्या 100px खाली असेल तर
     header HIDE.
  =================================================== */



  /* ===================================================
     ESC KEY
  =================================================== */

  useEffect(() => {
    const handleEscape = (e) => {
      if (
        e.key === "Escape" &&
        isPopupOpen
      ) {
        closePopup();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isPopupOpen]);

  /* ===================================================
     INITIAL WORLD POSITION
  =================================================== */

  useEffect(() => {
    updateWorld();
  }, []);

  /* ===================================================
     BODY SCROLL LOCK
  =================================================== */

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopupOpen]);

  const [showCenterText, setShowCenterText] =
  useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowCenterText(false);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }, []);

  /* ===================================================
     JSX
  =================================================== */

  return (
    <>
      {/* =================================================
          MAIN LOGO PAGE
      ================================================= */}

      <section className="mainlogopage">
        <div
          ref={viewportRef}
          className="logocontainer"

          onPointerDown={
            handlePointerDown
          }

          onPointerMove={
            handlePointerMove
          }

          onPointerUp={
            handlePointerUp
          }

          onPointerCancel={
            handlePointerCancel
          }
        >

          {/* =========================================
              INFINITE WORLD
          ========================================== */}

          <div
            ref={worldRef}
            className="infinite-world"
          >
            {tilePositions.map(
              ([x, y], index) => (
                <LogoTile
                  key={index}
                  x={x}
                  y={y}
                  onLogoClick={
                    handleLogoClick
                  }
                />
              )
            )}
          </div>

          {/* =========================================
              CENTER TEXT
          ========================================== */}

  <div className="centertext">
        
    <h2 className={`${showCenterText ? "hide" : "show"}`}>
      Click on any logo
    </h2>

  </div>

        </div>
      </section>


      {/* =================================================
          WEBSITE POPUP
      ================================================= */}

      {isPopupOpen && (
        <div
          className="website-popup-overlay"

          onMouseDown={(e) => {
            /*
             * Popup च्या बाहेर click केल्यावर
             * popup close.
             */

            if (
              e.target ===
              e.currentTarget
            ) {
              closePopup();
            }
          }}
        >

          {/* =========================================
              POPUP
          ========================================== */}

          <div
            ref={popupRef}
            className="website-popup"
          >

            {/* =======================================
                POPUP HEADER
            ======================================== */}

            <div
              className={`
                website-popup-header popup-header-show
              `}
            >

            


              {/* ACTION BUTTONS */}

              <div className="website-popup-actions">

                {/* OPEN NEW TAB */}



                {/* CLOSE */}

                <button
                  type="button"
                  className="popup-close"
                  title="Close"

                  onClick={
                    closePopup
                  }
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="20" fill="black" fill-opacity="0.25"/>
<path d="M24.873 15.1266L15.126 24.8736M15.126 15.1266L24.873 24.8736" stroke="#FEFEFE" stroke-width="1.6245" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </button>

              </div>

            </div>


            {/* =======================================
                IFRAME
            ======================================== */}

            <div className="website-iframe-wrapper">

           <video src={selectedUrl} autoPlay loop muted playsInline controls={false} style={{ width: "100%", height: "100%", objectFit: "contain", }} />

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default LogoWall;