export default function NewsItem({ title, description, src, url }) {
	return (
		<div className="inline-block mx-3 my-4">
			<div className="w-[300px] rounded-md border">
				<img
					src={src}
					alt="Laptop"
					className="h-[200px] w-full rounded-md object-cover"
				/>
				<div className="p-4">
					<h1 className="text-lg font-semibold">{title}</h1>
					<p className="mt-3 text-sm text-gray-600">{description}</p>

					<a href={url}>
						<button
							type="button"
							className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
						>
							Read More
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
