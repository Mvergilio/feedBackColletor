import html2canvas from "html2canvas";
import { Camera, ArrowClockwise, Trash } from "phosphor-react";
import { useState } from "react";

interface ScreenShotButtonProps {
  onScreenShotTakenRequested: (image: string | null) => void;
  isScreenShotTaken: string | null;
}
export function ScreenShotButton({
  onScreenShotTakenRequested,
  isScreenShotTaken,
}: ScreenShotButtonProps) {
  const [IstakingScreenShot, setIstakingScreenShot] = useState<boolean>(false);

  async function takingScreenShot() {
    setIstakingScreenShot(true);
    const canvas = await html2canvas(document.querySelector("html")!).then(
      (canvas) => canvas
    );
    const imageUrl = canvas.toDataURL("image/png", 1.0);
    onScreenShotTakenRequested(imageUrl);
    setIstakingScreenShot(false);
  }
  if (!isScreenShotTaken) {
    return (
      <button
        onClick={takingScreenShot}
        type="button"
        className="w-9 p-2 rounded-md bg-zinc-700 border-transparent hover:bg-zinc-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      >
        {IstakingScreenShot ? (
          <ArrowClockwise size={18} color="#f4f4f5" className="animate-spin" />
        ) : (
          <Camera size={18} color="#f4f4f5" />
        )}
      </button>
    );
  } else {
    return (
      <button
        style={{
          backgroundImage: `url(${isScreenShotTaken})`,
        }}
        onClick={() => onScreenShotTakenRequested(null)}
        type="button"
        className="w-9 relative p-2 rounded-md bg-zinc-700 border-transparent hover:bg-zinc-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      >
        <Trash
          weight="bold"
          size={12}
          color="#f4f4f5"
          className="absolute  right-0 bottom-0"
        />
      </button>
    );
  }
}
