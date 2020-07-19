import React, { useEffect } from "react";
import "./App.css";
import fetchDatas from "./redux/fetchdata";
import { getDataError, getData, getDataPending } from "./redux/reducers";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Loader } from "./loader/loader";
import Orders from "./orders/stateData";

function App({ data, error, pending, fetchData }) {
	useEffect(() => {
		fetchData();
	}, [fetchData]);

	console.log(data, error, pending, "now");
	if (pending) return <Loader />;
	return (
		<div className="App min-h-screen w-screen py-20">
			<div className="container mx-auto">
				<div className="flex flex-wrap justify-center items-center mx-auto px-3">
					<div className="border border-gray-400 shadow rounded w-full lg:w-1/2 mx-2  my-4">
						<p className="text-left p-3 pb-0 font-bold">Covid overview</p>
						<div className="flex justify-between items-start py-8 pb-10">
							<div className="md:w-1/3 w-full">
								<p className="text-red-600 text-2xl lg:text-3xl">
									{data.totalConfirmedCases}
								</p>
								<p className="text-gray-600 font-semibold">Confirmed Cases</p>
							</div>

							<div className="md:w-1/3 w-full">
								<p className="text-green-600 text-2xl lg:text-3xl">
									{data.discharged}
								</p>
								<p className="text-gray-600 font-semibold">Recovered</p>
							</div>

							<div className="md:w-1/3 w-full">
								<p className="text-gray-600 text-2xl lg:text-3xl">
									{data.death}
								</p>
								<p className="text-gray-600 font-semibold">Deaths</p>
							</div>
						</div>
					</div>
					<div className=" flex justify-between items-start py-8 pb-10 w-full lg:w-1/2  border border-gray-400 shadow rounded  my-4 mx-2">
						<div className="md:w-1/3 w-full">
							<p className="text-gray-600 text-2xl lg:text-3xl">
								{data.totalSamplesTested}
							</p>
							<p className="text-gray-600 font-semibold">Samples Tested</p>
						</div>
						<div className="md:w-1/3 w-full">
							<p className="text-gray-600 text-2xl lg:text-3xl">
								{data.totalActiveCases}
							</p>
							<p className="text-gray-600 font-semibold">Total Active Cases</p>
						</div>
						<div className="md:w-1/3 w-full">
							<p className="text-gray-600 text-2xl lg:text-3xl">
								{data.discharged}
							</p>
							<p className="text-gray-600 font-semibold">
								Total Discharged Cases
							</p>
						</div>
					</div>

					<div className=" flex justify-between items-start py-8 pb-10 w-full lg:w-1/2  border border-gray-400 shadow rounded  mx-2  my-4">
						<div className="md:w-1/3 w-full">
							<p className="text-gray-600 text-2xl lg:text-3xl">
								{Math.floor((data.discharged / data.totalConfirmedCases) * 100)}
								%
							</p>
							<p className="text-gray-600 font-semibold">Recovery rate</p>
						</div>
						<div className="md:w-1/3 w-full">
							<p className="text-gray-600 text-2xl lg:text-3xl">
								{Math.floor((data.death / data.totalConfirmedCases) * 100)}%
							</p>
							<p className="text-gray-600 font-semibold">Fatality rate</p>
						</div>
					</div>
				</div>
			</div>

			<Orders data={data.states} />
		</div>
	);
}

const mapStateToProps = state => ({
	error: getDataError(state),
	data: getData(state),
	pending: getDataPending(state),
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			fetchData: fetchDatas,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(App);
