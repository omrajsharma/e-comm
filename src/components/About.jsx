import React from 'react'
import { Container } from 'react-bootstrap'
import './About.css'

function About() {
  return (
    <div>
      <Container>
        <div className='about'>
          <div className="about-header"></div>

          <div className="about-content">
            <h1>About Us</h1>
            <div>
              <p>
                We are a team of passionate individuals who are dedicated to providing our customers with high-quality products and excellent customer service. Our mission is to make it easy for you to find and purchase the products you need, all in one convenient location.
              </p>

              <p>
                We have been in business for many years and have built a reputation for providing a wide selection of products at competitive prices. We are committed to continuously expanding our product offerings and staying up-to-date with the latest trends.
              </p>

              <p>
                Our team is made up of experts in their respective fields, who are committed to providing you with the best shopping experience possible. We pride ourselves on our friendly and knowledgeable customer service and are always happy to answer any questions you may have.

              </p>

              <p>
              We are also committed to giving back to our community. We are actively involved in charitable giving and sustainability initiatives, and are always looking for ways to reduce our impact on the environment.

              </p>

              <p>
              We value our customers and appreciate their feedback. We encourage you to check out our customer testimonials to see what others have to say about our products and service.

              </p>

              <p>
              Thank you for choosing our e-commerce website for your shopping needs. We look forward to serving you!

              </p>

              <p>
              Please feel free to contact us with any questions or feedback you may have. You can reach us at:

              </p>

              <div>
                <p>Email: info@your-store.com</p>
                <p>Phone: +1-555-555-5555</p>
                <p>Address: 1234 Example Street, Example City, Example State, 12345</p>
                <p>Thank you for choosing our e-commerce website!</p>
              </div>
            </div>
          </div>

          <div className='about-bottom'>
            <img src="https://images.bewakoof.com/uploads/grid/app/big-clearance-zone-COMMON-ENDS-TODAY-1674926712.jpg" alt="" />
            <img src="https://images.bewakoof.com/uploads/grid/app/anime-1x1-02-1674817620.jpg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About