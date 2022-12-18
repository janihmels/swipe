import walmartLogo from "Media/walmart-logo.png";
import bestBuyLogo from "Media/best-buy-logo.png";

const Online = ({ items, refPrice }) => {
  console.log("Online component:", items, refPrice);
  if(!items) return null;
  
  return (
    <div className="swoop-center">
      <div className="headline">
        <h4 className="title is-4 narrower">Online Options</h4>
      </div>
      {
        items.map( (item, itemindex) => 
          <OnlineItem key = {`online-${itemindex}`} item = { item } refPrice = { refPrice } />
        )
      }
    </div>
  );
};

export default Online;


const OnlineItem = ({ item, refPrice }) => {
  const logo = item.type === "best-buy" ? bestBuyLogo : walmartLogo;
  const price = item.price.toFixed(2);
  const diff = Math.abs(refPrice - item.price).toFixed(2);
  const isNotId = diff > 0.01;

  console.log("Is !Id", isNotId);

  return(
  <div className="item-wrapper">
  <div className="box box-item">
    <div className="item-inside-wrapper">
      <div className="item-store">
        <div className="item-logo-wrapper">
          <img className="item-logo" src={logo} alt="logo" />
        </div>
      </div>
      {
        isNotId ? (price < refPrice ?       <div className = "center-piece">Save
          <div className="tag is-rounded is-small is-success is-light">
        ${diff}
      </div></div> :       <div className="tag is-rounded is-small is-danger is-light">
        -${diff}
      </div>) : null
      }      
      {
        price < refPrice ?       (<button onClick = {() => {
          window.open(item.url)
        }} className="button tag is-large is-primary">${price}</button>) : (
          <button onClick = {() => {
            window.open(item.url)
          }} className="button tag is-large">${price}</button>    
        )
        
      }
    </div>
  </div>
  </div>
  );
}