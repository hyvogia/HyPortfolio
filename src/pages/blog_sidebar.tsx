import { Link } from "react-router-dom"


function BlogSidebar() {
    return (
        <>
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Posts" />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
                        </span>
                    </div>
                    <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget author_widget">
                    <img className="author_img rounded-circle" src="/src/assets/img/blog/author.jpg" alt="" />
                    <h4>Me</h4>
                    <p>Blog writer</p>
                    <div className="social_icon">
                        <a href="https://www.facebook.com/profile.php?id=100009867310233"><i className="fa fa-facebook"></i></a>
                        <a href="https://x.com/HyVoGia"><i className="fa fa-twitter"></i></a>
                        <a href="https://github.com/hvo11152021"><i className="fa fa-github"></i></a>
                        <a href="#"><i className="fa fa-behance"></i></a>
                    </div>
                    <p>Welcome to my little corner of the web! This blog is a space where I share my passion for technology, my personal essays, and random musings on life.</p>
                    <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Popular Posts</h3>
                    <div className="media post_item">
                        <img src="/src/assets/img/blog/popular-post/post1.jpg" alt="post" />
                        <div className="media-body">
                            <Link to="/blog/single"><h3>Space The Final Frontier</h3></Link>
                            <p>02 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="/src/assets/img/blog/popular-post/post2.jpg" alt="post" />
                        <div className="media-body">
                            <Link to="/blog/single"><h3>The Amazing Hubble</h3></Link>
                            <p>02 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="/src/assets/img/blog/popular-post/post3.jpg" alt="post" />
                        <div className="media-body">
                            <Link to="/blog/single"><h3>Astronomy Or Astrology</h3></Link>
                            <p>03 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="/src/assets/img/blog/popular-post/post4.jpg" alt="post" />
                        <div className="media-body">
                            <Link to="/blog/single"><h3>Asteroids telescope</h3></Link>
                            <p>01 Hours ago</p>
                        </div>
                    </div>
                    <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget ads_widget">
                    <a href="#"><img className="img-fluid" src="/src/assets/img/blog/add.jpg" alt="" /></a>
                    <div className="br"></div>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Post Catgories</h4>
                    <ul className="list cat-list">
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Technology</p>
                                <p>37</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Lifestyle</p>
                                <p>24</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Fashion</p>
                                <p>59</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Art</p>
                                <p>29</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Food</p>
                                <p>15</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Architecture</p>
                                <p>09</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex justify-content-between">
                                <p>Adventure</p>
                                <p>44</p>
                            </a>
                        </li>
                    </ul>
                    <div className="br"></div>
                </aside>
                <aside className="single-sidebar-widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>
                    <p>
                        Here, I focus on a range of items and features that we use in life without
                        giving them a second thought.
                    </p>
                    <div className="form-group d-flex flex-row">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroup"
                                placeholder="Enter email"
                                onFocus={(e) => (e.currentTarget.placeholder = "")}
                                onBlur={(e) => (e.currentTarget.placeholder = "Enter email")}
                            />
                        </div>
                        <a href="#" className="bbtns">Subcribe</a>
                    </div>
                    <p className="text-bottom">You can unsubscribe at any time</p>
                    <div className="br"></div>
                </aside>
                <aside className="single-sidebar-widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Architecture</a></li>
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Art</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Adventure</a></li>
                    </ul>
                </aside>
            </div>
        </>
    )
}

export default BlogSidebar