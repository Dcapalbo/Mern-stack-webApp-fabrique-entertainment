// importing the react router dom version 6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// importing the react traductions functions
import { initReactI18next } from "react-i18next";
import { translationIt } from "./utils/i18It";
import { translationEn } from "./utils/i18En";
import i18n from "i18next";
// scss files
import "./assets/typography.scss";
import "./assets/reset.scss";
// pages
import Home from "./pages/Home";
import Film from "./pages/Film";
import About from "./pages/About";
import Films from "./pages/Films";
import NewFilm from "./pages/NewFilm";
import AllFilms from "./pages/AllFilms";
import { isAuth } from "./utils/isAuth";
import LoginForm from "./pages/LoginForm";
import UpdateFilm from "./pages/UpdateFilm";
import AuthSignUp from "./pages/AuthSignUp";
import NewContact from "./pages/NewContact";
import AllContacts from "./pages/AllContacts";
import AboutContact from "./pages/AboutContact";
import UpdateContact from "./pages/UpdateContact";
import ResetPasswordForm from "./pages/ResetPassword";
import ForgotPasswordForm from "./pages/ForgotPassword";

// initialize the react traductions
i18n.use(initReactI18next).init({
  resources: {
    it: { translation: translationIt },
    en: { translation: translationEn },
  },
  lng: "it",
  fallbackLng: "it",
  interpolation: { escapeValue: false },
});

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {});

  useEffect(() => {
    setIsAuthenticated(isAuth("token"));
  }, []);

  return (
    <Router>
      <Routes>
        {/* not authenticated Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/films" element={<Films />} />
        <Route path="/film/:id" element={<Film />} />
        <Route path="/about/:id" element={<AboutContact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/sign-up" element={<AuthSignUp />} />
        {/* authenticated Routes  */}

        {isAuthenticated && (
          <Route path="/admin/films" element={<AllFilms />} />
        )}
        {isAuthenticated && (
          <Route path="/admin/contacts" element={<AllContacts />} />
        )}
        {isAuthenticated && (
          <Route path="/admin/films/add-new-film" element={<NewFilm />} />
        )}
        {isAuthenticated && (
          <Route path="/admin/films/update-film" element={<UpdateFilm />} />
        )}
        {isAuthenticated && (
          <Route
            path="/admin/contacts/add-new-contact"
            element={<NewContact />}
          />
        )}
        {isAuthenticated && (
          <Route
            path="/admin/contacts/update-contact"
            element={<UpdateContact />}
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;