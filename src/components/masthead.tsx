import React from "react";
import Image from "next/image";

const Masthead: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div className="p-12 font-bold">
				<h1>Zachuri</h1>
				<h2>
					<span>
						Full <span>Stack</span> Developer
					</span>
				</h2>
			</div>
		</div>
	);
};

export default Masthead;
