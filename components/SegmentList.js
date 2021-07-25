import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getSegments } from "../redux/actions/main";
import Link from "next/link";
const SegmentList = (props) => {
  const { segments } = props;
  useEffect(() => {
    props.getSegments();
  }, []);
  return (
    <section class="section-categories">
      <div class="container-fluid">
        <h2 class="kategoriler-heading index-2head">Segments</h2>
        <div class="container pt-3">
          <div class="row">
            {segments.data &&
              segments.data.length > 0 &&
              segments.data.map((segment, i) => (
                <div class="col-md-6 col-6">
                  <div
                    class="card index-card-biger shadow-sm m-auto"
                    style={{ maxWidth: "540px" }}
                  >
                    <div class="row g-0">
                      <div class="col-md-5">
                        <img
                          class="w-100"
                          src={`/images/${segment.name.en.toLowerCase()}.jpg`}
                          alt="..."
                        />
                      </div>
                      <div class="col-md-7">
                        <div class="card-body">
                          <h5 class="card-title">{segment.name.en}</h5>
                          <p class="card-text">
                            {segment.description ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: segment.description,
                                }}
                              ></div>
                            ) : (
                              <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam.
                              </p>
                            )}
                          </p>
                          <p class="card-text">
                            <small class="text-muted">
                              <Link
                                href={"/shops/segment/[segment]"}
                                as={`/shops/segment/${segment._id}`}
                              >
                                Explore
                              </Link>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  segments: state.segments,
});

const mapDispatchToProps = {
  getSegments,
};

export default connect(mapStateToProps, mapDispatchToProps)(SegmentList);
