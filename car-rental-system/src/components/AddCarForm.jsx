import { useState } from "react"; /* bahira bata import gareko so inside {} the usestate*/

export default function AddCardForm({ onAdd }) {
  const [model, setModel] = useState(""); /* Multiple state variable is used, can make an array and do as well haita */
  const [type, setType] = useState("");
  const [rate, setRate] = useState("");
  const [available, setAvailable] = useState(true);

  /* Function addCar */

  function handleSubmit(e) {
    e.preventDefault();

    const newCar = {
      model,
      type,
      rate: Number(rate),
      available,
    };

    onAdd(newCar);

    // Clear form after submit
    setModel("");
    setType("");
    setRate("");
    setAvailable(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold">Add New Car</h2>

      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)} //When typing in the input field, aka when it will change during typing it should appear in input field 
        className="border p-2 rounded w-full"
        required
      />

      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded w-full" /* Same class for css properties: sabai tira lekhnu pareko lai we can reduce */
        required
      />

      <input
        type="number"
        placeholder="Rate per day"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
        Available
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Car
      </button>
    </form>
  );
}