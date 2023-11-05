import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [item, SetItem] = useState([]);
  function handleItem(items) {
    SetItem((item) => [...item, items]);
  }
  function handlDelete(id) {
    SetItem((item) => item.filter((item) => item.id !== id));
  }
  function clearList(id) {
    const confirm = window.confirm("are you sure you want to delete all items");
    if (confirm) SetItem([]);
  }
  function handlePacked(id) {
    SetItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  const counItems = item.length;
  const packedElemets = item.filter((item) => item.packed);
  const percentage = (packedElemets.length / counItems) * 100;

  return (
    <div className="App">
      <Logo />
      <Form handleItem={handleItem} />
      <PackingList
        item={item}
        handlDelete={handlDelete}
        handlePacked={handlePacked}
        clearList={clearList}
      />
      <Stats counItems={counItems} percentage={percentage} />
    </div>
  );
}
