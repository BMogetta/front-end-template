import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
      <Link to="/terms_conditions">Terms & Conditions</Link>
      <Link to="/privacy_policy">Privacy Policy</Link>
    </div>
  );
};

export default Header;
