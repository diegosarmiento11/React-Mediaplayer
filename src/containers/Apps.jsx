import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from  '../components/CarouselItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'


const Apps = () => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
         .then(response => response.json())
         .then(data => setVideos(data));
    }, [])
    console.log(videos)
    
    return(
    <div className="Apps">
        <Header/>
        <Search/>
        <Categories title="Mi lista"> 
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>    
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title="Mis recomendados"> 
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title="Próximamente"> 
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>    
            </Carousel>
        </Categories>
        <Footer/>
    </div>
    )
}


export default Apps