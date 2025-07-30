import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/features/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setTouched({ email: true, password: true });
      return;
    }
    dispatch(login({ email }));
    navigate("/");
  };

  const inputClass = (field, value) =>
    `w-full p-3 rounded bg-black border ${
      touched[field] && !value ? "border-red-500" : "border-[#D4AF37]"
    } text-white placeholder:text-[#888]`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4">
      <div className="flex flex-col md:flex-row bg-[#111111] rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://as1.ftcdn.net/jpg/01/35/76/68/1000_F_135766831_buzwzScCj29YeJAtkazJOKpvmscKYq8z.jpg')",
          }}
        />
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 relative z-10 bg-[#111111] md:bg-transparent"
        >
          <h2 className="text-3xl text-[#D4AF37] mb-6 text-center">Welcome</h2>
          <div className="mb-4">
            <label className="block text-[#D4AF37] mb-1">Email</label>
            <input
              type="email"
              className={inputClass("email", email)}
              placeholder="Email"
              value={email}
              onBlur={() => setTouched({ ...touched, email: true })}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-[#D4AF37] mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className={inputClass("password", password)}
              placeholder="••••••••"
              value={password}
              onBlur={() => setTouched({ ...touched, password: true })}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 cursor-pointer text-[#D4AF37]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black py-2 rounded hover:bg-yellow-400 transition"
          >
            Log In
          </button>
          <p className="text-[#D4AF37] mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="underline hover:text-white">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
