import { mockEvents } from "../data/mockData";
import { Calendar, MapPin, Music } from "lucide-react";
import { Link } from "react-router";

export function EventList() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-4">
      <div className="mb-8 pt-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Music size={48} className="text-purple-600" strokeWidth={2.5} />
          <h1 className="text-5xl font-bold text-gray-900">
            Eventos Musicais
          </h1>
        </div>
        <p className="text-2xl text-gray-600 text-center">
          Encontre o evento perfeito para você!
        </p>
      </div>

      <div className="space-y-6 pb-6 max-w-2xl mx-auto">
        {mockEvents.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="block bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-purple-100 hover:border-purple-300 transition-all active:scale-98"
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-purple-600 text-white px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">{event.genre}</span>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {event.title}
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <Calendar size={32} className="text-purple-600 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-2xl text-gray-700">
                    {formatDate(event.date)} às {event.time}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={32} className="text-purple-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <div>
                    <p className="text-2xl text-gray-700 font-semibold">
                      {event.location}
                    </p>
                    <p className="text-xl text-gray-600">
                      {event.address}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-5 line-clamp-3">
                {event.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                <div>
                  <p className="text-xl text-gray-600 mb-1">Entrada</p>
                  <p className="text-4xl font-bold text-purple-600">
                    R$ {event.price.toFixed(2)}
                  </p>
                </div>
                <div className="bg-purple-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold">
                  Ver Detalhes
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
