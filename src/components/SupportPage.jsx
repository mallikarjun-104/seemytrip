import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function SupportPage() {
  return (
    <div className="container py-5">
      {/* Support Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Support Center</h1>
        <p className="fs-5 text-muted">We're here to help you. Find answers to your questions or get in touch with us.</p>
      </div>

      <div className="row">
        {/* FAQ Section */}
        <div className="col-lg-6 mb-5">
          <h2 className="fw-bold mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How do I book a trip on See My Trip?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Booking a trip is easy! Just enter your departure and destination details, select your travel dates, and follow the prompts to finalize your booking.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How do I cancel or modify my booking?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  You can cancel or modify your booking by logging into your account and navigating to your bookings section. Make sure to check the cancellation policy for any applicable fees.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What payment methods do you accept?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We accept a variety of payment methods, including credit cards, debit cards, and digital wallets like PayPal. All transactions are secure and encrypted.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Form */}
        <div className="col-lg-6 mb-5">
          <h2 className="fw-bold mb-4">Contact Our Support Team</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Enter your query subject" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Describe your issue or inquiry" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      {/* Contact Information */}
      <div className="row mt-5">
        <div className="col text-center">
          <h2 className="fw-bold mb-4">Need More Help?</h2>
          <p className="fs-5">You can also reach out to us via email or call our 24/7 customer support team.</p>
          <p className="fs-5 mb-1"><strong>Email:</strong> support@seemytrip.com</p>
          <p className="fs-5 mb-0"><strong>Phone:</strong> 9611533511</p>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;