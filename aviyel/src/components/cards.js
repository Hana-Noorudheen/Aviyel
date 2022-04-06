import "./cards.css";
import { Data } from "./data";
import b1 from "../assets/images/b1.svg";
import b2 from "../assets/images/b2.svg";
import { findFlagUrlByNationality } from "country-flags-svg";

const CardCollection = () => {
  return (
    <>
      <div className="parent">
        {Data.map((item) => (
          <Card
            image={item.profilePhotoURL}
            title={item.title}
            name={item.Name}
            desc={item.desc}
            flag= {findFlagUrlByNationality(item.country)}
            socialMediaURL={item.socialMediaURL}
            contributionsURL={item.contributionsURL}
          />
        ))}
      </div>
    </>
  );
};

const Card = ({ image, title, name, desc, flag,socialMediaURL,contributionsURL }) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img className="card-image" src={image} alt="" />
          <img className="sub-image" src={flag}  alt="" />
        </div>
        <div className="card-content">
          <h3>{name}</h3>
          <h4>{title}</h4>
          <p>{desc}</p>

          <div className="card-button">
            <span className="b1">
              <img src={b1} alt="" />
              <a link href={contributionsURL}>
                Contribution
              </a>
            </span>

            <span className="b1">
              <img src={b2} alt="" />
              <a href={socialMediaURL}>Social Connect</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCollection;
