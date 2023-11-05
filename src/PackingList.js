import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  handlDelete,
  handlePacked,
  clearList,
}) {
  const [sortBy, SetSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              handlDelete={handlDelete}
              handlePacked={handlePacked}
            />
          );
        })}{" "}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(a) => {
            SetSortBy(a.target.value);
          }}
        >
          <option value="input">sorts by input</option>
          <option value="description">sorts by description</option>
          <option value="packed">sorts by packed status</option>
        </select>
        {item.length ? (
          <button
            onClick={(a) => {
              clearList();
            }}
          >
            Clear List
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
