import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchSelectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = ({
  product,
  fetchSelectedProduct,
  removeSelectedProduct,
}) => {
  const { productid } = useParams();
  const { image, title, price, category, description } = product;

  useEffect(() => {
    if (productid && productid !== "") fetchSelectedProduct(productid);
    return () => {
      removeSelectedProduct();
    };
  }, [fetchSelectedProduct, productid, removeSelectedProduct]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.selectedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSelectedProduct: (productid) =>
      dispatch(fetchSelectedProduct(productid)),
    removeSelectedProduct: () => dispatch(removeSelectedProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
