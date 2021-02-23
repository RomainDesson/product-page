import React from "react"

export const Footer = () => {
	return (
		<div className={"h-24 text-white"}>
			<div className={"grid grid-cols-3 grid-rows-2 bg-black"}>
				<div className={"col-span-3 text-center"}>
					<h2 className={"text-3xl mt-10 mb-5 font-bold"}>
						Inscrivez vous à notre newsletter et bénéficiez de 15$ offert !
					</h2>
					<h3 className={"text-xl mb-5"}>
						Dernières sorties, offres exclusives et événements à ne pas manquer
						:
						<br /> restez informés de toute notre actualité !
					</h3>
					<input type={"text"} className={"h-10 w-1/4 text-black"} />
				</div>
				<div>
					<h4 className={"text-xl mb-5 mt-10 font-bold"}>Contact</h4>
					<ul>
						<li>Appelez nous: 01 83 XX XX XX</li>
						<li>(du lundi au vendredi - de 10h à 19h)</li>
						<li>Ecrivez nous: help@random.com</li>
						<li>Favicon</li>
					</ul>
				</div>
				<div>
					<h4 className={"text-xl mb-5 mt-10 font-bold"}>En savoir plus</h4>
					<ul>
						<li>Concept</li>
						<li>Authenticité & FAQ</li>
						<li>Vendez vos produits</li>
						<li>Échanges et remboursements</li>
						<li>Mentions légales</li>
						<li>Recrutement</li>
						<li>CGU</li>
						<li>CGV</li>
					</ul>
				</div>
				<div>
					<h4 className={"text-xl mb-5 mt-10 font-bold"}>
						Trouvez votre produit
					</h4>
					<ul>
						<li>Recherche</li>
						<li>Nouveautés</li>
						<li>En dessous de 50$</li>
						<li>Prochaines Sorties</li>
						<li>Collections Sneakers</li>
						<li>Collections Streetwear</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
