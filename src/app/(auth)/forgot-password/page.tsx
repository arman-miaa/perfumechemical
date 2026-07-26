/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ResetPassword() {
  const router = useRouter();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation() as any;

  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    router.push(`/forgot-password/otp?email=${data?.email}`);

    try {
      const res = await forgotPassword(data).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-2 tracking-tight">
            Forgot Password?
          </h2>
          <p className="text-stone-500 text-sm">
            Enter your email to receive an OTP.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-stone-700 font-bold text-xs uppercase tracking-wider">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      {...field}
                      className="py-6 rounded-xl bg-stone-50 border-stone-200 focus-visible:ring-pink-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full py-6 mt-4 text-xs uppercase font-extrabold tracking-wider bg-stone-900 hover:bg-pink-800 text-white rounded-full shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              disabled={isSubmitting}
            >
              Send OTP
            </Button>
          </form>
        </Form>

        <div className="mt-8 pt-6 border-t border-stone-100 text-center flex items-center justify-center gap-1.5">
          <p className="text-sm text-stone-500">
            Remember your password?{" "}
          </p>
          <Link
            href="/login"
            className="text-sm font-bold text-pink-600 hover:text-pink-700 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
