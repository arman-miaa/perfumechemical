/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PHInput from "@/components/form/NRInput";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";

import { setCookie } from "@/src/utils/cookies";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode, JwtPayload } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type LoginFormValues = {
  email: string;
  password: string;
};
interface CustomJwtPayload extends JwtPayload {
  role: string;
}

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation() as any;
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/login.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await login(data).unwrap();

      if (res.success) {
        const token = res.data.token;
        setCookie(token);
        const user = jwtDecode<CustomJwtPayload>(token);
        dispatch(setUser({ token, user }));
        toast.success(res.message || "Login successful!");

        if (user?.role === "ADMIN") {
          router.push("/admin/dashboard");
        } else {
          router.push("/");
        }
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-rose-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px] bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(225,29,72,0.1)] overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side: Lottie Animation (Hidden on mobile) */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-rose-50 to-pink-100 p-12 items-center justify-center relative">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl font-extrabold text-rose-950 text-center mb-4">
              Welcome Back to <br /> Perfume Chemical
            </h2>
            <p className="text-rose-700/80 text-center text-sm font-medium mb-8">
              Discover the finest fragrance ingredients and chemicals.
            </p>
            <div className="w-full max-w-[400px] flex items-center justify-center p-4">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-full h-full opacity-90"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-rose-500 font-medium">
                  Loading animation...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Sign In</h1>
              <p className="text-slate-500 text-sm">
                Enter your email and password to access your account.
              </p>
            </div>

            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                  <div className="flex justify-end pt-1">
                    <Link
                      href="/forgot-password"
                      className="text-[13px] font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 mt-4 text-[15px] font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-[0_8px_20px_rgba(225,29,72,0.25)] hover:shadow-[0_12px_25px_rgba(225,29,72,0.35)] transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </FormProvider>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-1.5">
              <span className="text-sm text-slate-500">Don&apos;t have an account?</span>
              <Link 
                href="/register" 
                className="text-sm font-bold text-rose-600 hover:text-rose-700 transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
