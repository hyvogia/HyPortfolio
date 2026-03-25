import Footer from "../Footer";
import Header from "../Header";
import BlogSidebar from "./blog_sidebar";
import ReplyForm from "./reply_form";
/* import featureImg1 from "/src/img/blog/feature-img1.jpg" */
import postImg1 from "/src/img/blog/post-img1.jpg"
import postImg2 from "/src/img/blog/post-img2.jpg"
import prevImg from "/src/img/blog/prev.jpg"
import nextImg from "/src/img/blog/next.jpg"
import c1 from "/src/img/blog/c1.jpg"
import c2 from "/src/img/blog/c2.jpg"
import c3 from "/src/img/blog/c3.jpg"
import c4 from "/src/img/blog/c4.jpg"
import c5 from "/src/img/blog/c5.jpg"


function SingleBlog() {
    return (
        <>
            {/* <!--================ Start Header Area =================--> */}
            <Header />
            {/* <!--================ End Header Area =================--> */}

            {/* <!--================ Start Banner Area =================--> */}
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div className="banner_content text-center">
                            <h2>Look. a hidden page :3</h2>
                            <div className="page_link">
                                <a href="index.html">Home</a>
                                <a href="blog.html">Blog</a>
                                <a href="single-blog.html">Blog Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================ End Banner Area =================--> */}

            {/* <!--================Blog Area =================--> */}
            <section className="blog_area single-post-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post row">
                                <div className="col-lg-12">
                                        <div className="feature-img">
                                        <img className="img-fluid" src="/src/img/blog/feature-img1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3  col-md-3">
                                    <div className="blog_info text-right">
                                        <div className="post_tag">
                                            <a href="#">Food,</a>
                                            <a className="active" href="#">Technology,</a>
                                            <a href="#">Politics,</a>
                                            <a href="#">Lifestyle</a>
                                        </div>
                                        <ul className="blog_meta list">
                                            <li><a href="#">Mark wiens<i className="lnr lnr-user"></i></a></li>
                                            <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full"></i></a></li>
                                            <li><a href="#">1.2M Views<i className="lnr lnr-eye"></i></a></li>
                                            <li><a href="#">06 Comments<i className="lnr lnr-bubble"></i></a></li>
                                        </ul>
                                        <ul className="social-links">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-github"></i></a></li>
                                            <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9 blog_details">
                                    <h2>Astronomy Binoculars A Great Alternative</h2>
                                    <p className="excert">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                                    </p>
                                    <p>
                                        Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                                    </p>
                                    <p>
                                        Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="quotes">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid" src={postImg1} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img className="img-fluid" src={postImg2} alt="" />
                                        </div>
                                        <div className="col-lg-12 mt-25">
                                            <p>
                                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                            </p>
                                            <p>
                                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                            <div className="thumb">
                                            <a href="#"><img className="img-fluid" src={prevImg} alt="" /></a>
                                        </div>
                                        <div className="arrow">
                                            <a href="#"><span className="lnr text-white lnr-arrow-left"></span></a>
                                        </div>
                                        <div className="detials">
                                            <p>Prev Post</p>
                                            <a href="#"><h4>Space The Final Frontier</h4></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                        <div className="detials">
                                            <p>Next Post</p>
                                            <a href="#"><h4>Telescopes 101</h4></a>
                                        </div>
                                        <div className="arrow">
                                            <a href="#"><span className="lnr text-white lnr-arrow-right"></span></a>
                                        </div>
                                            <div className="thumb">
                                            <a href="#"><img className="img-fluid" src={nextImg} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-area">
                                <h4>05 Comments</h4>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={c1} alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Emilly Blunt</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href="" className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list left-padding">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={c2} alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Elsie Cunningham</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href="" className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list left-padding">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={c3} alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Annie Stephens</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href="" className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={c4} alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Maria Luna</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href="" className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src={c5} alt="" />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Ina Hayes</a></h5>
                                                <p className="date">December 4, 2017 at 3:12 pm </p>
                                                <p className="comment">
                                                    Never say goodbye till the end comes!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reply-btn">
                                            <a href="" className="btn-reply text-uppercase">reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ReplyForm />
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================Blog Area =================--> */}

            {/* <!--================Footer Area =================--> */}
            <Footer />
            {/* <!--================End Footer Area =================--> */}
        </>
    )
}

export default SingleBlog