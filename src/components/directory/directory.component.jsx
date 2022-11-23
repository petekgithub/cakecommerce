import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

const Directory = ({ menus }) => {
  return (
    <div className="menu-container">
      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default Directory;
