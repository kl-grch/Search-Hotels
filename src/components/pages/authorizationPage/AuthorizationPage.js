import './authorizationPage.scss';
import { Container } from 'react-bootstrap';

import AuthorizationForm from '../../authorizationForm/AuthorizationForm';


function AuthorizationPage() {
    return (
        // <Container>
            <div className="authorization__page">
                <Container>
                    <AuthorizationForm/>
                </Container>
            </div>
        // </Container>
    )
}

export default AuthorizationPage;