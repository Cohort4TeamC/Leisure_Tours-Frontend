import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import TourProcedure from './pages/tourprocedure'
import CustomerInquiry from './pages/customerinquiry'
import ContactUs from './pages/contactus'
import Policies from './pages/policies'
import BookTour from './pages/booktour'
import SignIn from './pages/loginPage'
import SignUp from './pages/signupPage'
import PackageDetails from './pages/packagedetails'
import ConfirmBooking from './pages/bookingconfirmation'
import ConfirmedPayment from './pages/confirmedpayment'
import PaymentProceed from './pages/paymentproceed'
import CancelledPayment from './pages/cancelledpayment'
import Profile from './pages/profile'
import UserAccount from './pages/useraccount'
import ReservePackage from './pages/reservepackage'
import Faq from './pages/faq'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/faq">
          
          <Faq />
        </Route>
        <Route path="/useraccount">
          
          <UserAccount />
        </Route>
        <Route path="/reservepackage">
          
          <ReservePackage />
        </Route>
        <Route path="/profile">
          
          <Profile />
        </Route>
        <Route path="/cancelledpayment">
          
          <CancelledPayment />
        </Route>
        <Route path="/confirmedpayment">
          
          <ConfirmedPayment />
        </Route>
        <Route path="/paymentproceed">
          
          <PaymentProceed />
        </Route>
        <Route path="/confirmbooking">
          
          <ConfirmBooking />
        </Route>
        <Route path="/details">
          
          <PackageDetails />
        </Route>
        <Route path="/signin">
          
          <SignIn />
        </Route>
        <Route path="/signup">
          
          <SignUp />
        </Route>
        <Route path="/booktour">
          
          <BookTour />
        </Route>
        <Route path="/policies">
          
          <Policies />
        </Route>
        <Route path="/contactus">
          
          <ContactUs />
        </Route>
        <Route path="/customerinquiry">
          
          <CustomerInquiry />
        </Route>
        <Route path="/tourprocedure">
          
          <TourProcedure />
        </Route>
      
        <Route path="/about">
          
          <AboutPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
