import { useRouter } from "next/router";
import React, { useState } from "react";

const Search: React.FC = () => {
	const [searchValue, setSearchValue] = useState('')
	const { push } = useRouter()

	const handleChange = (value) => {
		setSearchValue(value.replace(/[.*+?^${}()|[\]\\]/g, ""))
	}

	return (

			<div className="w-full flex flex-col">
				<div className="w-full  max-w-xs mx-auto pt-32">
					<input className="w-full bg-gray-900 border-4 rounded-lg shadow-lg shadow-indigo-500/50" type="text" value={searchValue} onChange={(e) => handleChange(e.target.value)} />
				</div>
				<button  className="flex flex-col font-black text-xl " onClick={() => push(`/${searchValue}`)}>search</button>
			</div>

	);
}

export default Search