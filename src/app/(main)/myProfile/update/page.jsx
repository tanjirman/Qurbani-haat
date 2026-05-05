"use client";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const user = session?.user;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: user?.name,
      image: user?.image,
    },
  });

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
          {...register("name", { required: true })}
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