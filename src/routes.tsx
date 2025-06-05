import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/404/page";
import Home from "./pages/Home/app";
import AppLayout from "./pages/layout/_layout";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />,
			}
		],
	},
]);