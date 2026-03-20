
type Props = {
    value: string;
    setValue: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
};

export default function SpecialRequestStep({ value, setValue, onNext, onBack }: Props) {
    return (
        <div className="text-center">
            <h2 className="text-[clamp(1rem,5vw,2rem)] mb-6">Any special request?</h2>

            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-3 bg-stone-700 mb-6"
                placeholder="Birthday, window seat, etc..."
            />

            <div className="flex justify-between">
                <button onClick={onBack}>Back</button>
                <button onClick={onNext}>Confirm</button>
            </div>
        </div>
    );
}