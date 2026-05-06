"use client";

import { useEffect } from "react";                          
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const { data: session, isPending } = authClient.useSession();  isPending
  const router = useRouter();
  const user = session?.user;

  const {
    register,
    handleSubmit,
    reset,                                                  
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        image: user.image,
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      const res = await authClient.updateUser({
        name: data.name,
        image: data.image,
      });

      if (res?.error) {
        toast.error(res.error.message);
      } else {
        toast.success("Profile updated!");
        router.push("/myProfile");
      }
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-96 bg-base-100 shadow-xl p-6 space-y-4 animate__animated animate__fadeInUp"
      >
        <h2 className="text-xl font-bold">Update Profile</h2>

        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          {...register("name")}
        />

        {/* Email  */}
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full bg-base-200 cursor-not-allowed"
          {...register("email")}
          disabled
        />

        <input
          type="url"
          placeholder="Image URL"
          className="input input-bordered w-full"
          {...register("image")}
        />

        <button className="btn btn-primary w-full" disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
}