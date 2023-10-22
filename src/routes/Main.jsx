import React from "react"
import VideoBackground from "../Components/VideoBackground/VideoBackground"
import FilterBar from "../Components/FilterBar/FilterBar"
import OurClients from "../Components/OurClients/OurClients"
import Hero from "../Components/Hero/Hero"
import Projects from "../Components/Projects/Projects"
import Categories from "../Components/Categories/Categories"

const MainEn = () => {
    return (
        <>
            <VideoBackground/>
            {/* <FilterBar/> */}
            <Categories/>
            <Hero/>
            <Projects/>
            <OurClients/>
        </>
    )
}

export default MainEn