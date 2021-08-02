import React, { createContext, useState } from "react";
import App from "../App";

export const ReloadContext = createContext();

const Context = () => {
	const [reload, setReload] = useState({});

	return (
		<ReloadContext.Provider value={{ reload, setReload }}>
			<App />
		</ReloadContext.Provider>
	);
};

export default Context;
