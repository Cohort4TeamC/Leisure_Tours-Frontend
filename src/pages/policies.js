import './policies.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
// import AboutData from '../components/aboutdata';
import { useState } from 'react';
const AboutPage = () => {
  return (
    <>
      
      <div className="nav-comp">
          <NavbarComp />

        </div>
   <div className="policies-page">
        <div className="policies-page-layer">

      <p className="policies-title">Policies</p>
    </div>
    </div>
      <Container className="policies-container">
        <h2 className="terms-conditions">Terms and Conditions</h2>
        <br />
        <h5>Please read the conditions carefully.</h5>
        <br />
        <h6>Booking your Holiday</h6>
        <p>
        Your contract in respect of your holiday is made with Leisure Tour (‘the Company‘), registered in Oman and all bookings are subject to these terms and conditions.

        All communications by the Company in relation to your holiday will be sent to the address stated on the booking form.

        All bookings must be made through an authorised representative of the Company. At the time of booking the Company booking form must be completed and submitted together with a deposit of 50% of the total cost of the booking.

        Receipt of the deposit and booking form by the Company does neither guarantee nor imply confirmation of the booking. No booking shall be confirmed until the Company issues a written notice. The Company reserves the right to refuse a booking without giving any reason and shall in that event return any deposit received.

        Your holiday must be paid in full at least 30 days before the departure date. If payment is not received by the due date, the Company reserves the right to cancel the booking and retain the deposit. The person who signs the booking form guarantees payment of the total amount shown on the booking form in accordance with these conditions. It is the responsibility of the signatory to ensure the Company receives payment in full by the due date. No reminders will be sent.

        If you book within 30 days of your departure date payment must be made in full at the time of booking.

        All special requests, such as dietary requirements, should be noted on the booking form.

        The Company will provide the service as set out and confirmed in writing.
        </p>
        <h6>Price Policy</h6>
        <p>
        The Company is under no obligation to furnish a breakdown of the costs involved in a holiday.

The Company reserves the right to notify you of any increase in price before accepting your booking.

After a Confirmation Invoice has been issued, unless you choose to pay for your holiday in full at the time of booking, the price of your holiday is subject to the possibilities of surcharges in certain limited circumstances. However, a surcharge will only be levied to allow for variations in transportation cost, including cost of fuel, increase in normal published airfares, taxes or fees chargeable for services such as landing taxes at airports, the exchange rate applied to the particular package or if the government or regulatory body introduce an increase of taxes. Even then, the Company will absorb an amount equal to 2% of your holiday price (excluding insurance premiums and amendment charges) before passing on any surcharge to you. Only amounts in excess of this 2% will be surcharged. Surcharges will be notified by a revised Confirmation Invoice sent to you.

If a surcharge would increase the total holiday price shown on your original Confirmation Invoice by 10% or more, you may cancel your booking within 14 days of the date of issue of the revised Invoice and obtain a full refund of all payments made to the Company and any amendment charges previously incurred.

Optionally, you may choose to pay for your holiday in full at the time of booking, in which case your holiday price will be fixed at the cost quoted by the Company at the time. To qualify for this benefit you should return the Confirmation Invoice to the Company with full payment to reach the Company within 7 days of the date printed on the Confirmation Invoice.

The financial commitments offered above by the Company mean that the Company is not able to reduce the holiday prices should the value of the Omani Rial strengthen.
        </p>
        <h6>Cancellation and Changes by the Company</h6>
        <p>
        Occasionally it may be deemed necessary to make changes to your holiday and the Company reserves the right to do so at any time, and you will be notified of any changes at the earliest possible opportunity. If a major change to your tour is necessary, providing it does not arise from circumstances beyond the Company’s control, you may choose (i) to accept the change of arrangements (ii) to purchase another holiday from us or (iii) to cancel your holiday. Compensation may be payable in cases of major change as detailed below.

No compensation will be payable for minor changes. Minor changes include minimal changes to departure and arrival times, changes to the type of aircraft used and restaurant and accommodation changes to a comparable or superior standard.

Major changes include cancellation, changes to your airport, delays in departure or return by more than 12 hours and accommodation changes to an inferior standard of accommodation.

Compensation will not be paid for changes or cancellations caused by Acts of God (Force Majeure), war, threat of war, riot, civil strike, industrial dispute, terrorist activity, natural or man-made disaster, fire, technical problems to transport, closure or congestion of airports, strikes or other industrial action, adverse weather conditions or any other event beyond the Company’s control. It is essential that you take out adequate travel insurance.

The Company reserve the right to cancel your holiday at any time before the date of departure, even after a confirmation notice has been sent. If your holiday is cancelled the Company will refund in full the money you have already paid. No compensation will be payable.

Transportation is subject to the conditions of carriage of the carrier, some of which may limit or exclude liability. These conditions are often the subject of international agreement between countries and copies of the conditions, which apply to your holiday journey, will normally be found on the carrier’s tickets.

If you fail to pay the balance of the holiday price at least 30 days before departure, the Company will treat the booking as cancelled and levy the cancellation charges set out below

The company also has the right to refuse any person as a member of the tour, if in their opinion that person could endanger the health, safety and enjoyment of others on the tour. In any of the events mentioned above, the company’s sole liability and the client’s sole remedy will be limited to a refund of any monies paid, less the amount for services already utilised plus administrative fees.        </p>
        <h6>Cancellation and Changes by You</h6>
        <p>
        You may cancel your holiday at any time providing you notify the Company in writing. The following charges will be levied on any cancellation:<br></br>

30 days or more 50% of Deposit<br></br>
15 – 30 days 100% of Deposit<br></br>
8 – 15 days 80% of Tour Cost<br></br>
1 – 7 days 100% of Tour Cost
        </p>
      </Container>
      <FooterComp />
</>
  );
}

export default AboutPage;
