import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const MyCarousel = ({carouselProps = {}}) => {
    const config = { ...{
        showThumbs: false,
        autoPlay: true,
        showStatus: false
    }, ...carouselProps };

    
    return (
        <Carousel {...config}>

                <div>
                    <img src="./assets/images/5.jpeg" />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                    <img src="./assets/images/1.jpeg" />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                    <img src="./assets/images/4.jpeg" />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                    <img src="./assets/images/2.jpeg" />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                    <img src="./assets/images/3.jpeg" />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
            </Carousel>
    );
};

export default MyCarousel;