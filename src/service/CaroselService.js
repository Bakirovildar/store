import slide1 from "../assets/images/master-slide-01.jpg";
import slide2 from "../assets/images/master-slide-02.jpg";
import slide3 from "../assets/images/master-slide-03.jpg";

class CarouselService {
    getSlidesForHomeCarousel() {
        return [
            {
                img: 'https://images.unsplash.com/photo-1535865732350-3c4e3c2cc1b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
                label: "First slide label",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                img: 'https://images.unsplash.com/photo-1506544777-64cfbe1142df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                label: "Second slide label",
                description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
            },
            {
                img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                label: "Third slide label",
                description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
            },
        ]
    }
}

export const carouselService = new CarouselService()