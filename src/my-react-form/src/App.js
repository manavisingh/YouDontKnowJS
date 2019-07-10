import React from 'react';
import './css/main.css';
import './css/util.css';
import { BrowserRouter, Route} from 'react-router-dom'
import VerifyUser from './Component'
import LoginForm from './Login'
import ModalSignIn from './ModalSignIn'
import ForgotPassword from './ForgotPassword'
import SAF from './SAF'
import ResetPassword from './ResetPassword'
import ResetPwdLinkSent from './ResetPasswordLinkSent'

const Layout = () => (
  <div>
    <Route path="/register/verify" sensitive={true} exact component={VerifyUser} />
    <Route path="/" exact sensitive={true} component={LoginForm} />
    <Route path="/login" exact sensitive={true} component={ModalSignIn} />
    <Route path="/forgotpassword" exact sensitive={true} component={ForgotPassword} />
    <Route path="/saf" exact sensitive={true} component={SAF} />
    <Route path="/resetPassword" exact sensitive={true} component={ResetPassword} />
    <Route path="/resetPwdLinkSent" exact sensitive={true} component={ResetPwdLinkSent} />
  </div>
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
