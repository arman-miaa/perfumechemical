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
import { useChangePasswordMutation } from "@/redux/api/authApi";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ChangePasswordForm = z.infer<typeof changePasswordSchema>;

interface PasswordStrengthProps {
  password: string;
}

export default function ChangePassword() {
  const router = useRouter();
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const form = useForm<ChangePasswordForm>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const { isSubmitting, errors } = form.formState;

  const watchNewPassword = form.watch("newPassword");
  const watchConfirmPassword = form.watch("confirmPassword");
  const watchCurrentPassword = form.watch("currentPassword");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSamePassword, setIsSamePassword] = useState(false);

  useEffect(() => {
    if (watchCurrentPassword && watchNewPassword) {
      setIsSamePassword(watchCurrentPassword === watchNewPassword);
    } else {
      setIsSamePassword(false);
    }
  }, [watchCurrentPassword, watchNewPassword]);

  const onSubmit: SubmitHandler<ChangePasswordForm> = async (data) => {
    // Additional client-side validation
    if (data.currentPassword === data.newPassword) {
      toast.error("New password must be different from current password");
      return;
    }

    const payload = {
      oldPassword: data.currentPassword,
      newPassword: data.newPassword,
    };

    try {
      const res = (await changePassword(payload).unwrap()) as any;

      if (res.success) {
        toast.success(res.message || "Password changed successfully");
        router.push("/");
      } else {
        toast.error(res.message || "Failed to change password");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "An error occurred");
    }
  };

  const isFormValid = form.formState.isValid && !isSamePassword;

  return (
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-md bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-2 tracking-tight">
            Change Password
          </h2>
          <p className="text-sm text-stone-500">
            Create a new secure password for your account
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-stone-700 font-bold text-xs uppercase tracking-wider">
                    Current Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="Enter your current password"
                        {...field}
                        className={`py-6 pr-12 rounded-xl transition-all bg-stone-50 border-stone-200 focus-visible:ring-pink-200 ${
                          errors.currentPassword
                            ? "border-red-300 focus:border-red-500"
                            : "border-stone-200"
                        }`}
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-stone-400 hover:text-pink-600 transition-colors cursor-pointer"
                        tabIndex={-1}
                      >
                        {showCurrentPassword ? (
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
                        placeholder="Enter your new password"
                        {...field}
                        className={`py-6 pr-12 rounded-xl transition-all bg-stone-50 border-stone-200 focus-visible:ring-pink-200 ${
                          errors.newPassword || isSamePassword
                            ? "border-red-300 focus-visible:ring-red-200"
                            : watchNewPassword && !errors.newPassword
                              ? "border-green-300 focus-visible:ring-green-200"
                              : "border-stone-200"
                        }`}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-stone-400 hover:text-pink-600 transition-colors cursor-pointer"
                        tabIndex={-1}
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
                  {isSamePassword && (
                    <p className="text-sm text-red-500 mt-1">
                      New password must be different from current password
                    </p>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-stone-700 font-bold text-xs uppercase tracking-wider">
                    Confirm New Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your new password"
                        {...field}
                        className={`py-6 pr-12 rounded-xl transition-all bg-stone-50 border-stone-200 focus-visible:ring-pink-200 ${
                          errors.confirmPassword
                            ? "border-red-300 focus-visible:ring-red-200"
                            : watchConfirmPassword &&
                                watchNewPassword === watchConfirmPassword
                              ? "border-green-300 focus-visible:ring-green-200"
                              : "border-stone-200"
                        }`}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-stone-400 hover:text-pink-600 transition-colors cursor-pointer"
                        tabIndex={-1}
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
                  {watchConfirmPassword &&
                    watchNewPassword === watchConfirmPassword && (
                      <div className="flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600 font-medium">
                          Passwords match
                        </span>
                      </div>
                    )}
                </FormItem>
              )}
            />

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full py-6 text-xs uppercase font-extrabold tracking-wider bg-stone-900 hover:bg-pink-800 disabled:bg-stone-400 disabled:cursor-not-allowed text-white rounded-full shadow-lg transition-all cursor-pointer"
                disabled={!isFormValid || isLoading || isSubmitting}
              >
                {isLoading || isSubmitting
                  ? "Changing Password..."
                  : "Change Password"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
