const MapLocation = () => {
    return (
      <div className="w-full h-[400px] mt-10">
        <iframe
          title="Bengaluru Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.692497360617!2d77.5945625!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c3fc57d5%3A0xf5f1707404c9e8fd!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1615893463406!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default MapLocation;
  