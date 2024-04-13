import NewsItem from "../components/NewsItem";
import { useEffect, useState } from "react";

const NewsBoard = ({ category }) => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
			import.meta.env.VITE_API_KEY
		}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setArticles(data.articles));
	}, [category]);

	return (
		<div className="container px-2 py-8 mx-auto sm:px-6 lg:px-8">
			<div className="flex items-center justify-center ">
				<h1 className="mb-2 text-3xl font-bold">
					LATEST <span className="text-red-600">NEWS</span>{" "}
				</h1>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{articles.map((news, index) => (
					<NewsItem
						key={index}
						title={news.title}
						description={news.description}
						src={news.urlToImage}
						url={news.url}
					/>
				))}
			</div>
		</div>
	);
};

export default NewsBoard;
