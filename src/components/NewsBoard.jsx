import NewsItem from "../components/NewsItem";
import { useEffect, useState } from "react";

const NewsBoard = ({ category }) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${"70a23b3eebba459fa7cca01944982be8"}`;
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				return response.json();
			})
			.then((data) => {
				setArticles(data.articles);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, [category]);

	if (loading)
		return (
			<div>
				<div className="flex items-center justify-center w-full h-screen gap-4">
					<div className="flex items-center justify-center w-20 h-20 text-4xl text-red-600 border-8 border-gray-300 rounded-full animate-spin border-t-red-600"></div>
				</div>
			</div>
		);
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="container px-2 py-8 mx-auto sm:px-6 lg:px-8">
			<div className="flex items-center justify-center">
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
