export default function Stats({ counItems, percentage }) {
  if (!counItems)
    return (
      <p className="footer stats">
        <em>start adding your list</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        you have {counItems} items on your list and you completed {percentage}%
        of them
      </em>
    </footer>
  );
}
