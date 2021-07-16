import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Fourths from './components/Fourths';
import Footer from './components/Footer';
import articles from './articles';

function App() {
	const fourthsArticles = articles.map(article => {
		return <Fourths key={article.key} image={article.image} title={article.title}/>
	});
	return (
		<div className="App">
			<Header />
			<div className="wrapper">
				<Hero/>
				<div className="flex">
					{fourthsArticles}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
