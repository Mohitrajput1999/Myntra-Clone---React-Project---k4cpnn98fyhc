import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/features/data";
import "./Modal.css";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
import { computeHeadingLevel } from "@testing-library/react";

const Cart = () => {
	let cartData = useSelector(state => state.appData.value.cart)
	const dispatch = useDispatch();
	const navigate=useNavigate();
	//  removeFromWishList
	useEffect(()=>{

	},[cartData])
	return (
		<>
			<div className="modal-wrapper">
				<div className="inner-head">
					<div className="flexed flex-end">Your Cart Details</div>
					<div className="right-content">
						{cartData.map((value, index) => {
							const { id, pname, product, category, imgscr, price, visible } =
								value;
							return visible ? (
								<div className="inner-card container" key={index}>
									<div className="card-wrapper">
										<div className="slider">
											<img src={imgscr} alt="" className="product-image" />
											{/* <div className="slide"></div> */}
											{/* <div class="slide"></div>
									<div class="slide"></div> */}
										</div>
										<div className="card-info">
											<h3 className="inner-card-category">{pname}</h3>
											<p className="inner-card-title">{product}</p>
											<p className="inner-card-price">{price}</p>
											<div className="wishlist-wrapper">
												{/* <button
													className="wishlist"
													onClick={() => {
														// dispatch(addToCheckout(value));
													}}
												>
													Add to Cart
												</button> */}
												<button
													className="wishlist"
													onClick={() => {
														dispatch(removeFromCart(value));
													}}
												>
													Remove from Cart
												</button>
											</div>
										</div>
									</div>
                               
								</div>
							) : null;
						})}
						{/* {JSON.stringify(wishlistData, 3, 3)} */}
					</div>
					 
                      <div className="checkout"> <h2>Total Rs :{cartData?.reduce((a1,a2)=>{return a1+a2.price},0)}</h2>
					  {/* <button className="paynow"  onClick={()=>{
						navigate("/checkout");
						cartData=[];
						console.log(cartData) }
						}>Pay Now</button>  */}
						<button className="paynow"> Pay Now</button>
					 </div>
					
				</div>
			</div>
		</>
	)
}
export default Cart;
