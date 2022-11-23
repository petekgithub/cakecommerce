import "./menu-item.styles.scss";

const MenuItem = ({ menu }) => {
  const { imageUrl, title, price } = menu;
  return (
    <div className="menu-container">
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="menu-body-container">
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
