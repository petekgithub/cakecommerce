import "./menu-item.styles.scss";

const MenuItem = ({ menu }) => {
  const { imageUrl, title, price } = menu;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
