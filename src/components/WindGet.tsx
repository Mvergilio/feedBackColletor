import { ChatTeardropDots } from "phosphor-react";
import React from "react";

export function WindGet() {
  return (
    <div className=" absolute bottom-5 right-5  ">
      <button className="flex items-center h-12 px-3  max-w-0 hover:max-w-xl bg-brand-500 rounded-full group">
        <ChatTeardropDots size={24} color="white" weight="regular" />
        <span className="pr-2"></span>
        <span className="text-white font-sans text-base overflow-hidden">
          FeedBack
        </span>
      </button>
    </div>
  );
}
