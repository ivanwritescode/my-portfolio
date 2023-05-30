import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import "swiper/css"

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { quotations } from "../../util/constants";

const QuotesSection = () => {
    return (
        <div className="quotes container">
            <div className="section-title">
                <h2>Favorite Quotes</h2>
            </div>
            <Swiper
                className="mySwiper"
                spaceBetween={ 10 }
                slidesPerView={ 3 }
                pagination={{ clickable: true }}
                centeredSlides={false}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[ Autoplay, Pagination, Navigation ]}
            >
                {quotations.map((quote, i) =>
                    <SwiperSlide key={ i } style={{ background: 'transparent' }}>
                        <div className="quotes-item">
                            <p>
                                <ImQuotesLeft className="quote-icon-left" />
                                { quote.quote }
                                <ImQuotesRight className="quote-icon-right" /></p>
                            <img src={ quote.portrait } className="quote-image" alt="" />
                            <h3>{ quote.author }</h3>
                        </div>
                    </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default QuotesSection;