import image from "../assets/breakingNews.jpeg";

export default function NewsItem({ title, description, src, url }) {
	return (
		<div className="inline-block mx-2 my-5">
			<div className="w-[300px]  border shadow-xl">
				<img
					src={src ? src : image}
					alt="Laptop"
					className="h-[200px] w-full object-cover"
				/>
				<div className="p-4">
					<h1 className="text-sm font-semibold">{title}</h1>
					<p className="mt-3 text-xs text-gray-600">{description}</p>

					<a href={url}>
						<button
							type="button"
							className="mt-4  bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 "
						>
							Read More
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
