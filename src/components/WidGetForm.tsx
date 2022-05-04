import { X } from "phosphor-react";
import React from "react";

export function WidGetForm() {
  return (
    <div className="bg-zinc-800 rounded-2xl w-[calc(100vw-2rem)] md:w-auto">
      <header className="flex items-around">
        <span>Deixe seu FeedBack </span>
        <X className="text" />
      </header>
      <footer className="text-sm text-zinc-400">
        Feito com ♥ por{" "}
        <a className="underline underline-offset-2" href="#">
          Marco Antonio
        </a>
      </footer>
    </div>
  );
}
