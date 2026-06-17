"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type AuthFormProps = {
  mode: "login" | "register";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isLogin = mode === "login";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const body: Record<string, string> = {
      email: form.get("email") as string,
      password: form.get("password") as string,
    };
    if (!isLogin) {
      body.name = form.get("name") as string;
    }

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Une erreur est survenue");
      }

      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface mx-auto w-full max-w-md space-y-5 p-8">
      <div className="text-center">
        <h1 className="font-serif text-2xl font-medium text-foreground">
          {isLogin ? "Bon retour parmi nous" : "Rejoindre GHINEL"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isLogin
            ? "Connectez-vous à votre compte."
            : "Créez votre compte pour accéder à tous les contenus."}
        </p>
      </div>

      {error && (
        <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {!isLogin && (
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted-foreground">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-brand/50"
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-brand/50"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-xs font-medium text-muted-foreground">
          Mot de passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-brand/50"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="min-h-11 w-full rounded-full bg-foreground px-7 text-sm font-semibold text-on-brand transition-all hover:bg-brand hover:scale-105 active:scale-95 disabled:opacity-50"
      >
        {loading ? "Chargement…" : isLogin ? "Se connecter" : "Créer mon compte"}
      </button>

      <p className="text-center text-sm text-muted-foreground">
        {isLogin ? (
          <>
            Pas encore de compte ?{" "}
            <Link href="/inscription" className="font-medium text-brand hover:underline">
              S&apos;inscrire
            </Link>
          </>
        ) : (
          <>
            Déjà un compte ?{" "}
            <Link href="/connexion" className="font-medium text-brand hover:underline">
              Se connecter
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
