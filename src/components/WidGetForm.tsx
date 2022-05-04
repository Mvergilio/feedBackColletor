import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import React from "react";

const feedBackTypes = {
  BUG: {
    folderUrl: "../assets/bug.svg",
    altText: "image de uma largata roxa olhando para frente",
  },
  IDEA: {
    folgerUrl: "../assets/idea.svg",
    altText: "Imagen de uma lampada acesa representando uma idea",
  },
  THOUGHT: {
    folderURL: "../assets/thought.svg",
    altText: "Imagem de uma nuvem de pensamento",
  },
};
export function WidGetForm() {
  return (
    <div className="relative bg-zinc-800 rounded-2xl w-[calc(100vw-2rem)] md:w-auto py-2 flex flex-col items-center">
      <header className="bg-green-500 flex items-around">
        <span className="text-white ">Deixe seu FeedBack </span>
        <Popover.Button
          className="text-zinc-500 hover:text-zinc-100 absolute top-3 right-3"
          type="button"
          title="Botão que fecha o painel"
        >
          <X weight="bold" />
        </Popover.Button>
      </header>
      <main>
        {Object.entries(feedBackTypes).map(([key, value]) => {
          console.log(key, value);
          return null;
        })}
      </main>
      <footer className="text-sm text-zinc-400 mt-4">
        Feito com ♥ por{" "}
        <a className="underline underline-offset-2" href="#">
          Marco Antonio
        </a>
      </footer>
    </div>
  );
}
