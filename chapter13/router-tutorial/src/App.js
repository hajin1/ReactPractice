import './App.css';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (

    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/misaeng">미생이 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">길동이 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
