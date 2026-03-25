import BlogSidebar from "./blog_sidebar"
import ReplyForm from "./reply_form"


function Zombie() {
    return (
        <>
            {/* <!--================Blog Area =================--> */}
            <section className="blog_area single-post-area section_gap_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post row">
                                <div className="col-lg-12">
                                    <div className="feature-img">
                                        <a href="https://www.artstation.com/artwork/QLbXd">
                                            <img className="img-fluid" src="/src/assets/img/blog/main-blog/abandoned-home.jpg" style={{ width: "750px", height: "350px" }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3  col-md-3">
                                    <div className="blog_info text-right">
                                        <div className="post_tag">
                                            <a href="blog-tech.html">Tech,</a>
                                            <a href="blog-essay.html">Essays,</a>
                                            <a href="blog-thoughts.html" className="active">Thoughts</a>
                                        </div>
                                        <ul className="blog_meta list">
                                            <li><a>Hy Vo<i className="lnr lnr-user"></i></a></li>
                                            <li><a>Nov 7, 2024<i className="lnr lnr-calendar-full"></i></a></li>
                                            <li><a href="#">0 Views<i className="lnr lnr-eye"></i></a></li>
                                            <li><a href="#">0 Comments<i className="lnr lnr-bubble"></i></a></li>
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
                                    <h2>The Office Siege: A Zombie Apocalypse Dream</h2>
                                    <p className="excert">I had this dream last night—one that felt so real, I woke up with my heart pounding. It started like any other nightmare: chaos, panic, the streets filled with the undead. But what stood out was how vivid it was, how every detail felt like I was living it.</p>
                                    <p>The dream began in a city, overrun by zombies. My group of survivors and I managed to retreat into an office building—a towering fortress with dozens of floors. We quickly barricaded the lower levels, hoping the height and barriers would buy us time.</p>
                                    <p>As days passed, the zombies grew relentless. They didn’t just swarm—they dug, they clawed, they adapted. Each night, we’d hear the distant sound of crumbling concrete as they broke through another layer of defenses, forcing us to retreat higher. By the third day, we found temporary solace on the top floors.</p>
                                    <p>Up there, we discovered something incredible: a rooftop garden brimming with vegetables, and an office filled with functioning computers and survival supplies. It was a stroke of luck we desperately needed. We rationed the food, used the computers to map possible escape routes, and kept ourselves sane by rotating shifts to monitor the stairwells.</p>
                                    <p>By the fifth night, the zombies breached the floor directly below us. The sound of shattering glass and the dull thud of their bodies hitting the walls was deafening. We were down to a few survivors now, our garden stripped of its last resources, our nerves frayed.</p>
                                    <p>In a desperate bid for survival, we hatched a plan. If we couldn’t hold the building, we’d have to escape into the city’s underground subway tunnels. But as we prepared, the final barricade on the floor below splintered.</p>
                                    <p>The dream ended there.</p>
                                    <p>Just as the first zombie’s clawed hand gripped the final stair railing, I woke up. Cold sweat soaked my shirt, and I stared at the ceiling, wondering how it would’ve ended. Would we have made it out? Or were we doomed to be consumed?</p>
                                    <p>I guess I’ll never know… until the next dream.</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="quotes">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="img-fluid" src="/src/assets/img/blog/post-img1.jpg" alt="" />
                                        </div>
                                        <div className="col-6">
                                            <img className="img-fluid" src="/src/assets/img/blog/post-img2.jpg" alt="" />
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
                                            <a href="#"><img className="img-fluid" src="/src/assets/img/blog/prev.jpg" alt="" /></a>
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
                                            <a href="#"><img className="img-fluid" src="/src/assets/img/blog/next.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-area" style={{ marginBottom: "40px" }}>
                                <h4>02 Comments</h4>
                                <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex">
                                        <div className="user justify-content-between d-flex">
                                            <div className="thumb">
                                                <img src="/src/assets/img/blog/rick_grimes.webp" style={{ width: "60px", height: "60px" }} alt="Rick" />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Rick Grimes</a></h5>
                                                <p className="date">Nov 8, 2024 at 3:12 pm </p>
                                                <p className="comment">"Ah yes, because obviously zombies would have the structural engineering expertise to turn an office building into Swiss cheese one floor at a time!"</p>
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
                                                <img src="/src/assets/img/blog/author.jpg" style={{ width: '60px', height: "60px" }} alt="Hy" />
                                            </div>
                                            <div className="desc">
                                                <h5><a href="#">Author</a></h5>
                                                <p className="date">Nov 8, 2024 at 4:13 pm </p>
                                                <p className="comment">
                                                    Hey!
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
                                                <img src="/src/assets/img/blog/c3.jpg" alt="" />
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
                                                <img src="/src/assets/img/blog/c4.jpg" alt="" />
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
                                                <img src="/src/assets/img/blog/c5.jpg" alt="" />
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
        </>
    )
}

export default Zombie