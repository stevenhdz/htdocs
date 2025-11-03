import { Title } from "../atoms/Title";
import { LoginForm } from "../molecules/LoginForm";

export function LoginSection() {
  return (
    <section style={{ width: "320px" }}>
      <Title>Iniciar sesión</Title>
      <LoginForm />
    </section>
  );
}
