import React from "react";

function App() {
	return(<>
		<Header />
		<Main />
		<Footer />
	</>);
}

function Header() {
	return (<header>
				<h1>Welcome to My Website</h1>
				<Nav />
			</header>);
}

function Nav() {
	return (<nav>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>);
}

function Main() {
	return (<main>
				<section>
					<h2>About Us</h2>
					<p>We are a company that values excellence and innovation.</p>
				</section>
			</main>);
}

function Footer() {
	return (<footer>
				<p>&copy; 2024 My Website</p>
			</footer>);
}

export default App;
