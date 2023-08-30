/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, image, id }) {
	return (
		<div className="col">
			<div className="card shadow-sm">
				<img src={image} alt="imagen" />
				<h3 className="text-warning">{name}</h3>
				<div className="card-body">
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</p>
					<div className="d-flex justify-content-between align-items-center">
						<button type="button" className="btn btn-sm btn-outline-secondary ">
							<Link
								to={`/details/${id}`}
								className="link-underline link-underline-opacity-0 link-dark"
							>
								Detalles
							</Link>
						</button>

						<small className="text-body-secondary">9 mins</small>
					</div>
				</div>
			</div>
		</div>
	);
}
