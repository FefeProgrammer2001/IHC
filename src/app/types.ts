export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  address: string;
  price: number;
  image: string;
  genre: string;
  capacity: number;
  highlights: string[];
}

export interface Reservation {
  id: string;
  eventId: string;
  name: string;
  phone: string;
  guests: number;
  tableNumber?: string;
  paymentMethod: "entrada" | "online";
  createdAt: Date;
}
