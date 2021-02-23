import React from "react"
import { ProductPageView } from "./product-page.view"

export const ProductPageContainer = () => {
	const sizeButton = "bg-gray-100 px-10 m-1"
	return <ProductPageView sizeButton={sizeButton} />
}
