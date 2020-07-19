import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App min-h-screen w-screen py-20">
			<div className="container mx-auto">
				<div className="flex  justify-between items-center mx-auto">
					<div className="border border-gray-400 shadow rounded w-full lg:w-1/2 lg:mr-2">
						<p className="text-left p-3 pb-0 font-bold">Covid overview</p>
						<div className="flex justify-between items-start py-8 pb-10">
							<div className="md:w-1/3 w-full">
								<p className="text-red-600 text-2xl lg:text-3xl">36,107</p>
								<p className="text-gray-600 font-semibold">Confirmed Cases</p>
							</div>

							<div className="md:w-1/3 w-full">
								<p className="text-green-600 text-2xl lg:text-3xl">36,107</p>
								<p className="text-gray-600 font-semibold">Recovered</p>
							</div>

							<div className="md:w-1/3 w-full">
								<p className="text-gray-600 text-2xl lg:text-3xl">36,107</p>
								<p className="text-gray-600 font-semibold">Deaths</p>
							</div>
						</div>
					</div>
					<div className=" flex justify-between items-start py-8 pb-10 w-full lg:w-1/2 lg:ml-2">
						<div className="w-full md:w1/2 border border-gray-400 shadow rounded md:mr-2">
							<p>Recovery rate</p>
						</div>
						<div className="w-full md:w1/2 border border-gray-400 shadow rounded md:ml-2">
							<p>Fatality rate</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
