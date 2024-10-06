"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { SubmitButton } from "@/components/submit-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpSchema, SignUpValues } from "@/lib/validators/auth";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";

import { ForgotPassword, ShowPassword } from "../_components";

export const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignUpValues) => {
    setError(null);
    setSuccess(null);
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
  };

  return (
    <>
      <FormSuccess message={success} />
      <FormError message={error} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="john_doe"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    {...field}
                    type="email"
                    placeholder="example@email.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <ForgotPassword />
                </div>
                <FormControl>
                  <div className="relative">
                    <ShowPassword
                      showPassword={showPassword}
                      onToggleShowPassword={handleShowPassword}
                      disabled={isPending}
                    />
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="********"
                      type={showPassword ? "text" : "password"}
                      className="pr-10"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton
            size="sm"
            disabled={isPending}
            loadingText="Creating account..."
          >
            Create account
          </SubmitButton>
        </form>
      </Form>
    </>
  );
};
