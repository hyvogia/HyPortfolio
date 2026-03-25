

function BlogCategorie() {
    return (
        <>
            <section className="blog_categorie_area section_gap_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="categories_post">
                                <img src="/src/assets/img/blog/cat-post/pexels-luis-gomes-166706-546819.jpg" alt="post" />
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-tech.html">
                                            <h5>Tech Tips</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>Quick insights and hacks for smarter coding and tech management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categories_post">
                                <img src="/src/assets/img/blog/cat-post/pexels-polina-kovaleva-5546879.jpg" alt="post" />
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-essay.html">
                                            <h5>Essay Corner</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>A collection of my reflective and analytical writings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categories_post">
                                <img src="/src/assets/img/blog/cat-post/pexels-minan1398-1629212.jpg" alt="post" />
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-thoughts.html">
                                            <h5>Random Thoughts</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>A space for musings and everything in between</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogCategorie