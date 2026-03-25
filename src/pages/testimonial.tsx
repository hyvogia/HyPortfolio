import { useEffect } from 'react';

import billgates from "../img/testimonials/bill_gates.jpg"
import markzuck from "../img/testimonials/mark_zuckerberg.jpg"
import elonmusk from "../img/testimonials/elon_musk.jpg"

function Testimonial() {
    useEffect(() => {
        const $ = (window as any).$ || (window as any).jQuery;
        if ($ && $('.testi_slider').length && typeof $('.testi_slider').owlCarousel === 'function') {
            $('.testi_slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 2,
                autoplay: true,
                smartSpeed: 2500,
                dots: true,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    991: { items: 2 }
                }
            });
        }
    }, []);

    const testimonials = [
        {
            name: 'Bill Gates',
            quote: '“Patience is a key element of success.”',
            img: billgates
        },
        {
            name: 'Mark Zuckerburg',
            quote: '"The biggest risk is not taking any risk in a world that is changing really quickly, the only strategy that is quarantees to fail is not taking risks.',
            img: markzuck
        },
        {
            name: 'Elon Musk',
            quote: '"I think it is possible for ordinary people to choose to be extraordinary."',
            img: elonmusk
        }
    ];

    return (
        <>
            <div id="testimonial_area" className="testimonial_area section_gap_bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="main_title">
                                <h2>Top Voices</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="testi_slider owl-carousel">
                            {testimonials.map((t, i) => (
                                <div className="testi_item" key={i}>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img src={t.img} alt={t.name} />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="testi_text">
                                                <h4>{t.name}</h4>
                                                <p>{t.quote}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial