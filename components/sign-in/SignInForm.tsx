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

const SignInForm = () => {
  const formSchema = z.object({
    email: z.string().min(2).max(50),
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
                <Input
                  placeholder="Enter your password"
                  {...field}
                  className="h-12 bg-[#E7ECF3]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-3 text-caption2 text-end text-blue-500">
          Forgot your password?
        </p>
        <Button className="w-full h-12 mt-5 bg-blue-500" type="submit">
          <p className="text-btn-lg text-[#FFFAF7]">Sign in</p>
        </Button>
        <p className="mt-5 text-center">Don&apos;t have an account? </p>
      </form>
    </Form>
  );
};

export default SignInForm;
