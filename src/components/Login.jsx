import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/checkoutSubscription");
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#f7f7f7] px-4">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-6">
          <Img src={} "className="text-white text-2xl"/>
        </div>

        <h2 className="text-xl font-semibold text-gray-800">Welcome to FitMe</h2>
        <p className="text-sm text-gray-500 mt-2">
          Use your email to log in or sign up.
        </p>

        <div className="mt-6 text-left">
          <label className="text-xs text-gray-500">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 h-[46px] rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-orange-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 h-[48px] rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          Continue
        </button>

        <div className="flex items-center gap-3 mt-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">Or log in with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex justify-center gap-4 mt-5">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
            f
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
            G
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;