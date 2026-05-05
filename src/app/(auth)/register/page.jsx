"use client";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
  try {
    const res = await authClient.signUp.email({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      image: formData.photo,
      callbackURL: "/"
    });

    if (res?.error) {
      alert(res.error.message);
    } else {
      alert("Registration successful!");
    }

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
        <h2 className="text-xl font-bold">Register</h2>
        {/* Name */}
        <input
          type="text"
          placeholder="Type your Name"
          className="input input-bordered w-full"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        {/* Photo URL */}
        <input
          type="url"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          {...register("photo", { required: "Photo is required" })}
        />
        {errors.photo && (
          <p className="text-red-500 text-sm">{errors.photo.message}</p>
        )}

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
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button className="btn btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
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