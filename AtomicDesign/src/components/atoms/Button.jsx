export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: "10px 16px",
        background: "#111",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
