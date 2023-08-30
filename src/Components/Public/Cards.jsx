/** @format */

import { useEffect, useState } from "react";
import RickAndMortyService from "../../Services/RickAndMorty.service";
import Card from "./Card";

const Cards = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		crearLista();
	}, []);

	let crearLista = async () => {
		const data = await RickAndMortyService.getAllCharacters();

		setList(data.results);
	};
	return (
		<div className="album py-5 bg-body-tertiary">
			<div className="container">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{list.map((item) => (
						<Card
							key={item.id}
							name={item.name}
							image={item.image}
							id={item.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cards;
