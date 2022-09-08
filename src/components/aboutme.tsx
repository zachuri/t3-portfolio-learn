import ReactAboutMe from "react";
import Skills from "./skills";

const AboutMe: React.FC = () => {
	return (
		// <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
		<section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
			<div className="container mx-auto px-11">
				<p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
					<strong>Hola I&apos;m ZACHURI. </strong>
					I&apos;m a Computer and Information Science major from the
					University of California, Ivine. What inspires me is to code is
					being able to build valuable projects that can help people. Also
					just love how we live in a society where we can build things with
					words which can make our lives better. I aspire to beomce a Web
					Developer in the far future! I&apos;m always here to learn about
					anything new. Lets build something together ;)
				</p>
			</div>
			<div className="conainter mx-auto px-11 text-center mt-28">
				<h2>Skills</h2>
				<div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
					<Skills id="nextjs" name="Next JS" />
					<Skills id="react" name="React JS" />
					<Skills id="java" name="Java" />
					<Skills id="python" name="Python" />
					<Skills id="c++" name="C++" />
					<Skills id="github1" name="Github" />
					<Skills id="javascript" name="JavaScript" />
					<Skills id="tailwind" name="Tailwind" />
					<Skills id="mongo" name="MongoDB" />
					<Skills id="html" name="HTML" />
					<Skills id="css" name="CSS" />
					<Skills id="firebase" name="Firebase" />
					<Skills id="vim" name="Vim" />
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
