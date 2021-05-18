import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/actions/productActions";
import { useEffect } from "react";
import { connect } from "react-redux";

const ProductComponent = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return Object.keys(products).length === 0 ? (
    <div className="ui grid container">...Loading</div>
  ) : (
    products.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="four wide column" key={id}>
          <Link to={`products/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">${price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    })
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.allProducts.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
