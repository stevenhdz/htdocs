export function AuthTemplate({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(1000px 400px at 10% 10%, #e5e7eb, transparent 60%), radial-gradient(1000px 400px at 90% 90%, #e5e7eb, transparent 60%), #f7f7f7"
      }}
    >
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
      </div>
    </div>
  );
}
