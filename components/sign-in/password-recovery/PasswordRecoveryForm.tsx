"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

const PasswordRecoveryForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 min-w-[324px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-[10px]">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="h-12 bg-[#E7ECF3]"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full h-12 mt-6 bg-blue-500" type="submit">
          <p className="text-btn-lg text-[#FFFAF7]">Send Code</p>
        </Button>
      </form>
    </Form>
  );
};

export default PasswordRecoveryForm;
