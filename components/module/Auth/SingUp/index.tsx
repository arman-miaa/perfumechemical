/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PHInput from "@/components/form/NRInput";
import { Button } from "@/components/ui/button";
import { useRegisterMutation } from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type RegisterFormValues = z.infer<typeof schema>;

export default function RegistrationForm() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation() as any;
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/register.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      agreedToTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "USER", // Default role
      };

      const res = await register(payload).unwrap();

      if (res.success) {
        toast.success(res.message || "Registration successful!");
        router.push("/login");
      } else {
        toast.error(res.message || "Registration failed");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px] bg-white rounded-3xl border border-stone-200/80 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side: Lottie Animation (Hidden on mobile) */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-bl from-stone-100 to-pink-50 p-12 items-center justify-center relative">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-extrabold text-stone-900 text-center mb-4 font-serif">
              Join Perfume Chemical
            </h2>
            <p className="text-stone-500 text-center text-sm font-medium mb-8">
              Create an account to explore premium fragrances.
            </p>
            <div className="w-full max-w-[400px] flex items-center justify-center p-4">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-full h-full opacity-90"
                  style={{ filter: "hue-rotate(-40deg) saturate(1.2)" }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-pink-500 font-medium">
                  Loading animation...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-stone-900 mb-2 tracking-tight">Create Account</h1>
              <p className="text-stone-500 text-sm">
                Fill in your details below to get started.
              </p>
            </div>

            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-1">
                  <PHInput
                    control={form.control}
                    name="name"
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1">
                  <PHInput
                    control={form.control}
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <PHInput
                    control={form.control}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2 pb-1">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 rounded border-stone-300 text-pink-600 focus:ring-pink-600 accent-pink-600"
                    {...form.register("agreedToTerms")}
                  />
                  <label htmlFor="terms" className="text-sm cursor-pointer text-stone-600 leading-tight">
                    I agree to the{" "}
                    <Link href="/terms" className="text-pink-600 font-medium hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-pink-600 font-medium hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {form.formState.errors.agreedToTerms && (
                  <p className="text-xs text-red-500 mt-1">
                    {form.formState.errors.agreedToTerms.message}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 mt-4 text-xs uppercase font-extrabold tracking-wider bg-stone-900 hover:bg-pink-800 text-white rounded-full shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            </FormProvider>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-center gap-1.5">
              <span className="text-sm text-stone-500">Already have an account?</span>
              <Link 
                href="/login" 
                className="text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
