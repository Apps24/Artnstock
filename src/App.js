import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Join from './pages/register/Join';
import UserDetails from './pages/register/UserDetails';
import Address from './pages/register/Address';
import VerifyEmail from './pages/register/VerifyEmail';
import WelcomeUser from './pages/register/WelcomeUser';
import Login from './pages/login/Login';
import ForgotPassword from './pages/login/ForgotPassword';
import Home from './pages/homepage/Home';
import ResetPassword from './pages/login/ResetPassword';
import ArtHome from './pages/homepage/ArtHome';
import ProdList from './pages/homepage/ProdList';
import FileDesc from './pages/Contributor/FileDesc';
import ArtDetails from './pages/Details/ArtDetails';
import ProdHome from './pages/homepage/ProdHome';
import Termsofservice from './pages/Static/Termsofservice';
import LicenceAgreement from './pages/Static/LicenceAgreement';
import PrivacyPolicy from './pages/Static/PrivacyPolicy';
import CopyrightTrademarkpolicy from './pages/Static/CopyrightTrademarkpolicy';
import TempVerifyPage from './pages/register/TempVerifyPage';
import AadharUplad from './pages/register/AadharUplad';
import Signature from './pages/register/Signature';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Static Pages */}
        <Route path='/static/termsofservice' element={<Termsofservice />} />
        <Route path='/static/licenceagreement' element={<LicenceAgreement />} />
        <Route path='/static/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/static/copyrighttrademark' element={<CopyrightTrademarkpolicy />} />

        {/* Register Pages */}
        <Route path="/join" element={<Join />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/user-address" element={<Address />} />
        <Route path="/user-verifyemail" element={<VerifyEmail />} />
        <Route path="/user-welcomeuser" element={<WelcomeUser />} />
        <Route path="/user-docupload" element={<AadharUplad />} />
        <Route path="/user-signUpload" element={<Signature />} />
        <Route path="/user-verifyuser/:id/:otp" element={<TempVerifyPage />} />

        {/* Login Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Main Pages */}
        <Route path="/productList/:type" element={<ProdList />} />
        <Route path="/art-home" element={<ArtHome />} />
        <Route path="/product-home" element={<ProdHome />} />
        <Route path="/artDetails" element={<ArtDetails />} />

        {/* Contributor Pages */}
        <Route path="/file-description" element={<FileDesc />} />

        {/* Homepage */}
        <Route path="/" element={<Home />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
