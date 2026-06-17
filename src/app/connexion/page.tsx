import type { Metadata } from "next";
import Image from "next/image";
import AuthForm from "@/components/ui/AuthForm";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connectez-vous à votre compte GHINEL.",
};

export default function ConnexionPage() {
  return (
    <main>
      <section className="page-top-offset relative flex min-h-svh items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden>
          <Image
            src="/auth-bg.png"
            alt=""
            fill
            className="object-cover opacity-65"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
        </div>
        <div className="container-wide relative z-10 py-16 sm:py-20">
          <AuthForm mode="login" />
        </div>
      </section>
    </main>
  );
}
