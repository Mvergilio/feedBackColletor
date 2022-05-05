import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import React from "react";

const feedBackTypes = {
  BUG: {
    title: "Problema",
    folderUrl: "./src/assets/bug.svg",
    altText: "image de uma largata roxa olhando para frente",
  },
  IDEA: {
    title: "Ideia",
    folderUrl: "./src/assets/idea.svg",
    altText: "Imagen de uma lampada acesa representando uma idea",
  },
  THOUGHT: {
    title: "Outros",
    folderUrl: "./src/assets/thought.svg",
    altText: "Imagem de uma nuvem de pensamento",
  },
};
export function WidGetForm() {
  return (
    <div className="relative bg-zinc-800 rounded-2xl w-[calc(100vw-2rem)] md:w-auto py-2 flex flex-col items-center">
      <header className="flex items-around">
        <span className="text-white ">Deixe seu FeedBack </span>
        <Popover.Button
          className="text-zinc-500 hover:text-zinc-100 absolute top-3 right-3"
          type="button"
          title="Botão que fecha o painel"
        >
          <X weight="bold" />
        </Popover.Button>
      </header>
      <main className="p-2 my-8 flex gap-2">
        {Object.entries(feedBackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-[#3f3f46] outline-none border-solid border-2 border-transparent focus:border-violet-500 hover:border-violet-500 rounded-lg px-2 py-5 w-24 h-28 flex flex-col items-center gap-2"
              key={key}
            >
              <img
                className="w-10 h-10"
                src={value.folderUrl}
                alt={value.altText}
              />
              <p className="text-white font-bold">{value.title}</p>
            </button>
          );
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
