import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Image } from "../components/Image";
import { useEffect } from "react";
import { getme } from "../utils/getme";

export const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await getme();
      if (isAuthenticated) {
        navigate("/dashboard");
      }
    };

    checkAuth();
  }, [navigate]);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid md:grid-cols-2 items-center">
      <div className="hidden md:block">
        <Image />
      </div>
      <div className="flex flex-col h-screen justify-center items-center">
        <h2 className="font-bold text-3xl">Sign up</h2>
        <span>Create your Indigo Hack account</span>
        <form
          className="flex flex-col mt-10 w-7/12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Harsh"
            className="border border-gray-400 p-2 my-2 rounded-lg"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="abc@gmail.com"
            className="border border-gray-400 p-2 my-2 rounded-lg"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            className="border border-gray-400 p-2 my-2 rounded-lg"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white p-2 my-2 rounded-lg hover:bg-gray-900"
          >
            Sign Up
          </button>

          <Link to="/signin" className="underline mt-2">
            Already have an account? Sign In
          </Link>
        </form>
      </div>
    </div>
  );
};
