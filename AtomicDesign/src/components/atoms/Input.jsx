export function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        width: "100%"
      }}
    />
  );
}
