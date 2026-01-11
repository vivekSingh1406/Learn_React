import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
