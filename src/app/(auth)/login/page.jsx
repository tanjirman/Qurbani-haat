"use client";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await authClient.signIn.email({
        email: data.email,
        password: data.password,
         callbackURL: "/"
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-96 bg-base-100 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-xl font-bold">Login</h2>

        
        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button className="btn btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        {/* Google Login */}
        <button
          type="button"
          onClick={() =>
            authClient.signIn.social({ provider: "google" })
          }
          className="btn btn-outline w-full"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}