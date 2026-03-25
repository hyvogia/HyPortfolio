import Footer from "../Footer";
import Header from "../Header";
import Contact from "./contact";


function Details() {
    return (
        <>
            {/* <!--================ Start Header Area =================--> */}
            <Header />
            {/* <!--================ End Header Area =================--> */}

            {/* <!--================Start Portfolio Details Area =================--> */}
            <section className="portfolio_details_area section_gap_top">
                <div className="container">
                    <div className="portfolio_details_inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left_img">
                                    <img className="img-fluid" src="/src/img/portfolio/library_system.png" alt="" />
                                </div>
                            </div>
                            <div className="offset-lg-1 col-lg-5">
                                <div className="portfolio_right_text mt-30">
                                    <h4 className="text-uppercase">Java Library System</h4>
                                    <p>
                                        The system allows librarians to check out books for library members, while administrators can manage the library collection and membership. Administrators can add new books, create new library member profiles, and update member information.
                                    </p>
                                    <ul className="list">
                                        <li>
                                            <span>Rating</span>:
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li><span>Client</span>: M. Zijlstra</li>
                                        <li><span>Website</span>: https://github.com/cdo-mdo/MPP_PROJECT</li>
                                        <li><span>Completed</span>: Oct 13, 2024</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p>The project involves designing and implementing a system in Java. The design process includes creating className diagrams to represent attributes, operations, associations, and inheritance relationships. Sequence diagrams will be developed to model various use cases, ensuring functionality aligns with the requirements. The user interface will be designed using Java Swing, providing a usable front-end experience. Instead of interacting with a database, the system will employ object serialization for reading and writing data.</p>
                    </div>
                </div>
            </section>
            {/* <!--================End Portfolio Details Area =================--> */}

            {/* <!--================Contact Area =================--> */}
            <Contact />
            {/* <!--================Contact Area =================--> */}

            {/* <!--================Footer Area =================--> */}
            <Footer />
            {/* <!--================End Footer Area =================--> */}
        </>
    )
}

export default Details