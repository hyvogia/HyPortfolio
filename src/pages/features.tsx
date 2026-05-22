
function Features() {
    return (
        <>
            <section id="feature_area" className="features_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>experiences</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row feature_inner">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="/src/img/brands/niagaracollege.svg" className="feature-logo" alt="" />
                                <h4>Peer Tutor</h4>
                                <p>Part-time @ Niagara College Canada</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src="/src/img/brands/ridleycollege.png" className="feature-logo" alt="" />
                                <h4>Technical Data Analyst</h4>
                                <p>Full-time & Ridley College Canada</p>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={s3} alt=""></img>
                                <h4>Web Development</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature_item">
                                <img src={s4} alt=""></img>
                                <h4>Machine Learning</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features