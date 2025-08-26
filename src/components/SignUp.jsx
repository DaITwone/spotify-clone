import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-neutral-800 to-black">
      <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 p-10 rounded-lg w-full max-w-xl shadow-lg">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <FontAwesomeIcon
            icon={faSpotify}
            className="text-5xl text-white mb-5"
          />
          <h1 className="text-white text-5xl text-center font-extrabold">
            Sign up to <br />
            start listening
          </h1>
        </div>

        

        

        {/* Login form */}
        <form className="flex flex-col gap-4">
          <label className=" w-xs self-center flex flex-col text-sm font-bold text-white">
            Email address
            <input
              type="text"
              className="mt-1 p-2 border border-gray-700 rounded-md text-white font-light focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="name@domain.com"
            />
          </label>

          <button
            type="submit"
            className="w-xs self-center bg-green-500 text-black font-bold py-2 rounded-full hover:bg-green-400 transition"
          >
            Next
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Social login buttons */}
        <div className="flex flex-col gap-3">
          <button className="w-xs self-center flex items-center justify-center gap-2 border border-gray-500 rounded-full py-2 px-4 text-white hover:bg-neutral-800 transition">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
            />
            Continue with Google
          </button>

          

          <button className="w-xs self-center flex items-center justify-center gap-2 border border-gray-500 rounded-full py-2 px-4 text-white hover:bg-neutral-800 transition">
            <img
              src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png"
              alt="Apple"
            />
            Continue with Apple
          </button>

          
        </div>

        {/* Signup */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <a href="#" className="text-white font-bold underline hover:text-green-400">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}
