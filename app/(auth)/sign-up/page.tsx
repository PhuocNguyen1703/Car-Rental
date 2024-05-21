import SignInSocial from "@/components/sign-in/SignInSocial";
import SignUpForm from "@/components/sign-up/SignUpForm";

const SignUp = () => {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-60px)]">
      <div className="flex flex-col w-[428px]">
        <p className="text-headline2 text-center select-none">Sign Up</p>
        <p className="text-center text-caption2 text-[#84878B]">
          It&apos;s quick and easy.
        </p>
        <SignInSocial />

        <div className="relative w-[318px] h-[2px] bg-gray-200 mx-auto mt-8 select-none">
          <p className="inset-center px-2 bg-white text-caption2">
            or continue with
          </p>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
};

export default SignUp;
