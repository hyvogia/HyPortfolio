

function Portfolio() {
    const projects = [
        {
            title: 'Library System',
            desc: 'Swing GUI',
            img: '/src/assets/img/portfolio/library_system.png',
            github: 'https://github.com/cdo-mdo/MPP_PROJECT',
            filter: 'popular'
        },
        {
            title: 'PJHN',
            desc: 'ASP.NET Core',
            img: '/src/assets/img/portfolio/pjhn.png',
            github: 'https://github.com/hyvogia/PJHN',
            live: 'https://pjhnwebapp-f9gfe9cuc7d6bdfk.centralus-01.azurewebsites.net/',
            filter: ''
        },
        {
            title: 'BRTF Booking System',
            desc: 'ASP.NET Core',
            img: '/src/assets/img/portfolio/brtf_booking.jpg',
            github: 'https://github.com/Kalaghni/BRTF_Project',
            filter: 'popular'
        },
        {
            title: 'Canada Games',
            desc: 'ASP.NET Core',
            img: 'https://raw.githubusercontent.com/hyvogia/CanadaGames/refs/heads/main/cg1.png',
            github: 'https://github.com/hyvogia/CanadaGames',
            filter: ''
        },
        {
            title: 'Medical Office',
            desc: 'ASP.NET Core',
            img: 'https://raw.githubusercontent.com/hyvogia/MedicalOffice/refs/heads/main/mo1.png',
            github: 'https://github.com/hyvogia/MedicalOffice',
            filter: ''
        },
        {
            title: 'Inventory System',
            desc: 'React, Node.js',
            img: 'https://raw.githubusercontent.com/hyvogia/InventorySystem/refs/heads/main/em1.png',
            github: 'https://github.com/hyvogia/InventorySystem',
            filter: ''
        },
        {
            title: 'Consoto Sale Report',
            desc: 'SQL, Power BI',
            img: '/src/assets/img/blog/add.jpg',
            filter: 'upcoming'
        },
        {
            title: 'Maze Game',
            desc: 'Java Swing',
            img: '/src/assets/img/portfolio/maze_game.jpg',
            github: 'https://github.com/hyvogia/labyrinth-java',
            filter: 'upcoming'
        },
        {
            title: 'BioClub',
            desc: 'Thymeleaf, Spring',
            img: 'https://raw.githubusercontent.com/hyvogia/BioClub/refs/heads/main/screencapture.png',
            github: 'https://github.com/hyvogia/BioClub/',
            filter: ''
        }
    ];

    return (
        <>
            <section className="portfolio_area" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title text-left">
                                <h2>projects i built</h2>
                            </div>
                        </div>
                    </div>
                    <div className="filters portfolio-filter">
                        <ul>
                            <li className="active" data-filter="*">all</li>
                            <li data-filter=".popular">popular</li>
                            <li data-filter=".latest"> latest</li>
                            <li data-filter=".following">following</li>
                            <li data-filter=".upcoming">upcoming</li>
                        </ul>
                    </div>
                    <div className="filters-content">
                        <div className="row portfolio-grid justify-content-center">
                            {projects.map((p, idx) => (
                                <div className={`col-lg-4 col-md-6 all ${p.filter || ''}`} key={idx}>
                                    <div className="portfolio_box">
                                        <div className="single_portfolio">
                                            <div className="image_wrap">
                                                <img className="img-fluid" src={p.img} alt={p.title} />
                                                <div className="overlay"></div>
                                                <a href={p.img} className="img-gal">
                                                    <div className="icon">
                                                        <span className="lnr lnr-cross"></span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="short_info">
                                            <h4>{p.title}</h4>
                                            <p>{p.desc}</p>
                                            <div>
                                                {p.github && (
                                                    <a href={p.github}>
                                                        <i className="fa fa-github" style={{ fontSize: '24px' }}></i>
                                                    </a>
                                                )}
                                                {p.live && (
                                                    <a href={p.live} style={{ marginLeft: '8px' }}>
                                                        <i className="fa fa-external-link" style={{ fontSize: '24px' }}></i>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio