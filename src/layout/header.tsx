import React from "react"
import Logo from "../ressources/logo.png"
export const Header = () => {
	return (
		<div className={"h-29 grid grid-cols-3 py-9 bg-black text-white mb-10"}>
			<div>
				<img src={Logo} className={"h-24 pl-5"} alt={"logo"} />
			</div>
			<div className={"nav py-10 text-xl flex space-x-24 col-span-2 ml-6"}>
				<button>Acceuil</button>
				<button>Produits</button>
				<button>Nouveautés</button>
			</div>
		</div>
	)
}
