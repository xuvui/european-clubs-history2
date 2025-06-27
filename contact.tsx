import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح (نموذج تجريبي).");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6" dir="rtl">
      <h1 className="text-2xl font-bold text-yellow-400 mb-4">تواصل معنا</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block text-sm mb-1">الاسم</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-md p-2 bg-gray-800 border border-gray-600 text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-md p-2 bg-gray-800 border border-gray-600 text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">الرسالة</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full rounded-md p-2 bg-gray-800 border border-gray-600 text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded"
        >
          إرسال
        </button>
      </form>
    </div>
  );
}