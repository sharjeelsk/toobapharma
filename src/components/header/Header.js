import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import Tooba from '../../images/tooba.jpg.png'

const Header = ({id}) => {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top" >
	<div class="container-fluid">
		<a class="navbar-brand" href="/"><img src={Tooba} alt="k" class="logoimg" /></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<Link class={id===1?"nav-link active":"nav-link"} to="/">Home</Link>
			</li>
			<li class="nav-item">
				<Link class={id===2?"nav-link active":"nav-link"} to="/aboutus">About Us</Link>
			</li>
			<li class="nav-item">
				<Link class={id===3?"nav-link active":"nav-link"} to="/products">Products</Link>
			</li>
			<li class="nav-item">
				<Link class={id===4?"nav-link active":"nav-link"} to="/rdcrams">R&D crams</Link>
			</li>
			<li class="nav-item">
				<Link class={id===5?"nav-link active":"nav-link"} to="/media">Media</Link>
			</li>
			<li class="nav-item">
				<Link class={id===6?"nav-link active":"nav-link"} to="/careers">Careers</Link>
			</li>
			<li class="nav-item">
				<Link class={id===7?"nav-link active":"nav-link"} to="/contact">Contact</Link>
			</li>
		</ul>
	</div>
</div>
</nav>
    );
}

export default Header;