import React from "react";
import "@fontsource/hauora-sans"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import brotes from "../../img/pexels-dmitriy-zub-8268849.jpg"

//create your first component
export default function Home() {
	return (
		<div className="Home">
			<Navbar />
			<div className="contenedor">
				<Jumbotron />
				<div className="cards">
					<Card

						src="https://images.unsplash.com/photo-1536630596251-b12ba0d9f7d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

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

		<nav className="navbar navbar-expand-lg navbar-light bg-light p-3">

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

		<div className="jumbotron p-5">
			<h1 className="display-4">Terra</h1>
			
			<hr className="my-4"></hr>
			<p className="description pt-20">
			Microvegetales de producción local

			</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Conócenos
				</a>
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

