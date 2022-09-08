import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
	id: string;
	name: string;
	// socialId: string;
	// link: string;
}

const Skills: React.FC<Props> = ({ id, name }) => {
	return (
		<div>
			<Image
				src={`/assets/skills/${id}.png`}
				alt={name}
				width="100"
				height="100"
			/>
			<div className="">{name}</div>
		</div>
	);
};

export default Skills;
