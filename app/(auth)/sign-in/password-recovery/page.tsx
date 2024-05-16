import PasswordRecoveryForm from "@/components/sign-in/password-recovery/PasswordRecoveryForm";

const PasswordRecovery = () => {
  return (
    <section className="flex flex-col flex-1 justify-center items-center">
      <p className="text-headline2 text-center select-none">
        Password Recovery
      </p>
      <p className="mt-3 text-body4 text-[#84878B]">
        Enter your email to recover your password
      </p>
      <PasswordRecoveryForm />
    </section>
  );
};

export default PasswordRecovery;
