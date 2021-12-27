import logo from './logo_sighy.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Navbar bg="myRed" variant="dark">
        <Navbar.Brand>
          <img src={logo} witdh="40px" height="40px" />{' '}
          Sighy Gym
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="Orar">Orar</Nav.Link>
          </Nav>

        </Navbar>
    
    </div>
  );
}

export default App;
