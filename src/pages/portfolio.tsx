// import librarySystem from "/src/img/portfolio/library_system.png"
import pjhnImg from "/src/img/portfolio/pjhn.png"
// import brtfBooking from "/src/img/portfolio/brtf_booking.jpg"
// import blogAdd from "/src/img/blog/add.jpg"
// import mazeGame from "/src/img/portfolio/maze_game.jpg"
import sqlDWH from "/src/img/portfolio/sql_dwh_architecture.png"

function Portfolio() {
    const projects = [
        // {
        //     title: 'Library System',
        //     desc: 'Swing GUI',
        //     img: librarySystem,
        //     github: 'https://github.com/cdo-mdo/MPP_PROJECT',
        //     filter: 'popular'
        // },
        // 
        {
            title: 'SQL Data Warehouse',
            desc: 'SQL Server, Azure',
            img: sqlDWH,
            github: 'https://github.com/hyvogia/SQLDataWarehouse',
            filter: 'latest'
        },
        {
            title: 'Contoso Retail Sales',
            desc: 'Power BI, SQL Server',
            img: 'https://raw.githubusercontent.com/hyvogia/ContosoBIDashboard/refs/heads/main/screencapture.png',
            github: 'https://github.com/hyvogia/ContosoBIDashboard',
            filter: 'latest'
        },
        {
            title: 'PJHN Web',
            desc: 'TS, React',
            img: pjhnImg,
            github: 'https://github.com/hyvogia/PJHN-Web',
            live: 'https://main.d3pjjvush6v5av.amplifyapp.com/',
            filter: 'latest'
        },
        {
            title: 'Workplace Booking System',
            desc: 'C#, ASP.NET MVC',
            img: 'https://raw.githubusercontent.com/hyvogia/WorkplaceSystem/refs/heads/main/screencapture-booking.png',
            github: 'https://github.com/hyvogia/WorkplaceSystem',
            filter: 'latest'
        },
        {
            title: 'Athlete Management System',
            desc: 'C#, ASP.NET MVC',
            img: 'https://raw.githubusercontent.com/hyvogia/CanadaGames/refs/heads/main/cg1.png',
            github: 'https://github.com/hyvogia/CanadaGames',
            filter: 'latest'
        },
        // {
        //     title: 'Inventory System',
        //     desc: 'React, Node.js',
        //     img: 'https://raw.githubusercontent.com/hyvogia/InventorySystem/refs/heads/main/em1.png',
        //     github: 'https://github.com/hyvogia/InventorySystem',
        //     filter: ''
        // },
        // {
        //     title: 'Maze Game',
        //     desc: 'Java Swing',
        //     img: mazeGame,
        //     github: 'https://github.com/hyvogia/labyrinth-java',
        //     filter: 'upcoming'
        // },
        // {
        //     title: 'BioClub',
        //     desc: 'Thymeleaf, Spring',
        //     img: 'https://raw.githubusercontent.com/hyvogia/BioClub/refs/heads/main/screencapture.png',
        //     github: 'https://github.com/hyvogia/BioClub/',
        //     filter: ''
        // },
        
        {
            title: 'Weather Report',
            desc: 'Python, Jupyter Lab',
            img: 'https://raw.githubusercontent.com/hyvogia/WeatherReport/refs/heads/main/screencapture.png',
            github: 'https://github.com/hyvogia/WeatherReport/',
            filter: 'latest'
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
                    <div className="filters-content appear-content">
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