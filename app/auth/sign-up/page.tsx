import { Metadata } from "next";

import { AuthFooter, AuthHeader, SocialButtons } from "../_components";
import { SignUpForm } from "./sign-up-form";

export const metadata: Metadata = {
  title: "Sign up",
};

const SignUpPage = () => {
  return (
    <div className="space-y-5">
      <AuthHeader
        title="Create your account"
        description="Welcome! Please fill in the details to get started."
      />
      <SocialButtons />
      <SignUpForm />
      <AuthFooter
        title="Already have an account?"
        hrefText="Sign in"
        href="/auth/sign-in"
      />
    </div>
  );
};

export default SignUpPage;
