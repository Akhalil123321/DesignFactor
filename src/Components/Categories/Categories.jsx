/* eslint-disable eqeqeq */
import {React} from 'react'
import Category from '../../Sources/Category/Category'
import point from "../../Images/Logo/part5.png"
import './Categories.css'

// import CategoriesData from '../../Data/CategoriesData'

const Categories = () => {
	// const categoriesCards = CategoriesData.map(cardItem => {
	// 	return <Category
	// 		id={cardItem.id}
	// 		{...cardItem}
	// 	/>
	// })
	return (
		<div className='categories-cont'>
			<div className='main-title-cont main-title small'>
				<img src={point} alt='' className='point'/> 
				<span>OUR SCOPE OF WORK</span>
			</div>
		<div className='main-title large'>CATEGORIES</div>
			<Category/>
		</div>
	)
}

export default Categories