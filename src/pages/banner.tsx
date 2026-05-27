import homeSitting from "../img/banner/home_sitting.png";

function HomeBanner() {
    return (
        <>
            <section id="home_area" className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner_content">
                                    <h3 className="text-uppercase">Hello</h3>
                                    <h1 className="text-uppercase">It's Daniel Vo</h1>
                                    <h5 className="text-uppercase">a data engineer</h5>
                                    <div className="d-flex align-items-center">
                                        <a className="primary_btn" href="https://www.linkedin.com/in/hy-vo"><span>LinkedIn</span></a>
                                        <a className="primary_btn tr-bg" href="https://www.overleaf.com/read/tfzqvhqvxkkz#a2ed03"><span>Resume</span></a>
                                        {/* still need to update resume */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img className="" src={homeSitting} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner