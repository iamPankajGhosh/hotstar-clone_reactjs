import PropTypes from "prop-types";
import images from "../constants/images.js";

function Logo({ width }) {
  return (
    <div>
      <img src={images.logo} alt="Hotstar" width={width} />
    </div>
  );
}

Logo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Logo.defaultProps = {
  width: "50px",
};

export default Logo;
