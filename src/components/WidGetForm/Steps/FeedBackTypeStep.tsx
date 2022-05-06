import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import { FeedBackType, feedBackTypes } from "../Index";
interface FeedbackTypeStepProps {
  onFeedBackTypeChanged: (type: FeedBackType) => void;
}
export function FeedbackTypeStep({
  onFeedBackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header className="flex items-center">
        <span className="text-white  text-xl leading-5">
          Deixe seu FeedBack{" "}
        </span>
        <Popover.Button
          className="text-zinc-500 hover:text-zinc-100 absolute top-2 right-2"
          type="button"
          title="Botão que fecha o painel"
        >
          <X size={24} weight="bold" />
        </Popover.Button>
      </header>

      <div className="p-2 my-8 flex gap-2 flex-1">
        {Object.entries(feedBackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-[#3f3f46] outline-none border-solid border-2 border-transparent focus:border-violet-500 hover:border-violet-500 rounded-lg px-2 py-5 w-24 h-28 flex flex-col items-center gap-2"
              type="button"
              onClick={() => onFeedBackTypeChanged(key as FeedBackType)}
            >
              <img
                className="w-10 h-10"
                src={value.image.src}
                alt={value.image.alt}
              />
              <span className="text-white font-bold">{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
