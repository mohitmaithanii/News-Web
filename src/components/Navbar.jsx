import React from "react";
import { Menu, X, Newspaper } from "lucide-react";

const menuItems = [
	{
		name: "Home",
		href: "#",
	},
	{
		name: "About",
		href: "#",
	},
	{
		name: "Contact",
		href: "#",
	},
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="relative w-full bg-red-500">
			<div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="inline-flex items-center space-x-2 text-white">
					<span>
						<Newspaper />
					</span>
					<span className="font-bold">News.Web</span>
				</div>
				<div className="items-start hidden grow lg:flex">
					<ul className="inline-flex ml-12 space-x-8">
						{menuItems.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className="text-sm font-semibold text-white hover:text-gray-900"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className="lg:hidden">
					<Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
				</div>
				{isMenuOpen && (
					<div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden">
						<div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
							<div className="px-5 pt-5 pb-6">
								<div className="flex items-center justify-between">
									<div className="inline-flex items-center space-x-2">
										<span>
											<Newspaper className="text-red-400" />
										</span>
										<span className="font-bold">News.Web</span>
									</div>
									<div className="-mr-2">
										<button
											type="button"
											onClick={toggleMenu}
											className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 "
										>
											<span className="sr-only">Close menu</span>
											<X className="w-6 h-6" aria-hidden="true" />
										</button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-4">
										{menuItems.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="flex items-center p-3 -m-3 text-sm font-semibold rounded-md hover:bg-gray-50"
											>
												<span className="ml-3 text-base font-medium text-gray-900">
													{item.name}
												</span>
											</a>
										))}
									</nav>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
