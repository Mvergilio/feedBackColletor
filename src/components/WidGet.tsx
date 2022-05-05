import React from "react";

import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

import { WidGetForm } from "./WidGetForm/Index";

export function WidGet() {
  return (
    <Popover className="absolute bottom-5 right-5 flex items-end flex-col">
      <Popover.Panel>
        <WidGetForm />
      </Popover.Panel>

      <Popover.Button className="group  flex items-center h-12 px-3  bg-brand-500 rounded-full mt-4">
        <ChatTeardropDots size={24} color="white" weight="regular" />
        <span className="text-white font-sans text-base overflow-hidden max-w-0 group-hover:max-w-sm transition-all duration-500 ease-linear">
          <span className="pr-2"></span>
          FeedBack
        </span>
      </Popover.Button>
    </Popover>
  );
}
