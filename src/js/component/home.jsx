import React from "react";
import { Link } from "react-router-dom";
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
						id= "microvegetales"
						src="https://images.unsplash.com/photo-1536630596251-b12ba0d9f7d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						title="Microvegetales"
						text="Las microverduras son plántulas jóvenes de vegetales y hierbas comestibles. A diferencia de las hierbas y vegetales más grandes que tardan semanas o meses en crecer, los microvegetales se pueden cosechar y a partir de la primera semana después de que se hayan desarrollado las hojas del cotiledón."
						href="https://www.hortalizas.com/cultivos/coles-de-hojas/el-cultivo-de-microverduras/"
					/>
					<Card
						id="right"
						src="https://cdn.pixabay.com/photo/2014/07/10/20/55/mushrooms-389421_960_720.jpg"
						title="Setas Gourmet"
						text="Las setas son un alimento muy saludable que debe ser incluido en la dieta. Las razones sobran: son ricas en hierro, fósforo, yodo, magnesio, selenio, calcio, potasio, zinc, vitaminas A, y vitaminas del grupo B (concretamente B1, B2, B3) C y D. Se trata de un alimento rico en agua, sin grasa, con proteínas de alta calidad y fibra, en definitiva, un alimento muy saludable."
						href="https://www.businessinsider.es/13-alucinantes-beneficios-comer-setas-salud-debes-conocer-871453"
					/>
					<Card
						id= "hidroponico"
						src="https://cdn.pixabay.com/photo/2017/03/13/12/16/greenhouse-2139526_960_720.jpg"
						title="Cultivo Hidropónico"
						text="Gracias al cultivo hidropónico podemos ofrecer una gran variedad de verduras frescas y de alto valor nutritivo y al mismo tiempo usar el mínimo de agua requerido para su desarrollo por lo que hacemos una gestión sostenible de la misma."
						href="https://ecoinventos.com/las-5w-del-cultivo-hidroponico/"
					/>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

const Navbar = () => {
	const aviso = () => {
		return (alert("Página en construcción"))
	}
	return (
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Terra</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						
						<li className="nav-item" onClick={aviso}>
						<a className="nav-link" href="#" >Conócenos</a>
						</li>
						<li className="btn-group dropstart">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Servicios
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<li><a className="dropdown-item" href="#microvegetales">Microvegetales</a></li>
							<li><a className="dropdown-item" href="#right">Setas Gourmet</a></li>
							<li><a className="dropdown-item" href="#hidroponico">Cultivo Hidropónico</a></li>
						</ul>
						</li>
					</ul>
					</div>
				</div>
			</nav>
	);
};
const Jumbotron = () => {
	const aviso = () => {
		return (alert("Página en construcción"))
	}
	return (
		<div className="jumbotron p-5">
			<h1 className="name display-4">Terra</h1>
			
			<hr className="my-4"></hr>
			<p className="description pt-20">
			Microvegetales de producción local
			</p>
				<a className="btn btn-primary btn-lg" href="#" role="button" onClick={aviso}>
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
					Saber más
				</a>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
			<div className="container text-center">
			<small>Copyright &copy; Terra</small>
			</div>
		</footer>
	)
}