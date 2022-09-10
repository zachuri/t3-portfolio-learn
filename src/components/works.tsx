import { spawn } from "child_process";
import React from "react";
import { Tile, TileBackground, TileWrapper, TileContent } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft } from "./work";

const Works = () => {
	return (
		<TileWrapper numOfPages={3}>
			<TileBackground>
				<WorkBackground />
			</TileBackground>
			<TileContent>
				<Tile
					page={0}
					renderContent={({ progress }) => (
						<WorkContainer>
							<WorkLeft progress={progress}>
								<div>We built</div>
							</WorkLeft>
							{/* <span className="text-9xl">Foo {progress}</span> */}
						</WorkContainer>
					)}
				></Tile>
				<Tile
					page={1}
					renderContent={({ progress }) => (
						<WorkContainer>
							<WorkLeft progress={progress}>
								<div>We built</div>
							</WorkLeft>
						</WorkContainer>
						// <span className="text-9xl">Bar {progress}</span>
					)}
				></Tile>
				<Tile
					page={2}
					renderContent={({ progress }) => (
						<WorkContainer>
							<WorkLeft progress={progress}>
								<div>We built</div>
							</WorkLeft>
						</WorkContainer>
						// <span className="text-9xl">Baz {progress}</span>
					)}
				></Tile>
			</TileContent>
		</TileWrapper>
	);
};

export default Works;
