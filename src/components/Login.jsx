import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import myLogo from "../assets/images/Logo.png";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin() {
    login();
    const destination = location.state?.from || "/";
    navigate(destination);
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#ffff] px-4 py-16">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-8">
          <img src={myLogo} alt="FitMe" className="w-8 h-8 object-contain" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">Welcome to FitMe</h2>
        <p className="text-sm text-gray-500 mt-3">
          Use your email to log in or sign up.
        </p>

        <div className="mt-8 text-left">
          <label className="text-xs text-gray-500">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 h-[50px] rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-orange-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-8 h-[50px] rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          Continue
        </button>

        <div className="flex items-center gap-3 mt-10">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">Or log in with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 h-[50px] rounded-lg border border-gray-300 flex items-center justify-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;