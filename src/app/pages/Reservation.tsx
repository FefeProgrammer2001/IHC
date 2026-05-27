import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { mockEvents } from "../data/mockData";
import { ArrowLeft, User, Phone, Users, CreditCard } from "lucide-react";

export function Reservation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = mockEvents.find((e) => e.id === id);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "1",
  });

  if (!event) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Salvar dados da reserva no estado/contexto se necessário
    navigate(`/confirmation/${event.id}`, {
      state: {
        ...formData,
        eventTitle: event.title,
        eventDate: event.date,
        eventTime: event.time,
        price: event.price,
      },
    });
  };

  const totalPrice = event.price * parseInt(formData.guests);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 pt-4 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-white p-4 rounded-2xl shadow-lg active:scale-95 transition-all"
          >
            <ArrowLeft size={32} className="text-gray-900" strokeWidth={3} />
          </button>
          <h1 className="text-5xl font-bold text-gray-900">
            Reservar Mesa
          </h1>
        </div>

        <div className="bg-purple-100 rounded-3xl p-6 mb-6 border-4 border-purple-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {event.title}
          </h2>
          <p className="text-2xl text-gray-700">
            {new Date(event.date).toLocaleDateString("pt-BR")} às {event.time}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-3xl shadow-2xl p-6 border-4 border-purple-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Seus Dados
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-3"
                >
                  <User size={32} className="text-purple-600" strokeWidth={2.5} />
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-5 text-2xl border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-3"
                >
                  <Phone size={32} className="text-purple-600" strokeWidth={2.5} />
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-6 py-5 text-2xl border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-3"
                >
                  <Users size={32} className="text-purple-600" strokeWidth={2.5} />
                  Número de Pessoas
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full px-6 py-5 text-2xl border-4 border-gray-300 rounded-2xl focus:border-purple-500 focus:outline-none bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "pessoa" : "pessoas"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6 border-4 border-purple-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CreditCard size={36} className="text-purple-600" strokeWidth={2.5} />
              Forma de Pagamento
            </h3>

            <div className="bg-green-50 border-4 border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  Pagamento na Entrada
                </p>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Você realizará o pagamento diretamente no local do evento. 
                Aceitamos dinheiro, cartão de débito e crédito.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6 border-4 border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl text-gray-700">
                {formData.guests} {parseInt(formData.guests) === 1 ? "pessoa" : "pessoas"} × R$ {event.price.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t-4 border-gray-100">
              <span className="text-3xl font-bold text-gray-900">Total</span>
              <span className="text-5xl font-bold text-purple-600">
                R$ {totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xl text-gray-600 mt-3 text-center">
              A pagar na entrada
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-7 px-6 rounded-3xl text-3xl font-bold shadow-2xl transition-all active:scale-98"
          >
            Confirmar Reserva
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 py-6 px-6 rounded-3xl text-2xl font-semibold border-4 border-gray-200 transition-all active:scale-98"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}
