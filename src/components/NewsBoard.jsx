import NewsItem from "../components/NewsItem";
import { useEffect, useState } from "react";

const NewsBoard = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
			import.meta.env.VITE_API_KEY
		}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setArticles(data.articles));
	}, []);
	return (
		<>
			<h2 className="mt-2 text-2xl font-bold text-center">
				Latest{" "}
				<span className="px-2 text-white bg-red-500 rounded-lg ">News</span>
			</h2>
			{articles.map((news, index) => {
				return (
					<NewsItem
						key={index}
						title={news.title}
						description={news.description}
						src={news.urlToImage}
						url={news.url}
					/>
				);
			})}
		</>
	);
};

export default NewsBoard;
