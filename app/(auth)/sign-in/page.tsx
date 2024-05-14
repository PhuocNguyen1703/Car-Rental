import SignInForm from "@/components/sign-in/SignInForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SignIn = () => {
  return (
    <section className="flex flex-1 justify-center items-center">
      <div className="flex flex-col w-[368px]">
        <p className="text-headline2 text-center select-none">Welcome Back!</p>
        <div className="flex items-center mt-5 gap-3 h-11 w-full">
          <Button
            variant="outline"
            className="flex items-center justify-center flex-1 gap-2 h-full text-[16px]"
          >
            <Image
              src="/icons/google.svg"
              height={20}
              width={20}
              alt="google"
            />
            Sign in with Google
          </Button>
          <Image
            src="/icons/facebook.svg"
            height={44}
            width={44}
            alt="facebook"
          />
        </div>

        <div className="relative w-[318px] h-[2px] bg-gray-200 mx-auto mt-8 select-none">
          <p className="inset-center px-2 bg-white text-caption2">
            or continue with
          </p>
        </div>
        <SignInForm />
      </div>
    </section>
  );
};

export default SignIn;
