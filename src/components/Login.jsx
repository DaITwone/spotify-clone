import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { supabase } from "../../supabase";
export default function Login() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/", // quay về đây sau khi login thành công
      },
    });

    if (error) {
      console.error("Google login error:", error.message);
    } else {
      console.log("Redirecting to Google login...");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-neutral-800 to-black">
      <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 p-10 rounded-lg w-full max-w-xl shadow-lg">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <FontAwesomeIcon icon={faSpotify} className="text-4xl text-white" />
          <h1 className="text-white text-3xl font-bold">Log in to Spotify</h1>
        </div>

        {/* Social login buttons */}
        <div className="flex flex-col gap-3">
          <button onClick={handleGoogleLogin} className="w-xs self-center flex items-center justify-center gap-2 border border-gray-500 rounded-full py-2 px-4 text-white hover:bg-neutral-800 transition">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            Continue with Google
          </button>

          <button className="w-xs self-center flex items-center justify-center gap-2 border border-gray-500 rounded-full py-2 px-4 text-white hover:bg-neutral-800 transition">
            <img src="https://img.icons8.com/fluency/24/facebook-new.png" alt="Facebook" />
            Continue with Facebook
          </button>

          <button className="w-xs self-center flex items-center justify-center gap-2 border border-gray-500 rounded-full py-2 px-4 text-white hover:bg-neutral-800 transition">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" alt="Apple" />
            Continue with Apple
          </button>

          <button className="w-xs self-center flex items-center justify-center gap-2 border border-gray-500 rounded-full py-2 px-4 text-white hover:bg-neutral-800 transition">
            Continue with phone number
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Login form */}
        <form className="flex flex-col gap-4">
          <label className=" w-xs self-center flex flex-col text-sm font-bold text-white">
            Email or username
            <input
              type="text"
              className="mt-1 p-2 border border-gray-700 rounded-md text-white font-light focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Email or username"
            />
          </label>

          <button
            type="submit"
            className="w-xs self-center bg-green-500 text-black font-bold py-2 rounded-full hover:bg-green-400 transition"
          >
            Continue
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-white font-bold underline hover:text-green-400">
            Sign up for Spotify
          </a>
        </p>
      </div>
    </div>
  );
}
