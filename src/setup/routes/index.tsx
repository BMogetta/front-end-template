import { Navigate, Route, Routes } from 'react-router-dom';

import About from '#pages/about';
import Home from '#pages/home';
import PrivacyPolicy from '#pages/privacyPolicy';
import Team from '#pages/team';
import TermsConditions from '#pages/termsConditions';
import Layout from '#setup/layout/base';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/terms_conditions" element={<TermsConditions />} />
      <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
