const Footer = () => {
  return (
    <div>
      <footer>
        <div className="info">
          <p className="quote">
            <img src="./images/quote.png" alt="quote" />
          </p>
          <p>
            Our company specializes in providing user friendly, top of the line
            machinery and software solutions for the textile manufacturing
            industry. We prioritize building strong, trusting relationships with
            our clients, ensuring we're always readily available to assist.
          </p>
        </div>

        <div className="contact">
          <div className="location">
            <img src="./images/location_black.svg" alt="Location_icon" />
            <p>
              Akash Plaza, Room#501, Plot# 21, Road# 7/D, <br />
              Dhaka Mymensingh Road, Sector : 9, Uttara, Dhaka-1230
            </p>
          </div>

          <div className="phone">
            <img src="./images/call_black.svg" alt="Call_icon" />
            <p>+88 01730 055224</p>
          </div>

          <div className="email">
            <img src="./images/email_black.svg" alt="Email_icon" />
            <p>salesdesk.primegroup@gmail.com</p>
          </div>
        </div>

        <div className="socials">
          <img src="./images/facebook.png" alt="facebook" />
          <a href="">Facebook</a>
          <img src="./images/twitter.png" alt="twitter" />
          <a href="">X / Twitter</a>
          <img src="./images/linkedin.png" alt="linkedin" />
          <a href="">linkedin</a>
          <img src="./images/whatsapp.png" alt="whatsapp" />
          <a href="">WhatsApp</a>
          <img src="./images/youtube.png" alt="youtube" />
          <a href="">YouTube</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
