import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App() {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <div className="h-[80%] flex">
                <Sidebar />
                <Display />
              </div>
              <Player />
              <audio ref={audioRef} src={track.file} preload="auto"></audio>
            </>
          }
        />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}
