/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-mixed-spaces-and-tabs */
// eslint-disable-next-line react/prop-types
import React, { useState } from "react";
import "./table.css";
import { Table } from "./table";

const Orders = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const rowData = React.useMemo(() => data, [data]);
	const columns = React.useMemo(
		() => [
			{
				Header: "State",
				accessor: "state", // accessor is the "key" in the data
			},
			{
				Header: "Total Confirmed Cases",
				accessor: "confirmedCases",
			},
			{
				Header: "Total Discharged",
				accessor: "discharged",
			},
			{
				Header: "Cases On Admission",
				accessor: "casesOnAdmission",
			},
			{
				Header: "Death ",
				accessor: "death",
			},
		],
		[]
	);
	const [selectedRows, setSelectedRows] = useState(columns);

	const [searchParam, setSearchParam] = useState("");

	const filteredData =
		rowData?.length > 0
			? rowData.filter(state =>
					state.state.toLowerCase().includes(searchParam.toLowerCase())
			  )
			: [];

	const handleFilter = e => {
		const value = e.target.value;
		e.persist();
		if (e.target.checked) {
			columns.forEach(heading => {
				if (heading.accessor === value) {
					setSelectedRows(prev => [...prev, heading]);
				}
			});
		} else {
			const index = selectedRows.findIndex(
				heading => heading.accessor === value
			);
			if (index > -1) {
				setSelectedRows(prev => prev.filter(key => key.accessor !== value));
			}
		}
	};

	return (
		<>
			<div className="pt-16  lg:min-h-full xl:min-h-full mb-40">
				<div className="container px-4 mx-auto my-20  lg:mt-5 ">
					<h1 className="text-3xl py-4 border-b mb-10">
						Confirmed Cases by State
					</h1>

					<div className="mb-4 flex justify-between items-center">
						<div className="flex-1 pr-4">
							<div className="relative md:w-1/3">
								<input
									onChange={e => setSearchParam(e.target.value)}
									type="search"
									className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
									placeholder="Search..."
								/>
								<div className="absolute top-0 left-0 inline-flex items-center p-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 text-gray-400"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect
											x="0"
											y="0"
											width="24"
											height="24"
											stroke="none"
										></rect>
										<circle cx="10" cy="10" r="7" />
										<line x1="21" y1="21" x2="15" y2="15" />
									</svg>
								</div>
							</div>
						</div>
						<div>
							<div className="shadow rounded-lg flex">
								<div className="relative">
									<button
										onClick={() => setIsOpen(prev => !prev)}
										className="rounded-lg inline-flex items-center bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 md:hidden"
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<rect
												x="0"
												y="0"
												width="24"
												height="24"
												stroke="none"
											></rect>
											<path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
										</svg>
										<span className="hidden md:block">Display</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5 ml-1"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<rect
												x="0"
												y="0"
												width="24"
												height="24"
												stroke="none"
											></rect>
											<polyline points="6 9 12 15 18 9" />
										</svg>
									</button>

									<div
										className={` ${
											!isOpen ? "hidden" : null
										} z-40 absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg mt-12 -mr-1 block py-1 overflow-hidden`}
									>
										{columns &&
											columns.map((heading, id) => (
												<label
													key={id}
													className="flex justify-start items-center text-truncate hover:bg-gray-100 px-4 py-2"
												>
													<div className="text-teal-600 mr-3">
														<input
															value={heading.accessor}
															onChange={handleFilter}
															type="checkbox"
															className="form-checkbox focus:outline-none focus:shadow-outline"
															defaultChecked={true}
														/>
													</div>
													<div className="select-none text-gray-700">
														{heading.Header}
													</div>
												</label>
											))}
									</div>
								</div>
							</div>
						</div>
					</div>

					{data && <Table data={filteredData} columns={selectedRows} />}
				</div>
			</div>
		</>
	);
};

export default Orders;
