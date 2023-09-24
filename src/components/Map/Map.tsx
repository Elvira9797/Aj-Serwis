const Map = () => {
  return (
    <div style={{ width: '100%' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.769113851309!2d18.96183257661696!3d51.883426983164135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471baa8dd6cca6f9%3A0xd78fbeafbe030e7e!2sTargowa%2015%2C%2099-200%20Podd%C4%99bice!5e0!3m2!1suk!2spl!4v1695544398512!5m2!1suk!2spl"
        width="100%"
        height="450"
        style={{
          border: 0,
          position: 'relative',
          zIndex: 3,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Map;
