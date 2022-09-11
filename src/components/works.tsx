import { spawn } from "child_process";
import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileWrapper, TileContent } from "./tile";
import {
	WorkBackground,
	WorkContainer,
	WorkLeft,
	WorkLink,
	WorkRight,
} from "./work";

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
								<div className="text-4xl md:text-5xl font-semibold tracking-tight">
									<WorkLink href="https://www.twitch.tv/">
										Twitch
									</WorkLink>
									&apos;s app
								</div>
							</WorkLeft>
							{/* <span className="text-9xl">Foo {progress}</span> */}
							<WorkRight progress={progress}>
								<Image
									src="/assets/works/iphone1.png"
									width={437}
									height={882}
									layout="responsive"
									alt="iphone1"
								/>
							</WorkRight>
						</WorkContainer>
					)}
				></Tile>
				<Tile
					page={1}
					renderContent={({ progress }) => (
						<WorkContainer>
							<WorkLeft progress={progress}>
								<div>We built</div>
								<div className="text-4xl md:text-5xl font-semibold tracking-tight">
									<WorkLink href="https://www.uber.com/">
										Uber
									</WorkLink>
									&apos;s app
								</div>
							</WorkLeft>
							<WorkRight progress={progress}>
								<Image
									src="/assets/works/iphone2.png"
									width={437}
									height={882}
									layout="responsive"
									alt="iphone2"
								/>
							</WorkRight>
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
								<div className="text-4xl md:text-5xl font-semibold tracking-tight">
									<WorkLink href="https://www.amazon.com/">
										Amazon
									</WorkLink>
									&apos;s App
								</div>
							</WorkLeft>
							<WorkRight progress={progress}>
								<Image
									src="/assets/works/iphone3.png"
									width={437}
									height={882}
									layout="responsive"
									alt="iphone3"
								/>
							</WorkRight>
						</WorkContainer>
						// <span className="text-9xl">Baz {progress}</span>
					)}
				></Tile>
			</TileContent>
		</TileWrapper>
	);
};

export default Works;
