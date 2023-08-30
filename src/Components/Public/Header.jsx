/** @format */
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header className="p-3 text-bg-dark">
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<NavLink to={"/"} className="nav-link px-2 text-secondary">
							<img
								src="/image/logo.png"
								width="45"
								className="rounded-circle"
								alt="rick"
							/>
						</NavLink>
						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<NavLink to={"/"} className="nav-link px-2 text-secondary">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to={"/Main2"} className="nav-link px-2 text-white">
									Planes
								</NavLink>
							</li>
							<li>
								<NavLink to={"/user-form"} className="nav-link px-2 text-white">
									Registro
								</NavLink>
							</li>
						</ul>

						<form
							className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
							role="search"
						>
							<input
								type="search"
								className="form-control form-control-dark text-bg-dark"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>

						<div className="text-end">
							<button type="button" className="btn btn-outline-light me-2">
								Login
							</button>
							<button type="button" className="btn btn-warning">
								Sign-up
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
