import React from "react";
import { ArrowRight } from "lucide-react";
import image from "../assets/breakingNews.jpeg"; // Importing the default image

export default function NewsItem({ title, description, src, url }) {
	return (
		<div className="inline-block h-full my-5 duration-500 hover:-translate-y-2">
			<div className="w-[300px] border shadow-xl h-full flex flex-col rounded-xl">
				<img
					src={src ? src : image} // Using src if provided, otherwise using the default image
					alt="News"
					className="h-[200px] w-full object-cover rounded-t-xl"
				/>
				<div className="flex flex-col justify-between flex-1 p-4">
					<div>
						<h1 className="text-sm font-semibold">{title}</h1>
						<p className="mt-3 text-xs text-gray-600">{description}</p>
					</div>
					<a href={url} className="self-end">
						<button
							type="button"
							className="mt-4 bg-black px-2.5 py-1 text-[13px] font-semibold text-white shadow-sm hover:bg-black/80 flex gap-2 justify-center items-center "
						>
							Read More{" "}
							<span>
								<ArrowRight className="w-4 h-4" />
							</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
