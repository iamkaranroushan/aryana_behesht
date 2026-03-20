type Props = {
  onClose: () => void;
};

export default function SuccessStep({ onClose }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-[clamp(1rem,5vw,2rem)] mb-4">Reservation Confirmed</h2>
      <p className="text-stone-400 mb-6">
        We’ll contact you shortly to confirm your table.
      </p>

      <p className="text-stone-500 text-[clamp(0.5rem,5vw,0.7rem)] ">
        or you can call us on +19028357777
      </p>
    </div>
  );
}