import React from 'react'
import CategoryCardContainer from './CategoryCardContainer'

const CategoryListComponent = ({ drinks }) => {
	const categories = drinks.map((drink) => drink.category[0])

	const uniqueCategories = [...new Set(categories)]
	console.log(categories)

	const categoryContainer = uniqueCategories.map((category) => {
		return <CategoryCardContainer key={category} drinks={drinks} category={category} />
	})

	return <div>{categoryContainer}</div>
}

export default CategoryListComponent
