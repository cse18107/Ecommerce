import React, { Fragment, useEffect } from "react";
// import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
// import { Carousel } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

const ProductDetails = () => {
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  console.log(product.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  };

  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel className="carousel" fade={true} pause={false}>
            {product.images &&
              product.images.map((item, i) => (
                <Carousel.Item interval={2000}>
                  <img
                    // className="CarouselImage"
                    className="d-block w-100"
                    key={item.id}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
        <div>
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p>Product # {product._id}</p>
          </div>
          <div className="detailsBlock-2">
            <ReactStars {...options} />
            <span>({product.numOfReviews} Reviews)</span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`₹${product.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input value="1" type="number" />
                <button>+</button>
              </div>
              <button>Add to Cart</button>
            </div>

            <p>
              Status:
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>

          <div className="detailsBlock-4">
            Description: <p>{product.description}</p>
          </div>

          <button className="submitReview">Submit Review</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
