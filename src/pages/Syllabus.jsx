import { signOut } from "firebase/auth"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import CSESyll from "../components/CSESyll"

function Syllabus(props) {

  const { currentUser } = useContext(AuthContext)
  const nav = useNavigate()

  const signout = async (e) => {
    try {
      await signOut(auth)
      console.log('logging out')
      nav('/')
    } catch (error) {
      console.error('error signing out: ', error)
    }
  }

  return currentUser && <div className="syllabus">
    <header>
      <nav class="navbar">
        <div class="navbar-left">
          <div class="menu-toggle" onclick="toggleMenu()">&#9776;</div>
        </div>
        <a href="#" class="navbar-brand"><i><span>G</span>ate <span>B</span>lueprint</i></a>
        <div class="navbar-right">
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Contact</a></li>
            <li><a onClick={signout}>Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <div class="slide-menu" id="slideMenu">
      <div class="menu-content">
        <ul>
          <img src="Gate.png" alt="logo" width="100px" height="100px" />
          <li><a href="User_Dashboard.html">Home</a></li>
          <li><a href="editprofile.html">Profile Information</a></li>
        </ul>
      </div>
    </div>

    <div className="content">
      <div className="hero">
        <div className="cse selected">Computer Science</div>
        <div className="ce">Civil Engineering</div>
        <div className="me">Mechanical Engineering</div>
        <div className="ee">Electrical Engineering</div>
        <div className="physics">Physics</div>
      </div>
      <div className="data">
        <div className="head">
          Syllabus
        </div>
        <CSESyll />
      </div>
    </div>
    <footer>
      <div class="footer-content">
        <div class="footer-section contact-info">
          <h3 id="contact">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div class="footer-section site-info">
          <h3>Website Information</h3>
          <p>&copy; 2024 Gate Blueprint.com</p>
          <p>BE-CSE 3rd year</p>
        </div>
      </div>

    </footer>
  </div>
}

export default Syllabus