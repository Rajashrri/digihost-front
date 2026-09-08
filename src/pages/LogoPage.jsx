import React, { useEffect, useRef, useState } from "react";

import l1 from "../assets/logos/l1.svg";
import l2 from "../assets/logos/l2.svg";
import l3 from "../assets/logos/l3.png";
import l4 from "../assets/logos/l4.png";
import l5 from "../assets/logos/l5.svg";
import l6 from "../assets/logos/l6.svg";
import l7 from "../assets/logos/l7.svg";
import l8 from "../assets/logos/l8.svg";
import l9 from "../assets/logos/l9.svg";
import l10 from "../assets/logos/l10.png";
import l11 from "../assets/logos/l11.svg";
import l12 from "../assets/logos/l12.png";
import l13 from "../assets/logos/l13.svg";

/* =====================================================
   LOGOS
===================================================== */

const logos = [
  {
    title: "Logo 1",
    imgurl: l1,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 2",
    imgurl: l2,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 3",
    imgurl: l3,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 4",
    imgurl: l4,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 5",
    imgurl: l5,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 6",
    imgurl: l6,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 7",
    imgurl: l7,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 8",
    imgurl: l8,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 9",
    imgurl: l9,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 10",
    imgurl: l10,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 11",
    imgurl: l11,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 12",
    imgurl: l12,
    url: "https://drgaikwad.com/",
  },
  {
    title: "Logo 13",
    imgurl: l13,
    url: "https://drgaikwad.com/",
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

const logoPositions = [
  { top: 100, left: 100 },
  { top: 120, left: 450 },
  { top: 80, left: 700 },
  { top: 120, left: 1100 },

  { top: 350, left: 250 },
  { top: 340, left: 500 },
  { top: 330, left: 850 },
  { top: 350, left: 1100 },

  { top: 550, left: 100 },
  { top: 520, left: 650 },
  { top: 540, left: 900 },

  { top: 700, left: 600 },
  { top: 720, left: 1100 },
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
            <h2>
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

              <iframe
                key={selectedUrl}

                src={selectedUrl}

                title={
                  selectedTitle ||
                  "Website Preview"
                }

                className="website-iframe"

                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  fullscreen
                "

                allowFullScreen
              />

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default LogoWall;