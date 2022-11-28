import PopularProduct from "../components/PopularProduct";
import {popular} from "../data/data.js"

const PopularProductsContainer = () => {
  return (
    <div className="flex p-7 flex-wrap justify-between">
      {popular.map(item =>(
        <PopularProduct item={item} key={item.id} />
      ))}
      
    </div>
  );
};

export default PopularProductsContainer;
