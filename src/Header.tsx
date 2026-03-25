
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCallback } from 'react'

// Navigate to home and scroll to a section. If already on home, try immediate scroll.
function useScrollNavigation() {
    const navigate = useNavigate()
    const location = useLocation()

    return useCallback((sectionId: string) => {
        // If we're already on home route, try to scroll immediately
        if (location.pathname === '/') {
            const el = document.getElementById(sectionId)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
                return
            }
        }

        // Otherwise save desired section and navigate home where the HomeContent will handle scrolling
        try {
            localStorage.setItem('scrollSection', sectionId)
            navigate('/')
        } catch (e) {
            console.warn('useScrollNavigation error', e)
            // fallback: full reload to root
            window.location.href = '/'
        }
    }, [navigate, location.pathname])
}

function Header() {
    const scrollNav = useScrollNavigation()

    return (
        <>
            <header className="header_area">
                <div id="header" className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <a className="navbar-brand logo_h" href="/"><img src="/src/img/logo.png" width="100" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-end">
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={() => scrollNav('home_area')}>Home</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={() => scrollNav('about_area')}>About</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={() => scrollNav('brand_area')}>Experiences</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={() => scrollNav('feature_area')}>Skills</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={() => scrollNav('portfolio')}>Projects</button>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link"  onClick={() => scrollNav('contact_area')}>Contact</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header