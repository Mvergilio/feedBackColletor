import React, { useState, MouseEvent, ChangeEvent } from "react";

import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

// image imports
import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import troughtImage from "../../assets/thought.svg";

// components imports
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackTypeContentStep } from "./Steps/FeedBackTypeContentStep";
import { FeedBackTypeSuccessStep } from "./Steps/FeedBackTypeSuccessStep";
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
export interface FeedBackContentBodyType {
  feedBackTypeTitle: FeedBackType | null;
  screenShotimageDataUrl: string | null;
  feedBackContent: string | null;
}

export function WidGetForm() {
  const [feedBackContentBody, setFeedBackContentBody] =
    useState<FeedBackContentBodyType>({
      feedBackTypeTitle: null,
      screenShotimageDataUrl: null,
      feedBackContent: null,
    });
  const [isFeedBackSend, setIsFeedBackSend] = useState(false);

  function handleFeedBackRestart() {
    setFeedBackContentBody({
      feedBackTypeTitle: null,
      screenShotimageDataUrl: null,
      feedBackContent: null,
    });
    setIsFeedBackSend(false);
  }
  function onScreenShotTakenRequested(imageContent: string | null): void {
    setFeedBackContentBody((prevFeedBackContentBody) => ({
      ...prevFeedBackContentBody,
      screenShotimageDataUrl: imageContent,
    }));
  }
  function onFeedBackSendRequested(event: MouseEvent) {
    event.preventDefault();
    setIsFeedBackSend(true);
  }
  function onTextAreContentChanged(event: any) {
    setFeedBackContentBody((prevFeedBackContentBody) => ({
      ...prevFeedBackContentBody,
      feedBackContent: event.target.value,
    }));
  }
  function onFeedBackTypeChanged(type: FeedBackType): void {
    setFeedBackContentBody((prevFeedBackContentBody) => ({
      ...prevFeedBackContentBody,
      feedBackTypeTitle: type,
    }));
  }
  console.log(feedBackContentBody);
  return (
    <div className="relative bg-zinc-800 rounded-2xl w-[calc(100vw-2rem)] md:w-auto py-2 flex flex-col items-center">
      {isFeedBackSend ? (
        <FeedBackTypeSuccessStep
          onSendAnotherFeedBackRequested={handleFeedBackRestart}
        />
      ) : !feedBackContentBody.feedBackTypeTitle ? (
        <FeedbackTypeStep onFeedBackTypeChanged={onFeedBackTypeChanged} />
      ) : (
        <FeedBackTypeContentStep
          onTextAreContentChanged={onTextAreContentChanged}
          onFeedBackSendRequested={onFeedBackSendRequested}
          onScreenShotTakenRequested={onScreenShotTakenRequested}
          feedBackContentBody={feedBackContentBody}
          onFeedBackTypeRestartRequested={handleFeedBackRestart}
        />
      )}

      <footer className="text-sm text-zinc-400 mt-auto">
        Feito com ♥ por{" "}
        <a className="underline underline-offset-2" href="#">
          Marco Antonio
        </a>
      </footer>
    </div>
  );
}
