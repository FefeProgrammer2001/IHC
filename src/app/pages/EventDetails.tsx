import { useParams, Link, useNavigate } from "react-router";
import { mockEvents } from "../data/mockData";
import { Calendar, MapPin, Users, Clock, DollarSign, Star, ArrowLeft } from "lucide-react";

export function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Evento não encontrado
          </h2>
          <Link
            to="/"
            className="text-2xl text-purple-600 font-semibold underline"
          >
            Voltar para eventos
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl active:scale-95 transition-all"
        >
          <ArrowLeft size={32} className="text-gray-900" strokeWidth={3} />
        </button>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-purple-600 text-white px-6 py-3 rounded-full inline-block mb-3">
            <span className="text-2xl font-bold">{event.genre}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">
            {event.title}
          </h1>
        </div>
      </div>

      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6 border-4 border-purple-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Informações do Evento
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
              <Calendar size={36} className="text-purple-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <p className="text-xl text-gray-600 mb-1">Data</p>
                <p className="text-2xl text-gray-900 font-bold capitalize">
                  {formatDate(event.date)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
              <Clock size={36} className="text-purple-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <p className="text-xl text-gray-600 mb-1">Horário</p>
                <p className="text-2xl text-gray-900 font-bold">
                  {event.time}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
              <MapPin size={36} className="text-purple-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <p className="text-xl text-gray-600 mb-1">Local</p>
                <p className="text-2xl text-gray-900 font-bold">
                  {event.location}
                </p>
                <p className="text-xl text-gray-700">
                  {event.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
              <Users size={36} className="text-purple-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <p className="text-xl text-gray-600 mb-1">Capacidade</p>
                <p className="text-2xl text-gray-900 font-bold">
                  {event.capacity} pessoas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl border-2 border-green-200">
              <DollarSign size={36} className="text-green-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <p className="text-xl text-green-700 mb-1">Valor por pessoa</p>
                <p className="text-4xl text-green-600 font-bold">
                  R$ {event.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6 border-4 border-purple-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Sobre o Evento
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed mb-6">
            {event.description}
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Star size={32} className="text-yellow-500" fill="currentColor" />
            Destaques
          </h3>
          <ul className="space-y-3">
            {event.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-2xl text-gray-700"
              >
                <div className="w-3 h-3 bg-purple-600 rounded-full flex-shrink-0"></div>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/reservation/${event.id}`}
          className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-7 px-6 rounded-3xl text-3xl font-bold text-center shadow-2xl transition-all active:scale-98 mb-4"
        >
          Reservar Mesa
        </Link>

        <button
          onClick={() => navigate(-1)}
          className="block w-full bg-white hover:bg-gray-50 text-gray-700 py-6 px-6 rounded-3xl text-2xl font-semibold text-center border-4 border-gray-200 transition-all active:scale-98"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
