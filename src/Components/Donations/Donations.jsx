import AddToDonations from "./AddToDonations"
import PropTypes from "prop-types";

const Donations = ({donation}) => {
  return (
    <>
    <AddToDonations donation={donation} />
    </>
  )
}
Donations.propTypes = {
  donation: PropTypes.object.isRequired,

};

export default Donations