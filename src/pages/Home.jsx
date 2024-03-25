import { useNavigate, Link } from "react-router-dom"
import about from '../assets/about.png'
import contact from '../assets/contact.jpg'
import service from '../assets/service.jpeg'
import logo from '../assets/Gate2.png'
import gb_img from '../assets/gb_img.webp'

function Home(props) {

  const nav = useNavigate()

  return <div className="home">
    <header>
      <nav>
        <div class="containers">
          <img src={logo} alt="logo" />
            <div class="brand">
              <h1><span>G</span>ate<span>B</span>lueprint</h1>
            </div>
            <div class="menu">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div class="login">
              <Link to="/login">Login</Link>
            </div>
        </div>
      </nav>
    </header>
    <div class="main">
      <div class="content">
        <h1>Crush the GATE Exam: <br />
          Your Complete Prep <br />
            Starts Here
          </h1><br />
            <p><b>Empathizes with the user's pain point.</b>('Striggling with GATE prep?')
              <br /><b>Showcases your solution.</b>('We've got you covered. Master all subjects, personalize your study study plan, and join a supportive community.')
                <br /><b>Highlights the benefit.</b>('Ace your GATE exam confidence')
                </p>
                <button type="button" onClick={() => nav('/register')}>Start Today ➡️</button>

              </div>
              <div class="image"><img src={gb_img} alt="web image" /></div>
            </div>
            <div class="sections">
              <section id="about">
                <div class="container">
                  <img src={about} alt="about" /><br />
                    <h2>About US</h2>
                    <p>At "Empower Your GATE Success," we're dedicated to facilitating your journey towards conquering the GATE exam. Our platform is founded on a commitment to providing comprehensive resources and guidance to students aspiring for success. Backed by a team of experienced educators and industry professionals, we strive to empower every student with the knowledge and skills needed to excel in their exam preparation. With a focus on excellence and innovation, we aim to be your trusted partner in achieving your GATE goals.</p>
                  </div>
                  </section>

                  <section id="services">
                    <div class="container">
                      <img src={service} alt="service" /><br />
                        <h2>Our Services</h2>
                        <p>We offer a wide array of services tailored to meet the diverse needs of GATE aspirants. From meticulously crafted study materials and practice tests to interactive online courses and personalized mentoring, we ensure that every aspect of your exam preparation is covered. Our platform fosters a supportive learning environment where students can engage with peers, clarify doubts, and track their progress effectively. With our comprehensive resources and dedicated support, we're committed to maximizing your potential and guiding you towards GATE success.</p>
                      </div>
                      </section>

                      <section id="contact">
                        <div class="container">
                          <img src={contact} alt="contact" /><br />
                            <h2>Contact Us</h2>
                            <p>Have questions or need assistance? Don't hesitate to reach out! Our team is here to help you with any inquiries or concerns you may have. Feel free to contact us through the information provided below or use the convenient contact form to send us a message directly. We value your feedback and are committed to providing you with the assistance you need to excel in your GATE preparation journey.
                              Mail:<a href="#">becse417511@example.com</a>
                            </p>
                          </div>
                          </section>
                        </div>
                        <footer>
                          <div class="footer-content">
                            <div class="footer-section contact-info">
                              <h3>Contact Us</h3>
                              <p>Email: contact@example.com</p>
                              <p>Phone: +1234567890</p>
                              <p>Address: 123 Street, City, Country</p>
                            </div>
                            <div class="footer-section site-info">
                              <h3>Website Information</h3>
                              <p>&copy; 2024 Gate Blueprint.com All rights reserved.</p>
                              <p>BE-CSE 3rd year</p>
                            </div>
                          </div>
                        </footer>
                      </div>
}

export default Home