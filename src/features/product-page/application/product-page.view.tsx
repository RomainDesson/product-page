import React from "react"
import SneakersImg from "../../../ressources/sneakers.png"
import { Header } from "../../../layout/header"
import { Footer } from "../../../layout/footer"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { CardForm } from "../../card-form/card-form"
const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG")
interface IProps {
	sizeButton: string
}

export const ProductPageView = ({ sizeButton }: IProps) => {
	return (
		<>
			<Header />
			<div className={"grid grid-cols-2"}>
				<div className={"row-span-2 h-screen"}>
					<img src={SneakersImg} alt={"sneakers"} />
				</div>
				<div className={"px-10"}>
					<div className={"product-decription"}>
						<h2 className={"mb-10 text-4xl"}>AIR JORDAN 1 Retro High</h2>
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
						<button className={sizeButton}>38</button>
						<button className={sizeButton}>39</button>
						<button className={sizeButton}>40</button>
						<button className={sizeButton}>41</button>
						<button className={sizeButton}>42</button>
						<button className={sizeButton}>43</button>
						<button className={sizeButton}>44</button>
						<button className={sizeButton}>45</button>
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
			<Elements stripe={stripePromise}>
				<CardForm />
			</Elements>
			<Footer />
		</>
	)
}
