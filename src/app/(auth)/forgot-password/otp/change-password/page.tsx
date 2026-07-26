/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
import { useResetPasswordMutation } from "@/redux/api/authApi";

import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const router = useRouter();

  const [resetPassword, { isLoading }] = useResetPasswordMutation() as any;

  const form = useForm<FieldValues>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { isSubmitting } = form.formState;

  const watchNewPassword = form.watch("newPassword");
  const watchConfirmPassword = form.watch("confirmPassword");
  const isPasswordMatch =
    watchNewPassword &&
    watchConfirmPassword &&
    watchNewPassword === watchConfirmPassword;

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPassword = () => setShowNewPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("Resetting password with:", data);

    const payload = {
      email: email,
      password: data?.confirmPassword,
    };

    const res = await resetPassword(payload).unwrap();
    if (res.success) {
      toast.success(res.message);
      router.push("/login");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-2 tracking-tight">
            Change Password
          </h2>
          <p className="text-sm text-stone-500">
            Create a new secure password for {email}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* New Password */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-stone-700 font-bold text-xs uppercase tracking-wider">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        {...field}
                        className="py-6 pr-12 rounded-xl transition-all bg-stone-50 border-stone-200 focus-visible:ring-pink-200"
                      />
                      <button
                        type="button"
                        onClick={toggleNewPassword}
                        className="absolute inset-y-0 right-4 flex items-center text-stone-400 hover:text-pink-600 transition-colors cursor-pointer"
                      >
                        {showNewPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-stone-700 font-bold text-xs uppercase tracking-wider">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter new password"
                        {...field}
                        className={`py-6 pr-12 rounded-xl transition-all bg-stone-50 border-stone-200 focus-visible:ring-pink-200 ${
                          !isPasswordMatch && watchConfirmPassword
                            ? "border-red-300 focus-visible:ring-red-200"
                            : ""
                        }`}
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPassword}
                        className="absolute inset-y-0 right-4 flex items-center text-stone-400 hover:text-pink-600 transition-colors cursor-pointer"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                  
                  {/* Show password mismatch error */}
                  {!isPasswordMatch && watchConfirmPassword && (
                    <p className="text-sm text-red-500 font-medium mt-1">
                      Passwords do not match.
                    </p>
                  )}
                </FormItem>
              )}
            />

            <div className="pt-4">
              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-6 text-xs uppercase font-extrabold tracking-wider bg-stone-900 hover:bg-pink-800 disabled:bg-stone-400 disabled:cursor-not-allowed text-white rounded-full shadow-lg transition-all cursor-pointer"
                disabled={isSubmitting || !isPasswordMatch}
              >
                {isSubmitting ? "Updating..." : "Change Password"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
