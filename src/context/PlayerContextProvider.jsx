import { useEffect, useRef, useState } from "react";
import { PlayerContext } from "./PlayerContext";
import { songsData } from "../assets/assets";

export const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(); 
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]); // the current song
  const [playStatus, setPlayStatus] = useState(false); // playing or paused
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };
  const playWithId = async (id) => {
    await setTrack(songsData[id]); // đổi bài
    await audioRef.current.play(); 
    setPlayStatus(true);
  };
  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // Xử lý tua nhạc khi click vào seekBar (thanh màu tiến độ bài hát)
  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: String(
              Math.floor(audioRef.current.currentTime % 60) // Math.floor(x): trả về số nguyên nhỏ hơn hoặc bằng (x)
            ).padStart(2, "0"),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: String(Math.floor(audioRef.current.duration % 60)).padStart(
              2,
              "0"
            ),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
