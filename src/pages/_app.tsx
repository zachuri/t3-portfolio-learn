import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import ScrollObservor from "../utils/scroll-observer";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<ScrollObservor>
			<Component {...pageProps} />
		</ScrollObservor>
	);
};

export default MyApp;
