import Directory from "../../components/directory/directory.component";

const Home = () => {
  const menus = [
    {
      id: 1,
      title: "strawberry-brownie",
      price: "£10",
      imageUrl:
        "https://images.pexels.com/photos/9652807/pexels-photo-9652807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "blueberry-brownie",
      price: "£12",
      imageUrl:
        "https://images.pexels.com/photos/5386662/pexels-photo-5386662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "crunchy-brownie",
      price: "£18",
      imageUrl:
        "https://images.pexels.com/photos/5386671/pexels-photo-5386671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "cashew-brownie",
      price: "£20",
      imageUrl:
        "https://images.pexels.com/photos/8820715/pexels-photo-8820715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "banana-brownie",
      price: "£15",
      imageUrl:
        "https://images.pexels.com/photos/6794152/pexels-photo-6794152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return <Directory menu={menus} />;
};

export default Home;
