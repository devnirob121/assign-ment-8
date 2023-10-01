import PropTypes from "prop-types";

const Banner = ({ handleSearch, searchRef }) => {
  return (
    <>
      <div className="relative z-10">
        <div className="banner px-4 sm:px-0 h-[400px] md:h-[600px] bg-[url(https://i.ibb.co/1qzC82R/banner-bg.jpg)] bg-cover bg-no-repeat bg-center bg-opacity-5 flex flex-col justify-center items-center ">
          <div className="absolute  inset-0 bg-[rgba(255,255,255,.9)]"></div>

          <h2 className="text-2xl text-center  sm:text-4xl lg:text-5xl z-20	 text-[#0B0B0B] font-bold mb-10 ">
            I Grow By Helping People In Need
          </h2>

          <div className="w-5/6 sm:w-96 z-20	 overflow-hidden relative h-12 flex items-center bg-black">
            <div className="input-div grow ">
              <input
                ref={searchRef}
                className="w-full outline-none h-full min-h-full py-5 px-6 "
                type="text"
                placeholder="Search here..."
              />
            </div>
            <div className="btn-div">
              <button
                onClick={handleSearch}
                className="py-5 px-6 font-bold text-white bg-primary rounded-tr-lg rounded-br-lg "
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Banner.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    searchRef: PropTypes.object.isRequired,

};
export default Banner;
