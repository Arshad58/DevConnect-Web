import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { email, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data|| "Login Failed!");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-300 text-neutral-content w-96 shadow-xl">
        <div className="card-body p-6">
          <h2 className="card-title justify-center mb-4 text-2xl">Login</h2>

          <fieldset className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-neutral-content">
                  Email ID
                </span>
              </label>
              <input
                type="text"
                value={email}
                className="input input-bordered w-full h-12 text-base"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-neutral-content">
                  Password
                </span>
              </label>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full h-12 text-base"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>

          <p className="text-red-500">{error}</p>
          <div className="flex justify-between mt-6">
            <button className="btn btn-primary px-6" onClick={handleLogin}>
              Login
            </button>
            <button className="btn btn-ghost">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
