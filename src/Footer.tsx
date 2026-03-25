

function Footer() {
    return (
        <>
            <footer className="footer_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="footer_top flex-column">
                                <div className="footer_social">
                                    <a href="https://www.facebook.com/profile.php?id=100009867310233"><i className="fa fa-facebook"></i></a>
                                    <a href="https://github.com/hyvogia"><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer_bottom justify-content-center">
                        <p className="col-lg-8 col-sm-12 footer-text">
                            &copy; Hy Vo 2022 | Inspired by <a href="https://colorlib.com/wp/aigars-silkalns/" target="_blank">Aigars Silkalns</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer