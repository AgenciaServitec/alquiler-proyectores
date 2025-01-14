import { useState } from "react";

const ContactFormComponent = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e) {
    try {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.ok) {
        setResponseMessage(data.message);
        return;
      }

      window.location.href = "/success";

      setLoading(false);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} noValidate className="w-full flex flex-col gap-4">
      <div className="h-12 p-0.5 rounded-xl bg-gradient-to-r from-violet-950 via-zinc-700 to-yellow-900">
        <input
          className="w-full h-full rounded-xl px-2 bg-secondary text-white"
          type="text"
          name="fullName"
          autoComplete="fullName"
          placeholder="Escriba su nombre"
        />
      </div>

      <div className="h-12 p-0.5 rounded-xl bg-gradient-to-r from-violet-950 via-zinc-700 to-yellow-900">
        <input
          className="w-full h-full rounded-xl px-2 bg-secondary text-white"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Escriba su email"
        />
      </div>

      <div className="h-12 p-0.5 rounded-xl bg-gradient-to-r from-violet-950 via-zinc-700 to-yellow-900">
        <input
          className="w-full h-full rounded-xl px-2 bg-secondary text-white"
          type="number"
          name="phoneNumber"
          autoComplete="phoneNumber"
          placeholder="Escriba su N° de teléfono"
        />
      </div>

      <div className="h-40 p-0.5 rounded-xl bg-gradient-to-r from-violet-950 via-zinc-700 to-yellow-900">
        <textarea
          className="w-full h-full rounded-xl p-2 bg-secondary resize-none text-white"
          name="message"
          autoComplete="off"
          placeholder="Mensaje"
        />
      </div>
      <button
        className={`${loading ? "disabled" : ""} h-12 rounded-xl ${loading ? "pointer-events-none" : "pointer-events-auto"} ${loading ? "bg-gray-400" : "bg-primary hover:bg-amber-400 transition duration-300"} text-xl font-semibold type="submit`}
        disabled={loading}
      >
        ENVIAR
      </button>
      {responseMessage && (
        <p className="text-red-600 text-sm">{responseMessage}</p>
      )}
    </form>
  );
};

export default ContactFormComponent;
