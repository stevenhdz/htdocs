import { AuthTemplate } from "../components/templates/AuthTemplate";
import { LoginSection } from "../components/organisms/LoginSection";

export function LoginPage() {
  return (
    <AuthTemplate>
      <LoginSection />
    </AuthTemplate>
  );
}
