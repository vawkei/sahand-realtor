import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import OffersPage from "./pages/OffersPage";
import SignInPage from "./pages/SignInPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/sign-up"} element={<SignupPage />} />
        <Route path={"/forgot-password"} element={<ForgotPasswordPage />} />
        <Route path={"offers"} element={<OffersPage />} />
        <Route path={"sign-in"} element={<SignInPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
