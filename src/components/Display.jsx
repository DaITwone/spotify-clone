// import React, { useEffect, useRef } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import DisplayHome from "./DisplayHome";
// import DisplayAlbum from "./DisplayAlbum";
// import { albumsData } from "../assets/assets";
// import DisplaySong from "./DisplaySong";
// export default function Display() {
//   const displayRef = useRef();
//   const location = useLocation();
//   const isAlbum = location.pathname.includes("album");
//   const albumId = isAlbum ? location.pathname.slice(-1) : "";
//   const bgColor = albumsData[Number(albumId)].bgColor;
//   useEffect(() => {
//     if (isAlbum) {
//       displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
//     } else {
//       displayRef.current.style.background = `#121212`;
//     }
//   });
//   return (
//     <div
//       ref={displayRef}
//       className="w-[100%] m-2 px-6 pt-6 rounded bg-[#121212] text-white overflow-auto lg:w-[77.5%] lg:ml-0"
//     >
//       <Routes>
//         <Route path="/" element={<DisplayHome />} />
//         <Route path="/album/:id" element={<DisplayAlbum />} />
//         <Route path="/song/:id" element={<DisplaySong/>} />
//       </Routes>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import DisplaySong from "./DisplaySong";
import { albumsData, songsData } from "../assets/assets";
import Login from "./Login";

export default function Display() {
  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("album");
  const isSong = location.pathname.includes("song");

  // lấy id cuối url (vd: /album/2 hoặc /song/5)
  const id = location.pathname.split("/").pop();

  let bgColor = "#121212";

  if (isAlbum) {
    bgColor = albumsData[Number(id)]?.bgColor || "#121212";
  } else if (isSong) {
    bgColor = songsData[Number(id)]?.bgColor || "#121212";
  }

  useEffect(() => {
    displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
  }, [location.pathname, bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-6 rounded bg-[#121212] text-white overflow-auto lg:w-[77.5%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/song/:id" element={<DisplaySong />} />
      </Routes>
    </div>
  );
}
