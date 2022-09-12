import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import ScrollObservor from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<SizeObserver>
			<ScrollObservor>
				<Component {...pageProps} />
			</ScrollObservor>
		</SizeObserver>
	);
};

export default MyApp;
