import React, { useState } from "react";

import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

// image imports
import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import troughtImage from "../../assets/thought.svg";

// components imports
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackTypeContentStep } from "./Steps/FeedBackTypeContentStep";
export const feedBackTypes = {
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
  function handleFeedBackRestart() {
    setFeedBackType(null);
  }
  return (
    <div className="relative bg-zinc-800 rounded-2xl w-[calc(100vw-2rem)] md:w-auto py-2 flex flex-col items-center">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedBackType} />
      ) : (
        <FeedBackTypeContentStep
          onFeedBackTypeRestartRequested={handleFeedBackRestart}
          feedbackType={feedbackType}
        />
      )}

      <footer className="text-sm text-zinc-400 mt-4">
        Feito com ♥ por{" "}
        <a className="underline underline-offset-2" href="#">
          Marco Antonio
        </a>
      </footer>
    </div>
  );
}
