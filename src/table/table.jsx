/* eslint-disable react/prop-types */
import React from "react";
import { useTable, useSortBy, useRowSelect } from "react-table";

export const Table = ({ columns, data }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data }, useSortBy, useRowSelect);

	return (
		<>
			<div className="mt-8 overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative w-auto h-full sm:h-full pb-1">
				<table
					className="border-collapse table-auto w-full whitespace-no-wrap bg-white m-auto table-striped relative  h-full"
					{...getTableProps()}
				>
					<thead>
						{headerGroups.map((headerGroup, index) => (
							<tr
								className="text-left "
								key={index}
								{...headerGroup.getHeaderGroupProps()}
							>
								{headerGroup.headers.map((column, index) => (
									<th
										className="bg-gray-100 sticky sort-asc sort-dsc top-0 border-b border-r-2 border-gray-200 py-4 px-6  text-gray-600 font-bold tracking-wider uppercase text-xs"
										key={index}
										{...column.getHeaderProps(column.getSortByToggleProps())}
									>
										{column.render("Header")}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row, index) => {
							prepareRow(row);
							return (
								<tr className="" key={index} {...row.getRowProps()}>
									{row.cells.map((cell, index) => {
										return (
											<td
												className="text-center py-3 border-dashed border-t border-gray-200 px-6"
												key={index}
												{...cell.getCellProps()}
											>
												{cell.render("Cell")}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};
