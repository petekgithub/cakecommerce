import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

const Directory = ({ menu }) => {
  return (
    <div className="menu-container">
      {menu.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default Directory;
