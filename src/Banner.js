import bannerImage from "./images/img.png";
const Banner = () => {
  return (
    <div className="container">
      <div className="info">
        <h1 className="title">Can You Solve The Puzzle?</h1>
        <div className="button-wrapper">
          <button> Yes</button>
          <button> No </button>
        </div>
      </div>
      <div className="pic">
        <img src={bannerImage} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
