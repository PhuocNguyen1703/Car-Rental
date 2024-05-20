import { Button } from "@/components/ui/button";
import Image from "next/image";

const SignInSocial = () => {
  return (
    <div className="flex items-center mt-5 gap-3 h-11 w-full">
      <Button
        variant="outline"
        className="flex items-center justify-center flex-1 gap-2 h-full text-[16px]"
      >
        <Image src="/icons/google.svg" height={20} width={20} alt="google" />
        Sign in with Google
      </Button>
      <Image src="/icons/facebook.svg" height={44} width={44} alt="facebook" />
    </div>
  );
};

export default SignInSocial;
