import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="header">Home Page with links</p>

        <div className="body">
          <Link to="/">Home</Link>
          <hr></hr>
          <Link to="/about">About</Link>
          <hr></hr>
          <Link to="/team">Team</Link>
          <hr></hr>
          <Link to="/terms_conditions">Terms & Conditions</Link>
          <hr></hr>
          <Link to="/privacy_policy">Privacy Policy</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
