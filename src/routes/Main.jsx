import React from "react"
import VideoBackground from "../Components/VideoBackground/VideoBackground"
import FilterBar from "../Components/FilterBar/FilterBar"
import Hero from "../Components/Hero/Hero"
import Projects from "../Components/Projects/Projects"
import ContactUs from "../Components/ContactUs/ContactUs"
import Tail from "../Components/Tail/Tail"
import Categories from "../Components/Categories/Categories"

const MainEn = () => {
    return (
        <>
            <VideoBackground/>
            <FilterBar/>
            <Categories/>
            <Hero/>
            <Projects/>
            <ContactUs/>
            <Tail/>
        </>
    )
}

export default MainEn