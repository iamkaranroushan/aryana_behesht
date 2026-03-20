
type ReservationForm = {
  guests: number;
  date: string;
  time: string;
  name: string;
  phone: string;
  email?: string;
  specialRequest: string;
};

type Props = {
  form: ReservationForm;
  setForm: React.Dispatch<React.SetStateAction<ReservationForm>>;
  onNext: () => void;
  onBack: () => void;
};

export default function ContactStep({ form, setForm, onNext, onBack }:Props) {
  return (
    <div className="text-center">
      <h2 className="text-[clamp(1rem,5vw,2rem)] mb-6">Your details</h2>

      <input
        placeholder="Name"
        className="mb-3 p-2 w-full bg-stone-700"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Phone"
        className="mb-3 p-2 w-full bg-stone-700"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        placeholder="Email (optional)"
        className="mb-6 p-2 w-full bg-stone-700"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <div className="flex justify-between">
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}