export function FeedbackTypeStep() {
  return (
    <div className="p-2 my-8 flex gap-2">
      {Object.entries(feedBackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-[#3f3f46] outline-none border-solid border-2 border-transparent focus:border-violet-500 hover:border-violet-500 rounded-lg px-2 py-5 w-24 h-28 flex flex-col items-center gap-2"
            type="button"
            onClick={() => setFeedBackType(key as FeedBackType)}
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
  );
}
