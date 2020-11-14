import React from 'react'
 
 
class tablets extends React.Component{
    render(){
        return(
        <div>
 

 {/* loginmodal start*/}
 <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                 
              </div>

 
              <div className="modal-header-in-middle">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png" className alt="" style={{height:'80px',width:'60px',display: 'block',marginLeft: 'auto',marginRight: 'auto',borderRadius:'10px'}}/>
          <div className="col-sm" style={{textAlign:'center'}}>
           Help make OLX safer place to buy and sell 
      </div>
          </div>
          <div className="carousel-item">
      <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png" style={{height:'80px',width:'60px',display: 'block',marginLeft: 'auto',marginRight: 'auto',borderRadius:'10px'}}/>
      <div className="col-sm" style={{textAlign:'center'}}>
          Contact and close deals faster 
      </div>

          </div>
          <div className="carousel-item">
          <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.png" class="" alt="" style={{height:'80px',width:'60px',display: 'block',marginLeft: 'auto',marginRight: 'auto',borderRadius:'10px'}}/>
      <div className="col-sm" style={{textAlign:'center'}}>
          Save all your favourite items in one place
      </div>

          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" style={{backgroundColor:'black',borderRadius:"30px",height:'30px',width:'30px',marginTop:'45px'}} data-slide="prev">
          <span className="carousel-control-prev-icon"   aria-hidden="true" role="button"/>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" style={{backgroundColor:'black',borderRadius:"30px",height:'30px',width:'30px',marginTop:'45px'}} href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
              </div>
              





              <div className="modal-body">
              <button type="button" className="btn btn-light btn-lg btn-block">Continue with phone</button>
              <button type="button" className="btn btn-light btn-lg btn-block">Continue with facebook</button>
              <button type="button" className="btn btn-light btn-lg btn-block">Continue with google</button>
              <button type="button" className="btn btn-light btn-lg btn-block">Continue with email</button>
              </div>
              <div className="modal-footer">
              <div className="col-sm" style={{textAlign:'center'}}>
        We won't share your personal details with anyone
        If you continue, you are accepting <a href="">OLX Terms and Conditions and Privacy Policy</a>
      </div>
              <br/>
               

              </div>
            </div>
          </div>
        </div>

{/* login modal end*/}


{/*  sellmodal start */}
<div className="container">
            
            {/* Modal */}
            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <h4 className="modal-title">Modal Header</h4>
                  </div>
                  <div className="modal-body">
                    <p>Some text in the modal.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
     {/* sellmodal end */}






<div>
             <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
             {/* Navbar section */}
        
        <div className="filter"> 
        <p className="btn btn-default"  data-toggle="collapse" data-target="#mobile-filter" aria-expanded="true" aria-controls="mobile-filter">Filters<span className="fa fa-filter pl-1" />
        </p>
        </div>
        <div id="mobile-filter">
          <p className="pl-sm-0 pl-2"> Home | <b>All Breads</b></p>
          <div className="border-bottom pb-2 ml-2">
            <h4 id="burgundy">Filters</h4>
          </div>
          <div className="py-2 border-bottom ml-3">
            <h6 className="font-weight-bold">Categories</h6>
            <div id="orange"><span className="fa fa-minus" /></div>
            <form>
              <div className="form-group"> <input type="checkbox" id="artisan" /> <label htmlFor="artisan">Samsung Tablet</label></div>
              <div className="form-group"> <input type="checkbox" id="breakfast" /> <label htmlFor="breakfast">LG Tablet</label></div>
              <div className="form-group"> <input type="checkbox" id="healthy" /> <label htmlFor="healthy">Apple Ipad</label></div>
              
            </form>
          </div>
          <div className="py-2 border-bottom ml-3">
            <h6 className="font-weight-bold">Locations</h6>
            <div id="orange"><span className="fa fa-minus" /></div>
            <form>
            <div className="form-group"> <input type="checkbox" id="tea" /> <label htmlFor="tea">Sindh</label> </div>
              <div className="form-group"> <input type="checkbox" id="cookies" /> <label htmlFor="cookies">Punjab</label> </div>
              <div className="form-group"> <input type="checkbox" id="pastries" /> <label htmlFor="pastries">KPK</label> </div>
              <div className="form-group"> <input type="checkbox" id="dough" /> <label htmlFor="dough">Balochistan</label> </div>
              <div className="form-group"> <input type="checkbox" id="choco" /> <label htmlFor="choco">Islamabad(Capital)</label> </div>
              <a href="#">   View more   </a>
            </form>
          </div>
          <div className="py-2 border-bottom ml-3">
            <h6 className="font-weight-bold">Make</h6>
            <div id="orange"><span className="fa fa-minus" /></div>
            <form>
            <div className="form-group"> <input type="checkbox" id="tea" /> <label htmlFor="tea">8 Inch Tablet/Ipad</label> </div>
              <div className="form-group"> <input type="checkbox" id="cookies" /> <label htmlFor="cookies">10 Inch Tablet/Ipad</label> </div>
              <div className="form-group"> <input type="checkbox" id="pastries" /> <label htmlFor="pastries">12 Inch Tablet/Ipad</label> </div> 
             <a href="#">   View more   </a>
            </form>
          </div>
          <div className="py-2 ml-3">
            <h6 className="font-weight-bold">Price Range</h6>
            <div id="orange"><span className="fa fa-minus" /></div>
            <form>
              <div className="form-group"> <input type="checkbox" id="25off" /> <label htmlFor={25}>1000-2000</label> </div>
              <div className="form-group"> <input type="checkbox" id="5off" /> <label htmlFor="5off" id="off">2000-3000 </label> </div>
              <div className="form-group"> <input type="checkbox" id="25off" /> <label htmlFor={25}>3000-4000</label> </div>
              <div className="form-group"> <input type="checkbox" id="5off" /> <label htmlFor="5off" id="off">4000-5000 </label> </div>
              <div className="form-group"> <input type="checkbox" id="25off" /> <label htmlFor={25}>5000-6000</label> </div>
              <div className="form-group"> <input type="checkbox" id="5off" /> <label htmlFor="5off" id="off">6000-7000</label> </div>
            </form>
          </div>
        </div>
          </div>
          
          <div className="col-sm-10">
          {/* products section */}
        <section id="products">
          <div className="container">
            <div className="d-flex flex-row">
              <div className="text-muted m-2" id="res">Showing 44 results</div>
              <div className="ml-auto mr-lg-4">
                <div id="sorting" className="border rounded p-1 m-1"> <span className="text-muted">Sort by</span> <select name="sort" id="sort">
                    <option value="popularity">Popularity</option>
                    <option value="prcie">Price</option>
                    <option value="rating">Rating</option>
                  </select> </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'220px'}} className="card-img-top" src="https://cellmart.pk/wp-content/uploads/2020/03/sm-t510_tab_a_10_1_bk_v_front_rgb.jpg" />
                  <div className="card-body">
                    <h5><b>Samsung Galaxy 10 Inch Tablet</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <br />
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'220px'}} className="card-img-top" src="https://assets.pcmag.com/media/images/543412-samsung-galaxy-book-12-inch-lte.jpg?thumb=y" />
                  <div className="card-body">
                    <h5><b>Samsung Galaxy Book 12 Inch</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'220px'}} className="card-img-top" src="https://images.samsung.com/is/image/samsung/uk-galaxy-tab-2-10-1-p5100-gt-p5100tsabtu-018-front-black" />
                  <div className="card-body">
                    <h5><b>Samsung Galaxy  8 Inch Tablet</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'220px'}} className="card-img-top" src="https://zdnet4.cbsistatic.com/hub/i/r/2015/09/27/3cf481f8-cf23-4c11-95b7-11cd44afe9a7/thumbnail/770x578/adb138f7931532c1b3ef5f474bf9f58f/lg-g-pad-x-10.jpg" />
                  <div className="card-body">
                    <h5><b>LG 8 Inch Tablet</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'220px'}} className="card-img-top" src="https://m.xcite.com/media/catalog/product/cache/1/thumbnail/700x700/9df78eab33525d08d6e5fb8d27136e95/133334/LG_G_Pad_V700_16GB_Wi_Fi_10_1_inch_Tablet___Black_3.jpg" />
                  <div className="card-body">
                    <h5><b>LG 10 Inch Tablet</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'220px'}} className="card-img-top" src="https://cdn.mos.cms.futurecdn.net/4RxJ6FkFpyizziqYAXejrH.jpg" />
                  <div className="card-body">
                    <h5><b>LG 12 Inch Tablet</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'280px'}} className="card-img-top" src="https://i.pinimg.com/originals/a4/23/40/a42340f822d318c6c5849600663ff8c1.jpg" />
                  <div className="card-body">
                    <h5><b>Apple Ipad 8 Inch</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'280px'}} className="card-img-top" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553704156" />
                  <div className="card-body">
                    <h5><b>Apple Ipad 10 Inch</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className="card"> <img style={{height:'280px'}} className="card-img-top" src="https://cdn.cultofmac.com/wp-content/uploads/2016/04/iPad-Pro-10.jpg" />
                  <div className="card-body">
                    <h5><b>Apple Ipad 12 Inch</b> </h5>
                    <div className="d-flex flex-row my-2">
                      <div className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                       
                    </div> <p style={{fontSize:'15px'}}>Karachi, Landhi Malir</p>
                  </div>
                </div>
              </div>
              <br/>
               
              
            </div>
          </div>
        </section>
          </div>
        </div>
      </div>

   <div>
        
         
        
      </div>
    
</div>
           
            </div>
            
        )
    }
}
export default tablets