import React from "react";

export default function SegmentNavbar() {
  return (
    <div className="container-fluid landing-search-container-fluid search-container-fluid">
      <div className="row">
        <div className="col-md-2 logo-col">
          <h2 className="text-white">Logo</h2>
        </div>
        <div className="col-md-2">
          <button className="btn landing-search-btn">Super Market</button>
        </div>
        <div className="col-md-4">
          <form>
            <div className="input-group">
              <div className="form-outline w-100">
                <input
                  id="search-input"
                  placeholder="Enter your post code"
                  type="search"
                  id="form1"
                  className="form-control"
                />
              </div>
              <button
                id="search-button"
                type="button"
                className="btn landing-chevron-btn btn-primary btn-primary"
              >
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <form>
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Find your best delicious meal in your area"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button
                type="button"
                className="btn landing-btn-primary btn-primary"
              >
                Show
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
