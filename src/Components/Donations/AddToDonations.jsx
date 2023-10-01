import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AddToDonations = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
    price,
  } = donation;

  return (
    <>
      <div className="card-main mb-5 lg:mb-0 ">
        <div
        style={{ backgroundColor: card_bg_color }}
        className="card h-full sm:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-full object-cover"
              src={picture}
              alt={title}
            />
          </figure>
          <div
            
            className="card-body p-5 sm:p-8  gap-4 "
          >
            <span
              style={{ background: category_bg_color, color: text_color }}
              className="card-category self-start rounded font-[500] py-1 px-3  inline-block"
            >
              {category}
            </span>
            <h2 className="text-2xl font-semibold capitalize ">{title}</h2>

            <span>${price}</span>
            <div className="card-actions ">
              <Link to={`/donation/${id}`}>
                <button
                  style={{ background: text_color }}
                  className="z-10 btn text-white border-none "
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AddToDonations.propTypes = {
  donation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    category_bg_color: PropTypes.string.isRequired,
    card_bg_color: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
  }),
};
export default AddToDonations;
