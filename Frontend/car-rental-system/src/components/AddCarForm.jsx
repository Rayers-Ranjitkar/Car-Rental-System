import { useState } from "react"; /* bahira bata import gareko so inside {} the usestate*/
import { useNavigate } from "react-router-dom";

export default function AddCardForm({ onAdd }) {
  const [model, setModel] = useState(""); /* Multiple state variable is used, can make an array and do as well haita */
  const [type, setType] = useState("");
  const [rate, setRate] = useState("");
  const [available, setAvailable] = useState(true);
  const [image, setImage] = useState(""); // if empty, app.jsx has fallback

  const navigate = useNavigate(); 

  /* Function addCar */

  function handleSubmit(e) {
    e.preventDefault();

    const newCar = {
      model,
      type,
      rate: Number(rate),
      available,
      image, // could be empty string if user skips it, App.jsx will fallback to default image
    };

    onAdd(newCar);

    // Clearing form after submit
    setModel("");
    setType("");
    setRate("");
    setAvailable(true);
    setImage("");

    navigate("/"); // car add vaisakepachi seedhai grid ma feri lagna ko lagi
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-4 max-w-md mx-auto mt-10"
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

      <input
        type="text"
        placeholder="Image URL (optional, paste from google images)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
        Available
      </label>

      <div className="flex justify-between gap-3">
        <button
          type="submit"
          className="bg-[#288de1] text-white px-4 py-2 rounded hover:bg-[#1c6fb8]"
        >
          Add Car
        </button>

        {/* Cancel button -> discards the form and sends you back to the grid */}
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}