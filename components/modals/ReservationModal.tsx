import { useModalStore } from "@/feature/store/useModalStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import GuestsStep from "../Reservation/GuestsStep";
import DateTimeStep from "../Reservation/ateTimeStep";
import ContactStep from "../Reservation/ContactStep";
import SpecialRequestStep from "../Reservation/SpecialRequestStep";
import SuccessStep from "../Reservation/SuccessStep";

export default function ReservationModal() {
  const { closeModal } = useModalStore();

  const [step, setStep] = useState(1);

  const [form, setForm] = useState<ReservationForm>({
    guests: 2,
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    specialRequest: "",
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  type ReservationForm = {
    guests: number;
    date: string;
    time: string;
    name: string;
    phone: string;
    email?: string;
    specialRequest: string;
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[95vw] max-w-2xl max-h-[80vh]  bg-stone-800 text-white rounded-xl p-8"      >
        {/* CLOSE */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-stone-400 hover:text-white"
        >
          <FiX size={22} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            {/* STEP 1 */}
            {step === 1 && (
              <GuestsStep
                guests={form.guests}
                setGuests={(g) => setForm({ ...form, guests: g })}
                onNext={next}
              />
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <DateTimeStep
                date={form.date}
                time={form.time}
                setDate={(date) => setForm({ ...form, date })}
                setTime={(time) => setForm({ ...form, time })}
                onNext={next}
                onBack={back}
              />
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <ContactStep
                form={form}
                setForm={setForm}
                onNext={next}
                onBack={back}
              />
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <SpecialRequestStep
                value={form.specialRequest}
                setValue={(v) => setForm({ ...form, specialRequest: v })}
                onNext={next}
                onBack={back}
              />
            )}

            {/* STEP 5 */}
            {step === 5 && <SuccessStep onClose={closeModal} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}