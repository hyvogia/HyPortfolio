

function Brand() {
    return (
        <>
            <section id="brand_area" className="brand_area section_gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="src/img/brands/icarecenter.svg" style={{ maxWidth: "150px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="/src/img/brands/niagaracollege.svg" style={{ maxWidth: "110px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-brand-item d-table">
                                        <div className="d-table-cell text-center">
                                            <img src="/src/img/brands/ridleycollege.png" style={{ maxWidth: "150px" }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-4 col-md-6">
                            <div className="client-info">
                                <div className="d-flex mb-50">
                                    <span className="lage">03</span>
                                    <span className="smll">Years Experience Programming</span>
                                </div>
                                {/* <!--<div className="call-now d-flex">
                                <div>
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="ml-15">
                                    <p>call us now</p>
                                    <h3>(+1)-000-000-0000</h3>
                                </div>
                                </div>--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand