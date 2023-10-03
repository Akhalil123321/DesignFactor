import React from 'react'
import point from "../../Images/Logo/part5.png"
import CategoriesData from '../../Data/CategoriesData'
import Category from '../../Sources/Category/Category'
import './Categories.css'

const Categories = () => {
	const categoriesCards = CategoriesData.map(cardItem => {
		return <Category
			id={cardItem.id}
			{...cardItem}
		/>
	})
  return (
			<div className='categories-cont'>
					<div className='main-title-cont main-title small'>
						<img src={point} alt='' className='point'/> 
						<span>OUR SCOPE OF WORK</span>
					</div>
				<div className='main-title large'>CATEGORIES</div>
					<div className='categories-content-box'>
							{categoriesCards}
					</div>
			</div>
  )
}

export default Categories