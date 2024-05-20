"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  className="h-12 bg-[#E7ECF3]"
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
            <FormItem className="mt-5">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...field}
                    className="h-12 pr-11 bg-[#E7ECF3]"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-[10px] top-[10px] h-7 w-7 rounded-full outline-none hover:bg-gray-300"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="stroke-gray-700" size={18} />
                    ) : (
                      <Eye className="stroke-gray-700" size={18} />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-3 text-caption2 text-end text-blue-500 cursor-pointer hover:underline">
          Forgot your password?
        </p>
        <Button className="w-full h-12 mt-5 bg-blue-500" type="submit">
          <p className="text-btn-lg text-[#FFFAF7]">Sign in</p>
        </Button>
        <p className="mt-6 text-center text-caption1 text-[#84878B]">
          Don&apos;t have an account?
          <strong className="ml-1 text-blue-500 text-subtitle3 cursor-pointer">
            Sign up
          </strong>
        </p>
      </form>
    </Form>
  );
};
export default SignInForm;
