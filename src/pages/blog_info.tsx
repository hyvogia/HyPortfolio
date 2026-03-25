

function BlogInfo() {
    return (
        <>
            <div className="blog_info text-right">
                <div className="post_tag">
                    <a href="#">Food,</a>{' '}
                    <a className="active" href="#">Technology,</a>{' '}
                    <a href="#">Politics,</a>{' '}
                    <a href="#">Lifestyle</a>
                </div>
                <ul className="blog_meta list">
                    <li><a href="#">Mark wiens<i className="lnr lnr-user"></i></a></li>
                    <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full"></i></a></li>
                    <li><a href="#">1.2M Views<i className="lnr lnr-eye"></i></a></li>
                    <li><a href="#">06 Comments<i className="lnr lnr-bubble"></i></a></li>
                </ul>
            </div>
        </>
    )
}

export default BlogInfo