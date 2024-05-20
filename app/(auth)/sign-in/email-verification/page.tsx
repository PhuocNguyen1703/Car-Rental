import EmailVerificationForm from "@/components/sign-in/email-verification/EmailVerificationForm";

const EmailVerification = () => {
  return (
    <section className="flex flex-col flex-1 justify-center items-center">
      <p className="text-headline2 text-center select-none">
        Email Verification
      </p>
      <p className="mt-3 text-body4 text-[#84878B]">
        We have send code to your email
      </p>
      <p className="text-body4 text-[#84878B]">admin@gmail.com</p>
      <EmailVerificationForm />
    </section>
  );
};

export default EmailVerification;
