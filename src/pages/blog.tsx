import { useEffect } from "react";
import Header from "../Header"
import BlogCategorie from "./blog_categorie";
import BlogArea from "./blog_area";


function Blog() {
    useEffect(() => {
        document.body.classList.add("blog_version");

        return () => {
            document.body.classList.remove("blog_version");
        };
    }, []);

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
                            <h2>Look, a hidden page :3</h2>
                            <div className="page_link">
                                <a href="index.html">Home</a>
                                <a href="blog.html">My Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================ End Banner Area =================--> */}

            {/* <!--================Blog Categorie Area =================--> */}
            <BlogCategorie />
            {/* <!--================Blog Categorie Area =================--> */}

            {/* <!--================Blog Area =================--> */}
            <BlogArea />
            {/* <!--================Blog Area =================--> */}
        </>
    )
}

export default Blog