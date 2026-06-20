import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const submitForm = async (e) => {
    e.preventDefault();

    await fetch(
      "http://localhost:5000/api/enquiry",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    alert("Submitted Successfully");
  };

  return (
    <form
      onSubmit={submitForm}
      className="p-8 space-y-4"
    >
      <input
        placeholder="Name"
        className="border p-2 w-full"
      />

      <input
        placeholder="Email"
        className="border p-2 w-full"
      />

      <input
        placeholder="Phone"
        className="border p-2 w-full"
      />

      <button
        className="bg-blue-600 text-white px-6 py-2"
      >
        Submit
      </button>
    </form>
  );
}