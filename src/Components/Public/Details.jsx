/** @format */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RickAndMortyService from "../../Services/RickAndMorty.service";

const Details = () => {
	const [info, setInfo] = useState({});
	const { id } = useParams();
	useEffect(() => {
		RickAndMortyService.getCharacterById(id).then((data) => {
			setInfo(data);
		});
	}, []);

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="card mt-5" style={{ width: " 18rem" }}>
					<img src={info.image} className="card-img-top" alt={info.name} />
					<div className="card-body">
						<strong className="d-inline-block mb-2 text-success">
							{info.species}
						</strong>
						<h5 className="card-title">{info.name}</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<Link
							to={"/"}
							className="btn btn-outline-dark link-underline link-underline-opacity-0"
						>
							volver
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;

//<Link to={"/"} classNameNameName="mt-3 btn btn-primary btn-lg">
// Volver
// </Link>
