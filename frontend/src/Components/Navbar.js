import {Navbar, NavItem, Nav} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MailIcon from '../Assets/Icons/mail.svg'
import MessageIcon from '../Assets/Icons/message-square.svg'
import Reporting from '../Assets/Icons/trello.svg'

function BasicExample() {
    return (
      <Navbar style={{backgroundColor:"#white", borderStyle:"solid", borderWidth:"2px", borderImage:"linear-gradient"}} bg="white" expand="lg">        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column" bsStyle="pills" stacked activeKey={1}>
              <NavItem eventKey={1} href="/home">
                <img className="NavbarIconStyling" src={MailIcon} alt="Mail Icon" />
              </NavItem>
              <NavItem eventKey={2} title="Item">
                <img className="NavbarIconStyling"  src={MessageIcon} alt="Message Icon" />
              </NavItem>
              <NavItem eventKey={3} disabled>
                <img className="NavbarIconStyling"  src={Reporting} alt="Message Icon" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>      
      </Navbar>
    );
  }
  
  export default BasicExample;