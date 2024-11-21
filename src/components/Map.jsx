import React from "react";

const Map = () => {
  return (
    <div>
      {/* <!-- Contact map area start here --> */}
      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56186.6421240371!2d76.76460506215625!3d28.338734031425687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d40ee40f61ae9%3A0x7f08a0051c808b89!2sHaryana%20122503!5e0!3m2!1sen!2sin!4v1732124228683!5m2!1sen!2sin"
          width="800"
          height="600"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <!-- Contact map area end here --> */}
    </div>
  );
};

export default Map;
