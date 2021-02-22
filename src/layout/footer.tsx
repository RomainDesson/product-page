import React from "react"

export const Footer = () => {
	return (
		<div className={"container h-24 text-white"}>
			<div className={"grid grid-cols-3 grid-rows-2 bg-black"}>
				<div className={"col-span-3 text-center"}>
					<h2>
						Inscrivez vous à notre newsletter et bénéficiez de 15$ offert !
					</h2>
					<h3>
						Dernières sorties, offres exclusives et événements à ne pas manquer
						: restez informés de toute notre actualité !
					</h3>
					<input type={"text"} />
				</div>
				<div>
					Contact
					<ul>
						<li>Appelez nous: 01 83 XX XX XX</li>
						<li>(du lundi au vendredi - de 10h à 19h)</li>
						<li>Ecrivez nous: help@random.com</li>
						<li>Favicon</li>
					</ul>
				</div>
				<div>
					En savoir plus
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
					Trouvez votre produit
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
