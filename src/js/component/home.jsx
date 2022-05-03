import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function Home() {
	return (
		<div className="Home">
			<Navbar />
			<div className="contenedor">
				<Jumbotron />
				<div className="cards">
					<Card
						src="https://cdn.pixabay.com/photo/2016/06/14/19/23/green-1457327_960_720.jpg"
						title="Microvegetales"
						text="Herramientas de trabajo"
						href="https://es.wikipedia.org/wiki/Herramienta"
					/>
					<Card
						id="right"
						src="https://cdn.pixabay.com/photo/2014/07/10/20/55/mushrooms-389421_960_720.jpg"
						title="Setas Gourmet"
						text="Empezamos la mañana"
						href="https://miempresaessaludable.com/buenos-habitos-salud/"
					/>
					<Card
						src="https://cdn.pixabay.com/photo/2017/03/13/12/16/greenhouse-2139526_960_720.jpg"
						title="Cultivo Hidropónico"
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
				Terra
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
				className="collapse navbar-collapse d-flex flex-row-reverse"
				id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Conócenos <span className="sr-only">(current)</span>
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
							Servicios
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								Microvegetales
							</a>
							<a className="dropdown-item" href="#">
								Setas Gourmet
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								Cultivo hidropónico
							</a>
						</div>
					</li>
				</ul>
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
		<div className="card" id={props.id} style={{ width: "18rem" }}>
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
