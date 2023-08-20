// import SectionContainer from '../SectionContainer/SectionContainer';

const Map = () => {
  return (
    // <SectionContainer >
    <div style={{width: '100%'}}> 
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.703212263969!2d18.786032876621917!3d51.975835376375166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b04855ebf4831%3A0x43cbeb1f8cf6a176!2sKo%C5%9Bcielnicka%2029%2C%2099-210%20Uniej%C3%B3w!5e0!3m2!1suk!2spl!4v1692305578175!5m2!1suk!2spl"
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
    // </SectionContainer>
  );
};
export default Map;
