import SignInForm from "@/components/sign-in/SignInForm";
import SignInSocial from "@/components/sign-in/SignInSocial";

const SignIn = () => {
  return (
    <section className="flex flex-1 justify-center items-center">
      <div className="flex flex-col w-[368px]">
        <p className="text-headline2 text-center select-none">Welcome Back!</p>
        <SignInSocial />

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
