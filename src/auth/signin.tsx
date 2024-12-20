import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

interface SigninProps {
  type: "signup" | "signin"; // Define the type prop
}

const Signin: React.FC<SigninProps> = ({ type }) => {
  const [postInput, setPostInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Add loading state
  const Navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPostInput((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!postInput.email || !postInput.password) {
      toast.error("Please fill in both email and password.");
      return;
    }

    setLoading(true); // Start loading

    axios
      .post(
        type === "signin"
          ? "https://medium.ansht.workers.dev/api/v1/user/signin"
          : "https://medium.ansht.workers.dev/api/v1/user/signup", // Dynamically choose API based on type
        postInput
      )
      .then((response) => {
        const jwt = response.data.jwt;
        localStorage.setItem("jwt", jwt);
        toast.success(`${type === "signin" ? "Sign-in" : "Sign-up"} successful!`);
        Navigate("/blogs");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(
          error.response?.data?.message || "Something went wrong. Please try again."
        );
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Toaster />
      <div className="bg-white shadow-lg rounded-lg flex w-screen h-screen max-w-5xl justify-center">
        <div className="w-1/2 flex flex-col justify-center p-10">
          <h2 className="text-4xl font-bold text-center mb-2">
            {type === "signin" ? "Sign In" : "Sign Up"}
          </h2>
          <p className="text-gray-500 text-center mb-8">
            {type === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              to={type === "signin" ? "/signup" : "/signin"}
              className="text-black underline"
            >
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="m@example.com"
                value={postInput.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={postInput.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-gray-600 text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Loading..." : type === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
