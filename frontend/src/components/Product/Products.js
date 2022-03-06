import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);
  console.log(products);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
          <div className="paginationBox">
            <Pagination 
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
