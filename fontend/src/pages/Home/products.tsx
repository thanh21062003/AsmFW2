import React from 'react'
import HomeProduct from '.'
import NavMenu from '../../components copy/user/nav'
import Footer from '../../components copy/user/footer'

const Products = () => {
  return (
    <div className="super_container">


	<NavMenu/>

	<div className="container product_section_container">
		<div className="row">
			<div className="col product_section clearfix">


				<div className="breadcrumbs d-flex flex-row align-items-center">
					<ul>
						<li><a href="index.html">Home</a></li>
						<li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</a></li>
					</ul>
				</div>


				<div className="sidebar">
					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Product Category</h5>
						</div>
						<ul className="sidebar_categories">
							<li><a href="#">Men</a></li>
							<li className="active"><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>Women</a></li>
							<li><a href="#">Accessories</a></li>
							<li><a href="#">New Arrivals</a></li>
							<li><a href="#">Collection</a></li>
							<li><a href="#">Shop</a></li>
						</ul>
					</div>

					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Filter by Price</h5>
						</div>
						<p>
							<input type="text" id="amount" readOnly={true} style={{border: "0", color: "#f6931f", fontWeight: "bold"}} />
						</p>
						<div id="slider-range"></div>
						<div className="filter_button"><span>filter</span></div>
					</div>

					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Sizes</h5>
						</div>
						<ul className="checkboxes">
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>S</span></li>
							<li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>M</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>L</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>XL</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>XXL</span></li>
						</ul>
					</div>

					<div className="sidebar_section">
						<div className="sidebar_title">
							<h5>Color</h5>
						</div>
						<ul className="checkboxes">
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Black</span></li>
							<li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>Pink</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
							<li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
						</ul>
						<div className="show_more">
							<span><span>+</span>Show More</span>
						</div>
					</div>

				</div>


				<div className="main_content">


					<div className="products_iso">
						<div className="row">
							<div className="col">


								<div className="product_sorting_container product_sorting_container_top">
									<ul className="product_sorting">
										<li>
											<span className="type_sorting_text">Default Sorting</span>
											<i className="fa fa-angle-down"></i>
											<ul className="sorting_type">
												<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Default Sorting</span></li>
												<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
												<li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }'><span>Product Name</span></li>
											</ul>
										</li>
										<li>
											<span>Show</span>
											<span className="num_sorting_text">6</span>
											<i className="fa fa-angle-down"></i>
											<ul className="sorting_num">
												<li className="num_sorting_btn"><span>6</span></li>
												<li className="num_sorting_btn"><span>12</span></li>
												<li className="num_sorting_btn"><span>24</span></li>
											</ul>
										</li>
									</ul>
									<div className="pages d-flex flex-row align-items-center">
										<div className="page_current">
											<span>1</span>
											<ul className="page_selection">
												<li><a href="#">1</a></li>
												<li><a href="#">2</a></li>
												<li><a href="#">3</a></li>
											</ul>
										</div>
										<div className="page_total"><span>of</span> 3</div>
										<div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
									</div>

								</div>

							
								<div className="product-grid" >

									
									<HomeProduct/>
									

									
								</div>


								<div className="product_sorting_container product_sorting_container_bottom clearfix">
									<ul className="product_sorting">
										<li>
											<span>Show:</span>
											<span className="num_sorting_text">04</span>
											<i className="fa fa-angle-down"></i>
											<ul className="sorting_num">
												<li className="num_sorting_btn"><span>01</span></li>
												<li className="num_sorting_btn"><span>02</span></li>
												<li className="num_sorting_btn"><span>03</span></li>
												<li className="num_sorting_btn"><span>04</span></li>
											</ul>
										</li>
									</ul>
									<span className="showing_results">Showing 1–3 of 12 results</span>
									<div className="pages d-flex flex-row align-items-center">
										<div className="page_current">
											<span>1</span>
											<ul className="page_selection">
												<li><a href="#">1</a></li>
												<li><a href="#">2</a></li>
												<li><a href="#">3</a></li>
											</ul>
										</div>
										<div className="page_total"><span>of</span> 3</div>
										<div id="next_page_1" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
									</div>

								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div className="benefit">
		<div className="container">
			<div className="row benefit_row">
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>free shipping</h6>
							<p>Suffered Alteration in Some Form</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-money" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>cach on delivery</h6>
							<p>The Internet Tend To Repeat</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>45 days return</h6>
							<p>Making it Look Like Readable</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 benefit_col">
					<div className="benefit_item d-flex flex-row align-items-center">
						<div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true"></i></div>
						<div className="benefit_content">
							<h6>opening all week</h6>
							<p>8AM - 09PM</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div className="newsletter">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
						<h4>Newsletter</h4>
						<p>Subscribe to our newsletter and get 20% off your first purchase</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
						<input id="newsletter_email" type="email" placeholder="Your email"  data-error="Valid email is required."/>
						<button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300" value="Submit">subscribe</button>
					</div>
				</div>
			</div>
		</div>
	</div>


	<Footer/>

</div>
  )
}

export default Products