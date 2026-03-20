type Props = {
  date: string;
  time: string;
  setDate: (value: string) => void;
  setTime: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function DateTimeStep({
    date,
    time,
    setDate,
    setTime,
    onNext,
    onBack,
}: Props) {
    return (
        <div className="text-center">
            <h2 className="text-[clamp(1rem,5vw,2rem)] mb-6">Select date & time</h2>

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className=" text-[clamp(0.5rem,5vw,0.8rem)] mb-4 p-2 bg-stone-700"
            />

            <div className="flex text-[clamp(0.5rem,5vw,0.8rem)] justify-center gap-3 mb-6">
                {["6:00 PM", "7:30 PM", "9:00 PM"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTime(t)}
                        className={`px-3 py-2 rounded ${time === t ? "bg-white text-black" : "bg-stone-700"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="flex justify-between">
                <button onClick={onBack}>Back</button>
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    );
}