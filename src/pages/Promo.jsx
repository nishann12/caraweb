import React from "react";

const PromoSection = () => {
  return (
    <div className="mt-4">
     <div className="row" style={{ margin: "0" }}>
        <div className="col-md-6 p-0">
          <div
            className="position-relative overflow-hidden text-white"
            style={{
              background: "url('https://react-first-app-five.vercel.app/static/media/b10.a08e172c86210ae63dad.jpg') center/cover",
              minHeight: "200px",
              width: "100%",
            }}
          >
            <div className="p-4 bg-dark bg-opacity-50">
              <small>spring / summer</small>
              <h2 className="fw-bold">buy 1 get 1 free</h2>
              <p className="small">The best classic dress is on sale</p>
              <button className="btn btn-success">Collection</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 p-0 ">
          <div
            className="position-relative overflow-hidden text-white"
            style={{
              background: "url('https://react-first-app-five.vercel.app/static/media/b7.2af5c7833ccb4dec437f.jpg') center/cover",
              minHeight: "200px",
              width: "100%",
            }}
          >
            <div className="p-4 bg-dark bg-opacity-50">
              <h2 className="fw-bold">SEASONAL SALE</h2>
              <p className="small text-danger">Winter Collection - 50% Off</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" text-white  position-relative"
        style={{
          background: "url('https://t4.ftcdn.net/jpg/04/37/93/59/360_F_437935932_eJsRZ3d11tpE5g7gW7DfVboXdkSAorLI.jpg') center/cover",
          minHeight: "200px",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold">Sign up for Newsletters</h3>
              <p className="small">
                Get E-mail updates about our latest shop and special offers.
              </p>
            </div>
            <div className="col-md-6">
              <div className="input-group mt-3">
                <input
                  type="email"
                  className="form-control mt-2"
                  placeholder="Your email address"
                  style={{
                    height: "50px",
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                />
                <button
                  className="btn btn-success mt-2"
                  style={{
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                    height: "50px",
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
