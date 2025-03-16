import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { render } from 'react-dom';
import spotlight from 'strings/spotlight.json';
import 'swiper/css/bundle';

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const defaultSwiperOptions = {
    loop: true,
    centeredSlides: true,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    modules: [Pagination, EffectFade, Autoplay],
    effect: 'fade',
};


const Spotlight = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const handleImagesReady = () => {
        setImagesLoaded(true);
    };

    // Shuffle the spotlight array
    const shuffledSpotlight = [...spotlight];
    shuffleArray(shuffledSpotlight);

    if (!shuffledSpotlight.length) {
        return null;
    }
    return (
        <Swiper {...defaultSwiperOptions} onImagesReady={handleImagesReady}>
            {shuffledSpotlight.map((element) => (
                <SwiperSlide key={element.id}>
                    <a href={element.id === 'jellyseerr' ? 'https://gautrang.net' : `/#/details?id=${element.id}`} target='_top' rel='noreferrer'>
                        <div className='swiper-left'>
                            <img className='swiper-logo' src={element.id === 'jellyseerr' ? '/jellyseerr.png' : `https://9.lw.itsby.design/gnartuag/jellyfin/Items/${element.id}/Images/Logo?quality=50`} loading='lazy' />
                            <p className='swiper-content'>{element.content}</p>
                        </div>
                        <div className='swiper-right'>
                            <img className='swiper-backdrop' src={element.id === 'jellyseerr' ? '/jellyseerr.gif' : `https://9.lw.itsby.design/gnartuag/jellyfin/Items/${element.id}/Images/Backdrop/0?maxWidth=720`} loading='lazy' />
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

render(<Spotlight />, document.querySelector('.spotlight'));