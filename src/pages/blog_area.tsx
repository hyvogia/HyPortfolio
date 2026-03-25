
import { Link } from 'react-router-dom';
import BlogSidebar from './blog_sidebar';
import mblog2 from "/src/img/blog/main-blog/m-blog-2.jpg"
import mblog3 from "/src/img/blog/main-blog/m-blog-3.jpg"
import mblog4 from "/src/img/blog/main-blog/m-blog-4.jpg"
import mblog5 from "/src/img/blog/main-blog/m-blog-5.jpg"
import abandonedHome from "/src/img/blog/main-blog/abandoned-home.jpg"
import BlogInfo from './blog_info';

function BlogArea() {
    return (
        <>
            <section className="blog_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog_left_sidebar">
                                <article className="row blog_item">
                                    <div className="col-md-3">
                                        <BlogInfo />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="blog_post">
                                            <img src={mblog2} alt="" />
                                            <div className="blog_details">
                                                <Link to="/blog/single"><h2>The Basics Of Buying A Telescope</h2></Link>
                                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                                                <Link to="/blog/single" className="primary_btn"><span>View More</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="row blog_item">
                                    <div className="col-md-3">
                                        <BlogInfo />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="blog_post">
                                            <img src={mblog3} alt="" />
                                            <div className="blog_details">
                                                <Link to="/blog/single"><h2>The Glossary Of Telescopes</h2></Link>
                                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                                                <Link to="/blog/single" className="primary_btn"><span>View More</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="row blog_item">
                                    <div className="col-md-3">
                                        <BlogInfo />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="blog_post">
                                            <img src={mblog4} alt="" />
                                            <div className="blog_details">
                                                <Link to="/blog/single"><h2>The Night Sky</h2></Link>
                                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                                                <Link to="/blog/single" className="primary_btn"><span>View More</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="row blog_item">
                                    <div className="col-md-3">
                                        <BlogInfo />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="blog_post">
                                            <img src={mblog5} alt="" />
                                            <div className="blog_details">
                                                <Link to="/blog/single"><h2>Telescopes 101</h2></Link>
                                                <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                                                <Link to="/blog/single" className="primary_btn"><span>View More</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="row blog_item">
                                    <div className="col-md-3">
                                        <BlogInfo />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="blog_post">
                                                <a href="https://www.artstation.com/artwork/QLbXd">
                                                <img src={abandonedHome} style={{ width: "555px", height: "280px" }} />
                                            </a>
                                            <div className="blog_details">
                                                <Link to="/blog/zombie"><h2>The Office Siege: A Zombie Apocalypse Dream</h2></Link>
                                                <p>The dream began in a city, overrun by zombies. My group of survivors and I managed to retreat into an office building—a towering fortress with dozens of floors. We quickly barricaded the lower levels, hoping the height and barriers would buy us time.</p>
                                                <Link to="/blog/zombie" className="primary_btn"><span>View More</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <nav className="blog-pagination justify-content-center d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <span className="lnr lnr-chevron-left"></span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a href="#" className="page-link">01</a></li>
                                        <li className="page-item active"><a href="#" className="page-link">02</a></li>
                                        <li className="page-item"><a href="#" className="page-link">03</a></li>
                                        <li className="page-item"><a href="#" className="page-link">04</a></li>
                                        <li className="page-item"><a href="#" className="page-link">09</a></li>
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <span className="lnr lnr-chevron-right"></span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogArea