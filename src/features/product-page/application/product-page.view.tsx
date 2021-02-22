import React from "react"
import "./product-page.css"
import SneakersImg from "../../../ressources/sneakers.png"
import { Header } from "../../../layout/header"
import { Footer } from "../../../layout/footer"
export const ProductPageView = () => {
	return (
		<>
			<Header />
			<div className={"container grid grid-cols-2"}>
				<div className={"row-span-2 h-screen"}>
					<img src={SneakersImg} alt={"sneakers"} />
				</div>
				<div className={"px-10"}>
					<div className={"product-decription"}>
						<h2 className={"mb-5"}>AIR JORDAN 1 Retro High</h2>
						<p className={"mb-10"}>
							La Air Jordan 1 High Dark Mocha est l&apos;une des sorties les
							plus attendues de cette année. Ce modèle iconique est cette fois
							ci re-travaillé par Nike qui nous dévoile un coloris rappelant la
							Jordan 1 Travis Scott.
						</p>
						<p className={"mb-10"}>
							Cette version de la Air Jordan 1 se compose principalement
							d’empiècements noirs sur une empeigne en cuir box blanc, on
							retrouve aussi des pièces en suède marron à l&apos;arrière de la
							paire. Le branding traditionnel de Jordan est présent avec le
							Swoosh noir et le Jordan Wings. Une outsole noire vient finaliser
							les derniers détails de la création !
						</p>
						<p className={"mb-20"}>
							Une silhouette OG, un cuir de qualité et un coloris attendu, un
							combo parfait pour que cette AJ1 Dark Mocha devienne un nouveau «
							must-have » !
						</p>
					</div>
					<div className={"product-params mb-20"}>
						<h2>Tailles :</h2>
						<button className={"bg-gray-100 px-10 m-1"}>38</button>
						<button className={"bg-gray-100 px-10 m-1"}>39</button>
						<button className={"bg-gray-100 px-10 m-1"}>40</button>
						<button className={"bg-gray-100 px-10 m-1"}>41</button>
						<button className={"bg-gray-100 px-10 m-1"}>42</button>
						<button className={"bg-gray-100 px-10 m-1"}>43</button>
						<button className={"bg-gray-100 px-10 m-1"}>44</button>
						<button className={"bg-gray-100 px-10 m-1"}>45</button>
					</div>
					<div className={"buy-button"}>
						<button
							className={"bg-blue-500 text-white p-4 rounded-lg font-bold"}
						>
							Acheter maintenant
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
