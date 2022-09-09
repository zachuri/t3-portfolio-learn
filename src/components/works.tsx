import React from "react";
import { TileBackground, TileWrapper, TileContent } from "./tile";

const Works = () => {
	return (
		<TileWrapper numOfPages={3}>
			<TileBackground></TileBackground>
			<TileContent>Foo</TileContent>
			<TileContent>Bar</TileContent>
			<TileContent>Baz</TileContent>
		</TileWrapper>
	);
};

export default Works;
