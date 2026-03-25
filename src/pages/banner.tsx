

function HomeBanner() {
    return (
        <>
            <section id="home_area" className="home_banner_area section_gap_bottom">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner_content">
                                    <h3 className="text-uppercase">Hello</h3>
                                    <h1 className="text-uppercase">It's Hy Võ</h1>
                                    <h5 className="text-uppercase">a software engineer</h5>
                                    <div className="d-flex align-items-center">
                                        <a className="primary_btn" href="https://www.linkedin.com/in/hy-vo"><span>Hire Me</span></a>
                                        <a className="primary_btn tr-bg" href="/Hy_resume.pdf" download><span>Resume</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img className="" src="../src/assets/img/banner/home_sitting.png" alt="" />
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