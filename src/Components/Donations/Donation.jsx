import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
  } = donation;

  return (
    <div className="card-main  my-2 ">
        <Link to={`/donation/${id}`}>
        <div className="card h-full bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full object-cover" src={picture} alt="Shoes" />
          </figure>
          <div
            style={{ backgroundColor: card_bg_color }}
            className="card-body  p-4"
          >
            <span
              style={{ background: category_bg_color, color: text_color }}
              className="card-category self-start rounded font-[500] py-1 px-3  inline-block"
            >
              {category}
            </span>
            <p className="text-xl font-semibold capitalize ">{title}</p>
          </div>
        </div>
    </Link>
      </div>
  );
};
Donation.propTypes = {
  donation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    category_bg_color: PropTypes.string.isRequired,
    card_bg_color: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
  }),
};
export default Donation;
