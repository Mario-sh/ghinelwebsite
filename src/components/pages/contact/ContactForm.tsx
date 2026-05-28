"use client";

export default function ContactForm() {
  return (
    <form className="card-surface space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-xs font-medium text-muted-foreground">
            Prénom
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-brand/50"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-xs font-medium text-muted-foreground">
            Nom
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-brand/50"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted-foreground">
          Email professionnel
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
        <label htmlFor="type" className="mb-2 block text-xs font-medium text-muted-foreground">
          Type de demande
        </label>
        <select
          id="type"
          name="type"
          className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground outline-none transition-colors focus:border-brand/50"
        >
          <option>Institution culturelle</option>
          <option>Investissement</option>
          <option>Créateur / artiste</option>
          <option>Marque & média</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium text-muted-foreground">
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre contexte, vos objectifs et votre calendrier."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand/50"
        />
      </div>
      <button
        type="submit"
        className="min-h-11 w-full rounded-full bg-foreground text-sm font-semibold text-on-brand transition-colors hover:bg-brand sm:w-auto sm:px-10"
      >
        Envoyer le message
      </button>
    </form>
  );
}
