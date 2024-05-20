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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

const EmailVerificationForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center mt-8"
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup className="gap-4">
                    <InputOTPSlot
                      className="w-12 h-16 text-2xl bg-[#FCFCFD] border-[#E7ECF3] border rounded-lg"
                      index={0}
                    />
                    <InputOTPSlot
                      className="w-12 h-16 text-2xl bg-[#FCFCFD] border-[#E7ECF3] border rounded-lg"
                      index={1}
                    />
                    <InputOTPSlot
                      className="w-12 h-16 text-2xl bg-[#FCFCFD] border-[#E7ECF3] border rounded-lg"
                      index={2}
                    />
                    <InputOTPSlot
                      className="w-12 h-16 text-2xl bg-[#FCFCFD] border-[#E7ECF3] border rounded-lg"
                      index={3}
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="h-12 w-80 mt-8 text-[#FCFCFD] text-xl font-bold bg-blue-500"
        >
          Verify Account
        </Button>
        <p className="mt-6 text-center text-caption1 text-[#84878B]">
          Don&apos;t receive code?
          <strong className="ml-1 text-blue-500 text-subtitle3 cursor-pointer">
            Resend
          </strong>
        </p>
      </form>
    </Form>
  );
};

export default EmailVerificationForm;
