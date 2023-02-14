import './authorizationPage.scss';
import { Container } from 'react-bootstrap';

import AuthorizationForm from '../../authorizationForm/AuthorizationForm';


function AuthorizationPage() {
    return (
        <Container>
            <div className="authorization__page">
                <AuthorizationForm/>
            </div>
        </Container>
    )
}

export default AuthorizationPage;