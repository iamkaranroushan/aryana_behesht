type Props = {
  guests: number;
  setGuests: (value: number) => void;
  onNext: () => void;
};

export default function GuestsStep({ guests, setGuests, onNext }: Props) {
  return (
    <div className="flex flex-col justify-between h-full max-w-lg mx-auto">
      
      {/* Content */}
      <div className="text-center">
        <h2 className="text-[clamp(1rem,5vw,2rem)] mb-6">How many guests?</h2>

        <div className="flex justify-center gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <button
              key={n}
              onClick={() => setGuests(n)}
              className={`px-4 py-2 rounded transition ${
                guests === n
                  ? "bg-white text-black"
                  : "bg-stone-700 hover:bg-stone-600"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        {/* Empty left (keeps alignment consistent) */}
        <div />

        <button
          onClick={onNext}
          className="  px-6 py-2 rounded hover:opacity-90 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}