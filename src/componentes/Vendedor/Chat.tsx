"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatVendedor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "vendedor", text: "Oi, tudo bem?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "cliente", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "vendedor", text: "Já te respondo 😄" },
      ]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border-2 border-pink-600 text-pink-600 px-5 py-2 rounded-full flex items-center justify-center hover:bg-pink-50 transition"
      >
        <MessageCircle size={16} className="mr-2" />
        Chat com o vendedor
      </button>

      {open && (
        <div className="fixed bottom-5 right-5 bg-white rounded-2xl shadow-xl w-80 overflow-hidden border border-gray-200">
          <div className="bg-pink-600 text-white p-3 flex justify-between items-center">
            <span>Vendedor Online</span>
            <X
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-gray-200"
            />
          </div>
          <div className="h-60 overflow-y-auto p-3 flex flex-col gap-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl ${
                  msg.from === "cliente"
                    ? "bg-pink-100 self-end"
                    : "bg-gray-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 flex border-t border-gray-200">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 p-2 rounded-lg border border-gray-300 text-sm"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-3 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
