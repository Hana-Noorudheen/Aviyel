import "./cards.css";
import { Data } from "./data";
const CardCollection = () => {
  return (
    <>
      <div className="parent">
        {Data.map((item) => (
          <Card image={item.pic} title={item.title} name={item.Name} desc={item.desc} />
        ))}
      </div>
    </>
  );
};
const Card = ({ image, title, name, desc }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="card-content">
          <h2>{name}</h2>
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="card-button">
            <button>Contribution link</button>
            <button>Social Connect</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCollection;