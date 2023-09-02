import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact({ contact }) {
  return (
    <div className="flex justify-between items-center w-4/5 pb-10 border-b">
      <h2 className="text-4xl font-bold">Contact Us Now!</h2>
      <div className="flex gap-4">
        <div className="py-2 px-6 rounded cursor-pointer hover:scale-105 transition bg-red-500 font-bold">
          <FontAwesomeIcon icon={faPhone} />
          <span>&nbsp;{contact.phone}</span>
        </div>
        <div className="py-2 px-6 rounded cursor-pointer hover:scale-105 transition bg-white text-black font-bold">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>&nbsp;{contact.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
