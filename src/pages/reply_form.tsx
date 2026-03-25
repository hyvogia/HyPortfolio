

function ReplyForm() {
    return (
        <>
            <div className="comment-form">
                <h4>Leave a Reply</h4>
                <form>
                    <div className="form-group form-inline">
                        <div className="form-group col-lg-6 col-md-6 name">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter Name"
                                onFocus={(e) => (e.currentTarget.placeholder = "")}
                                onBlur={(e) => (e.currentTarget.placeholder = "Enter Name")}
                            />
                        </div>

                        <div className="form-group col-lg-6 col-md-6 email">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email address"
                                onFocus={(e) => (e.currentTarget.placeholder = "")}
                                onBlur={(e) => (e.currentTarget.placeholder = "Enter email address")}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            onFocus={(e) => (e.currentTarget.placeholder = "")}
                            onBlur={(e) => (e.currentTarget.placeholder = "Subject")}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            className="form-control mb-10"
                            rows={5}
                            name="message"
                            placeholder="Message"
                            onFocus={(e) => (e.currentTarget.placeholder = "")}
                            onBlur={(e) => (e.currentTarget.placeholder = "Message")}
                            required
                        />
                    </div>

                    <button type="submit" className="primary-btn primary_btn">
                        <span>Post Comment</span>
                    </button>
                </form>
            </div>
        </>
    )
}

export default ReplyForm