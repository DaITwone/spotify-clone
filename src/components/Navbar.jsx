import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
import {
  faSearch,
  faDownload,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session?.user || null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const avatarUrl = session?.user_metadata?.avatar_url;
  const email = session?.email;
  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between bg-black px-4 py-2.5 text-white -mb-1.5">
      {/* Left: Logo + Home */}
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faSpotify} className="text-3xl text-green-500" />
        <button className="p-2 transform hover:scale-110 transition-all duration-200">
          <FontAwesomeIcon icon={faDoorOpen} size="xl" />
        </button>

        {/* Search */}
        <div className="bg-neutral-900 border border-transparent rounded-full px-6 py-2 hover:bg-neutral-800 duration-200 focus-within:border-white">
          <FontAwesomeIcon icon={faSearch} size="lg" />
          <input
            type="text"
            placeholder="What do you want to play?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none px-3 text-lg font-medium"
          />
        </div>

        <img
          onClick={() => navigate(-1)}
          className="w-8 bg-neutral-900 p-2 rounded-2xl cursor-pointer"
          src={assets.arrow_left}
          alt=""
        />
        <img
          onClick={() => navigate(1)}
          className="w-8 bg-neutral-900 p-2 rounded-2xl cursor-pointer"
          src={assets.arrow_right}
          alt=""
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <a href="#" className="font-bold text-base hover:text-white">
          Premium
        </a>
        <a href="#" className="font-bold text-base hover:text-white">
          Support
        </a>
        <a href="#" className="font-bold text-base hover:text-white">
          Download
        </a>
        <span className="text-gray-600">|</span>
        <button className="flex items-center gap-1 hover:text-green-500">
          <FontAwesomeIcon icon={faDownload} /> Install App
        </button>

        {session ? (
          <div className="relative">
            <img
              onClick={() => setOpenMenu(!openMenu)}
              src={avatarUrl}
              alt="avatar"
              referrerPolicy="no-referrer" // 👈 thêm dòng này
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            {openMenu && (
              <div className="absolute -right-2 mt-4 w-48 bg-neutral-900 text-neutral-500 font-medium rounded-lg shadow-lg p-2.5 z-50">
                <p className="font-bold text-sm mb-2">{email}</p>
                <div className="border-t border-neutral-700 my-1.5"></div>
                <button
                  onClick={signOut}
                  className="w-full text-left px-3 py-2 rounded-sm hover:bg-neutral-800 "
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <a
              onClick={() => navigate("/signup")}
              className="hover:text-green-500"
            >
              Sign up
            </a>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-black font-bold text-lg px-5 py-2 rounded-full hover:bg-gray-200 transform hover:scale-110 transition-all duration-200"
            >
              Log in
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
