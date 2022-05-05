import React, { useState } from "react";

import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

// image imports
import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import troughtImage from "../../assets/thought.svg";
import { FeedBackTypeContentStep } from "./Steps/FeedBackTypeContentStep";
const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImage,
      alt: "Imagem de uma inseto representando problema",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImage,
      alt: "Imagem de uma lampada representando image ideia",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      src: troughtImage,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedBackType = keyof typeof feedBackTypes;
export function WidGetForm() {
  const [feedbackType, setFeedBackType] = useState<FeedBackType | null>(null);

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
      <FeedBackTypeContentStep feedBackTypes={feedBackTypes} />

      <footer className="text-sm text-zinc-400 mt-4">
        Feito com ♥ por{" "}
        <a className="underline underline-offset-2" href="#">
          Marco Antonio
        </a>
      </footer>
    </div>
  );
}
