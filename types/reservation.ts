export type ReservationForm = {
  guests: number;
  date: string;
  time: string;
  name: string;
  phone: string;
  email?: string;
  specialRequest?: string;
};