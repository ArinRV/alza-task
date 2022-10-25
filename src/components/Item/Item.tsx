import { DTONotebooks } from "../../pages/Notebooks/NotebooksPage";
import { RatingStars } from "../RatingStars/RatingStars";
import "./Item.css";

type ItemProps = {
  item: DTONotebooks;
};

export const Item = ({ item }: ItemProps) => {
  return (
    <div className="item">
      <div className="top">
        <div className="item-name">
          <div className="h3DrakBlueBold" style={{ lineHeight: "19px" }}>
            {item.name}
          </div>
        </div>
        <div className="h4LightGray">{item.spec}</div>
        {item.promos?.map((p, i) => (
          <span key={i}>
            <span style={{ fontWeight: "bold" }}>PROMO </span>
            <span>{p.name + " " + p.price}</span>
          </span>
        ))}
      </div>

      <div className="bottom">
        <div className="image-box">
          <a>
            <img src={item.img}></img>
          </a>
        </div>

        <div className="star-box">
          <RatingStars rating={item.rating} />
        </div>
        <div className="price-box">
          <div className="price-container">
            <span
              className="h2Green"
              style={{ textDecoration: "line-through" }}
            >
              {item.priceFull}
            </span>
            <span className="h2Green">{item.price}</span>
          </div>
          <select className="buy-choises">
            <option value="volvo">Koupit</option>
            <option value="volvo">Koupit zrychleně</option>
            <option value="saab">Porovnat</option>
            <option value="opel">Hlídat</option>
            <option value="audi">Přidat do seznamu</option>
          </select>
        </div>
        <div className="h4BlackBold">{item.avail}</div>
      </div>
    </div>
  );
};
