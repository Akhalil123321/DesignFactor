/* eslint-disable eqeqeq */
import {React, useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import TypeWriterEffect from 'react-typewriter-effect';
import Category from '../../Sources/Category/Category'
import point from "../../Images/Logo/part5.png"
import './Categories.css'

// import CategoriesData from '../../Data/CategoriesData'

const Categories = () => {
	const [countOn, setCountOn] = useState(false)
	// const categoriesCards = CategoriesData.map(cardItem => {
	// 	return <Category
	// 		id={cardItem.id}
	// 		{...cardItem}
	// 	/>
	// })
	return (
		<div className='categories-cont'>
		<ScrollTrigger onEnter={() => setCountOn(true)}>
			<div className='main-title-cont main-title small'>
				<img src={point} alt='' className='point'/>
				<div>
						{countOn &&
						<TypeWriterEffect
						cursorColor='transparent'
						text={'OUR SCOPE OF WORK'}
						startDelay={100}
						typeSpeed={20}
						textStyle={{ 
						}}
						/>
				}
				</div>
			</div>
			<div className='main-title large'>
					{countOn &&
					<TypeWriterEffect
					cursorColor='transparent'
					text={'CATEGORIES'}
					startDelay={600}
					typeSpeed={20}
					textStyle={{ 
					}}
					/>
			}
			</div>
			</ScrollTrigger>
			<Category/>
		</div>
	)
}

export default Categories