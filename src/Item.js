export default function Item({ item, handlDelete, handlePacked }) {
  return (
    <li
      style={
        item.packed
          ? {
              textDecoration: "line-through",
            }
          : {}
      }
    >
      {" "}
      <input
        type="checkbox"
        value={item.packed}
        onChange={(a) => {
          handlePacked(item.id);
        }}
      />
      <span>{item.select}</span>
      <span>{item.description}</span>
      <button
        onClick={() => {
          handlDelete(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
