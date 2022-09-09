import { spawn } from "child_process";
import React from "react";
import { Tile, TileBackground, TileWrapper, TileContent } from "./tile";

const Works = () => {
	return (
		<TileWrapper numOfPages={3}>
			<TileBackground></TileBackground>

			<TileContent>
				<Tile
					page={0}
					renderContent={({ progress }) => <span>Foo {progress}</span>}
				></Tile>
			</TileContent>

			<TileContent>Bar</TileContent>
			<TileContent>Baz</TileContent>
		</TileWrapper>
	);
};

export default Works;
