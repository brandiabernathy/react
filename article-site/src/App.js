import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Fourths from './components/Fourths';
import articles from './articles';

function App() {
	const fourthsArticles = articles.map(article => {
		return <Fourths key={article.key} image={article.image} title={article.title}/>
	});
	return (
		<div className="App">
			<Header />
			<div className="wrapper">
				<Hero />
				{fourthsArticles}
			</div>
		</div>
	);
}

export default App;
