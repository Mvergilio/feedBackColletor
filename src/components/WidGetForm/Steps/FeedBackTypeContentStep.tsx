import { Popover } from "@headlessui/react";
import { ArrowLeft, X } from "phosphor-react";
import { FeedBackType, feedBackTypes, isScreenShotTakenType } from "../Index";
import { ScreenShotButton } from "../ScreenShotButton";
import { MouseEvent } from "react";
interface FeedBackTypeContentStep {
  onFeedBackTypeRestartRequested: () => void;
  onScreenShotTakenRequested: (image: string | null) => void;
  feedbackType: FeedBackType;
  isScreenShotTaken: string | null;
  onFeedBackSendRequested: (event: MouseEvent) => void;
}
export function FeedBackTypeContentStep({
  onFeedBackTypeRestartRequested,
  onScreenShotTakenRequested,
  feedbackType,
  isScreenShotTaken,
  onFeedBackSendRequested,
}: FeedBackTypeContentStep) {
  return (
    <>
      <header className="w-[100%] flex justify-center relative items-center">
        <button
          className="absolute left-2 top-1 text-zinc-500 hover:text-zinc-100"
          onClick={onFeedBackTypeRestartRequested}
          title="Botão que volta a tela inicial"
          type="button"
        >
          <ArrowLeft size={24} />
        </button>
        <span className="text-white text-xl leading-6 flex flex-1 items-center justify-center">
          <img
            className="w-6 h-6 mr-1"
            src={feedBackTypes[feedbackType].image.src}
            alt={feedBackTypes[feedbackType].image.alt}
          />
          <span>{feedBackTypes[feedbackType].title}</span>
        </span>

        <Popover.Button
          className="text-zinc-500 hover:text-zinc-100 absolute top-1 right-2"
          type="button"
          title="Botão que fecha o painel"
        >
          <X size={24} weight="bold" />
        </Popover.Button>
      </header>

      <div className="p-2 my-2 flex gap-2 flex-1">
        <form action="#" className="my-4 w-full">
          <textarea
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-zinc-500 focus:ring-brand-500 focus:ring-1 resize-none outline-none scrollbar scrollbar-track-transparent scrollbar-thumb-zinc-700"
            name="FeedBackContent"
            placeholder="Conte com detalhes o que está acontecendo..."
          />
          <footer className="flex mt-2 gap-2">
            <ScreenShotButton
              onScreenShotTakenRequested={onScreenShotTakenRequested}
              isScreenShotTaken={isScreenShotTaken}
            />

            <button
              onClick={(event) => onFeedBackSendRequested(event)}
              className="p-2 bg-brand-500 flex-1 rounded-md text-white border-transparent flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
              type="submit"
            >
              Enviar FeedBack
            </button>
          </footer>
        </form>
      </div>
    </>
  );
}
