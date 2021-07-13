import Image from "next/image";

export default function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            className="d-block w-100"
            width="100%"
            height="35"
            layout="responsive"
            src="/images/slad-1.jpg"
            alt="a"
          />
        </div>
        <div className="carousel-item">
          <Image
            className="d-block w-100"
            width="100%"
            height="35"
            layout="responsive"
            src="/images/slad-2.jpg"
            alt="a"
          />
        </div>
        <Image
          className="d-block w-100"
          width="100%"
          height="35"
          layout="responsive"
          src="/images/slad-3.jpg"
          alt="a"
        />
      </div>
      <div className="container carousel-container index-v2">
        <div className="row">
          <div className="col-md-9 m-auto">
            <form className="form-indexv2">
              <h2 className="text-black text-center mb-3">Order food online</h2>
              <div className="row">
                <div className="col-md-9">
                  <a href="">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                  <a href="">
                    <img src="images/map-marker.jpg" />
                  </a>
                  <input
                    type="email"
                    placeholder="Search for area, streat name, landmark..."
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn btn-primary">
                    Let's Go
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
