import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function DisplaySong() {
  const navigate = useNavigate();
  const { id } = useParams();
  const songData = songsData[id];
  const { playWithId, track, play, pause, playStatus } =
    useContext(PlayerContext);

  const handlePlayPause = () => {
    if (track.id === songData.id) {
      playStatus ? pause() : play(); // đang là bài hiện tại thì toggle
    } else {
      playWithId(songData.id); // đổi sang bài khác
    }
  };

  const isCurrent = track.id === songData.id;
  const isPlaying = isCurrent && playStatus;

  const handleClick = (id) => {
    playWithId(id);
    navigate(`/song/${id}`);
  };
  return (
    <>
      <div className="mt-5 flex gap-8 flex-col md:flex-row md:items-end">
        <div className="relative w-48 group cursor-pointer">
          <img className="w-48 rounded" src={songData.image} alt="" />

          <button
            onClick={handlePlayPause}
            className="absolute bottom-2 right-2 bg-green-500 text-white p-3 rounded-full shadow-lg 
                   opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                   transition-all duration-300"
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="lg" />
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {songData.name}
          </h2>
          <h4>{songData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b> Spotify</b> • 1,323,154 likes • <b>50 songs, </b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4 ">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => handleClick(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-12 mr-5" src={item.image} alt="" />
            {item.name.substring(0, 20)}
          </p>
          <p className="text-[15px]">{songData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
}
