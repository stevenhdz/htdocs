import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export function LoginForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Input placeholder="Correo electronico" />
      <Input type="password" placeholder="Contrasena" />
      <Button>Ingresar</Button>
    </form>
  );
}
