function Brand() {
    const logos = [
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
    ]

    return (
        <>
            <section id="brand_area" className="brand_area section_gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="row">
                                {logos.map((src, i) => (
                                    <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                                        <div className="single-brand-item d-table">
                                            <div className="d-table-cell text-center">
                                                <img src={src} alt={`brand-${i}`} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-4 col-md-6">
                            <div className="client-info">
                                <div className="d-flex mb-50">
                                    <span className="lage">03</span>
                                    <span className="smll">Years Experience Programming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brand