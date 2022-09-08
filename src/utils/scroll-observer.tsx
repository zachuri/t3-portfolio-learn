import React, { useCallback, useEffect, useState } from "react";
import { any } from "zod";

interface ScrollValue {
	scrollY: number;
}

interface Props {
	children: any;
}

export const ScrollContext = React.createContext<ScrollValue>({ scrollY: 0 });

const ScrollObservor: React.FC<Props> = ({ children }) => {
	const [scrollY, setScrollY] = useState(0);
	const handleScroll = useCallback(() => {
		setScrollY(window.scrollY);
	}, []);

	useEffect(() => {
		document.addEventListener("scroll", handleScroll, { passive: true });

		return () => document.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);
	return (
		<ScrollContext.Provider value={{ scrollY }}>
			{children}
		</ScrollContext.Provider>
	);
};

export default ScrollObservor;
