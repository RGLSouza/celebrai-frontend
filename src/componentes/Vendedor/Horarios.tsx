"use client";
import { useState } from "react";
import { Clock, X } from "lucide-react";

export default function HorariosPopup() {
  const [open, setOpen] = useState(false);

  const horarios = {
    Segunda: "08:00 - 18:00",
    Terça: "08:00 - 18:00",
    Quarta: "08:00 - 18:00",
    Quinta: "08:00 - 18:00",
    Sexta: "08:00 - 17:00",
    Sábado: "09:00 - 13:00",
    Domingo: "Fechado",
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border-2 border-pink-600 text-pink-600 px-5 py-2 rounded-full flex items-center justify-center hover:bg-pink-50 transition"
      >
        <Clock size={16} className="mr-2" />
        Horários Disponiveis
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-pink-600">
              Horários Disponíveis
            </h2>
            <ul className="space-y-2">
              {Object.entries(horarios).map(([dia, hora]) => (
                <li
                  key={dia}
                  className="flex justify-between border-b pb-1 text-sm"
                >
                  <span className="font-medium">{dia}</span>
                  <span>{hora}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
