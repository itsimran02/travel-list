import { useState } from "react";

export default function Form({ handleItem }) {
  const [description, SetDescription] = useState("");
  const [select, SetSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItems = { description, select, packed: false, id: Date.now() };

    handleItem(newItems);
    console.log(newItems);
    SetDescription("");
    SetSelect(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What Do You Need For A tree</h3>
      <select
        value={select}
        onChange={(e) => {
          SetSelect(Number(e.target.value));
        }}
      >
        {" "}
        {Array.from({ length: 16 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => {
          SetDescription(e.target.value);
        }}
        type="text"
        placeholder="item...."
        value={description}
      ></input>
      <button>Add</button>
    </form>
  );
}
