import { MemoryRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import AddNewClient from './component/AddNewClient/AddNewClient';
import ClientDetails from './component/ClientDetails/ClientDetails';
import ClientList from './component/ClientList/ClientList';
import Home from './component/Home/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="client-list" element={<ClientList />} />
            <Route path="add-client" element={<AddNewClient />} />
            <Route path="client-list" element={<ClientDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
      <div className='page-container'>
      <div className="page-header">
          <div><h2>Survivor's Client Application</h2></div>
          <nav className="navigation">
              <Link className="page-link" to="/">
                  <div className="nav-button">
                      <img className="home-button active" src={require("../../assets/icons/home-icon.png")}></img>
                      <img className="home-button inactive" src={require("../../assets/icons/home-blue-icon.png")}></img> Home
                  </div>
              </Link>
          </nav>
      </div>
      <div className="content">
          <Outlet />
      </div>
      </div>
  );
}
