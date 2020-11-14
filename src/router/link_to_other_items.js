import React from 'react';
 
 
class Link_to_other_items extends React.Component{
    render(){
        return(
        <div>
           
         <div className="Link_to_other_items">
         <div className="container-fluid" style={{ borderStyle: 'outset',backgroundColor:'lightgrey'}}>
<div className="row" style={{height:'40px'}}>
 <div className="col-sm">
  {/* START mega MENU */}
  <div class="dropdown" >
    <a href="#" class="dropdown-toggle" type="button" data-toggle="dropdown" style={{height:'25px',fontSize:'18px',fontWeight:'bold',textDecoration:'none',color:'black'}}>Dropdown Example
    <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </div>
  {/* END MEGA MENU */}
 </div>
 <div className="col-sm">
    <a href="/Mobile"style={{textDecoration:'none',fontSize:'18px'}}>Mobile Phones</a>
 </div>
 <div className="col-sm">
 <a href="/Cars" style={{textDecoration:'none',fontSize:'18px'}}>Cars</a>
 </div>
 <div className="col-sm">
    <a href="/motorcycles"style={{textDecoration:'none',fontSize:'18px'}}>Motorcycles</a>
 </div>
 <div className="col-sm">
    <a href="/houses"style={{textDecoration:'none',fontSize:'18px'}}>Houses</a>
 </div>
 <div className="col-sm">
    <a href="/tvled"style={{textDecoration:'none',fontSize:'18px'}}>Tv-LED </a>
 </div>
 <div className="col-sm">
    <a href="/tablets"style={{textDecoration:'none',fontSize:'18px'}}>Tablets</a>
 </div>
  
</div>
</div>
   </div>
   <hr/>
   <img src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" alt="Ad" style={{ width: '1349px', height: '250px' }} />
      
 </div>
        )
    }

}
export default Link_to_other_items;