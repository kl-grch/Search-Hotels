import "./authorizationPage.scss";
import { Container } from "react-bootstrap";

import AuthorizationForm from "../../authorizationForm/AuthorizationForm";

function AuthorizationPage() {
  return (
    <div className="wrapper">
      <Container>
        <div className="authorization__page">
          <AuthorizationForm />
        </div>
      </Container>
    </div>
  );
}

export default AuthorizationPage;
