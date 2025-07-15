import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-2 py-6 bg-[#0f172a]  text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Schedule a Meeting</h2>

      <div
        className="calendly-inline-widget w-full md:w-[750px]  rounded-lg shadow-lg"
        data-url="https://calendly.com/thebaljitsinghin/30min?hide_gdpr_banner=1"
        style={{
          minWidth: '320px',
          height: '600px',
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      ></div>
    </div>
  );
}

export default Contact;
