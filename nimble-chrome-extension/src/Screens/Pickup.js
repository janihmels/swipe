import walmartLogo from "Media/walmart-logo.png";

const Pickup = () => {
  return (
    <div className="swoop-center">
      <div className="headline">
        <h4 className="title is-4 narrower">Available for Pickup</h4>
        <h6 className="title is-6">
          Your Zip: <b>94117</b>
        </h6>
      </div>
      <div className="item-wrapper">
        <div className="box box-item">
          <div className="item-inside-wrapper">
            <div className="item-store">
              <img className="item-logo" src={walmartLogo} alt="logo" />
              <div className="item-address">
                1301 N Victory Pl
                <br />
                Burbank, CA 91502
              </div>
            </div>
            <div className="offline-distance">7 Mi</div>
            <div className="tag is-large is-primary">$39.99</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pickup;
