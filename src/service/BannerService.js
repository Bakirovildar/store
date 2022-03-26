import banner1 from "../assets/images/banner-01.jpg";
import banner2 from "../assets/images/banner-02.jpg";
import banner3 from "../assets/images/banner-03.jpg";
import banner4 from "../assets/images/banner-04.jpg";
import banner5 from "../assets/images/banner-05.jpg";
import banner6 from "../assets/images/banner-06.jpg";

class BannerService {
    getAllBanners() {
        return [
            [
                {img: 'https://images.unsplash.com/photo-1580906853149-f82f7601d205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80', label:"Dresses"},
                {img: 'https://images.unsplash.com/photo-1529085216271-4f5b495a450b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', label:"Sunglasses"}
            ],
            [
                {img: 'https://images.unsplash.com/photo-1584735174914-6b1272458e3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', label:"Footwear"},
                {img: 'https://images.unsplash.com/photo-1600717152781-b0d40a7e1486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', label:"Watches"}
            ],
            [
                {img: 'https://images.unsplash.com/photo-1580893724747-03f676ce0a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', label:"Bags"},
                {img: 'https://images.unsplash.com/photo-1623970437305-af22610a0f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', label:"Accessories"}
            ],
        ]
    }
}

export const bannerService = new BannerService()