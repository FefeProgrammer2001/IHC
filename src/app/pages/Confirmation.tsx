import { useLocation, useNavigate, Link } from "react-router";
import { CheckCircle, Calendar, Clock, MapPin, Users, DollarSign } from "lucide-react";
import { mockEvents } from "../data/mockData";
import { useParams } from "react-router";

export function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === id);

  const reservationData = location.state || {};

  if (!reservationData.name || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dados não encontrados
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

  const totalGuests = parseInt(reservationData.guests || "1");
  const totalPrice = (reservationData.price || 0) * totalGuests;
  const reservationNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-green-500 rounded-full mb-6">
            <CheckCircle size={64} className="text-white" strokeWidth={3} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Reserva Confirmada!
          </h1>
          <p className="text-2xl text-gray-600">
            Sua mesa foi reservada com sucesso
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6 border-4 border-green-200">
          <div className="text-center mb-6 pb-6 border-b-4 border-gray-100">
            <p className="text-2xl text-gray-600 mb-2">Número da Reserva</p>
            <p className="text-5xl font-bold text-purple-600">
              #{reservationNumber}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Detalhes da Reserva
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
              <Calendar size={36} className="text-purple-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <p className="text-xl text-gray-600 mb-1">Evento</p>
                <p className="text-2xl text-gray-900 font-bold">
                  {reservationData.eventTitle}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
              <Clock size={36} className="text-purple-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div>
                <p className="text-xl text-gray-600 mb-1">Data e Hora</p>
                <p className="text-2xl text-gray-900 font-bold">
                  {new Date(reservationData.eventDate).toLocaleDateString("pt-BR")} às {reservationData.eventTime}
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
                <p className="text-xl text-gray-600 mb-1">Reservado para</p>
                <p className="text-2xl text-gray-900 font-bold">
                  {reservationData.name}
                </p>
                <p className="text-xl text-gray-700">
                  {reservationData.phone}
                </p>
                <p className="text-xl text-gray-700">
                  {totalGuests} {totalGuests === 1 ? "pessoa" : "pessoas"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl border-4 border-green-200">
              <DollarSign size={36} className="text-green-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
              <div className="flex-1">
                <p className="text-xl text-gray-600 mb-1">Forma de Pagamento</p>
                <p className="text-2xl text-gray-900 font-bold mb-2">
                  Pagamento na Entrada
                </p>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl text-gray-700">Valor a pagar:</span>
                  <span className="text-4xl font-bold text-green-600">
                    R$ {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-4 border-blue-200 rounded-3xl p-6 mb-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ⚠️ Importante
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-2xl text-gray-700">
              <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span>Chegue com 15 minutos de antecedência</span>
            </li>
            <li className="flex items-start gap-3 text-2xl text-gray-700">
              <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span>Apresente o número da reserva na entrada</span>
            </li>
            <li className="flex items-start gap-3 text-2xl text-gray-700">
              <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span>Traga um documento com foto</span>
            </li>
            <li className="flex items-start gap-3 text-2xl text-gray-700">
              <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span>O pagamento será feito no local</span>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-7 px-6 rounded-3xl text-3xl font-bold text-center shadow-2xl transition-all active:scale-98 mb-4"
        >
          Ver Outros Eventos
        </Link>

        <button
          onClick={() => window.print()}
          className="block w-full bg-white hover:bg-gray-50 text-gray-700 py-6 px-6 rounded-3xl text-2xl font-semibold text-center border-4 border-gray-200 transition-all active:scale-98"
        >
          Imprimir Confirmação
        </button>
      </div>
    </div>
  );
}
