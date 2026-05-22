function Brand() {
    const logos = [
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
        'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg',
        'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
        'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg',
        'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'

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