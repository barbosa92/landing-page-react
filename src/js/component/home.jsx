import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Home() {
	return (
		<div className="Home">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="cards">
					<Card
						src="https://picsum.photos/id/1/200/200"
						title="Ordenador"
						text="Herramientas de trabajo"
						href="https://es.wikipedia.org/wiki/Herramienta"
					/>
					<Card
						src="https://picsum.photos/id/0/200/200"
						title="Working"
						text="Empezamos la mañana"
						href="https://miempresaessaludable.com/buenos-habitos-salud/"
					/>
					<Card
						src="https://picsum.photos/id/1029/200/200"
						title="Office´s landscape"
						text="Descansando antes de volver al trabajo"
						href="https://www.anteaprevencion.com/descanso-en-el-trabajo/#:~:text=El%20descanso%20en%20el%20trabajo%20consiste%20en%20una%20pausa%20diaria,fatiga%20producida%20por%20su%20labor."
					/>
				</div>
			</div>
		</div>
	);
}

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Disabled
						</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"></input>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};
const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4"></hr>
			<p>
				It uses utility classNamees for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};

const Card = (props) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src={props.src}
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href={props.href} className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
