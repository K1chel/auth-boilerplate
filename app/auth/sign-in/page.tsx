import { Metadata } from "next";

import { AuthFooter, AuthHeader, SocialButtons } from "../_components";
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
  title: "Sign in",
};

const SignInPage = () => {
  return (
    <div className="space-y-5">
      <AuthHeader
        title="Sign in"
        description="Welcome back! Please sign in to continue"
      />
      <SocialButtons />
      <SignInForm />
      <AuthFooter
        title="Don't have an account?"
        hrefText="Sign up"
        href="/auth/sign-up"
      />
    </div>
  );
};

export default SignInPage;
