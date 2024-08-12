import React from "react";
import { Envelope, Github, Instagram, Linkedin } from "react-bootstrap-icons";

function Footer() {
	return (
		<div className="mt-auto h-16 md:h-14 bg-foreground dark:bg-dark_foreground flex justify-center gap-5 items-center">
			<div className="btn btn-square btn-ghost text-4xl text-primary dark:text-dark_primary">
				<a href="mailto:rosekenny12@gmail.com" target="_blank" rel="noreferrer">
					<Envelope />
				</a>
			</div>
			<div className="btn btn-square btn-ghost text-3xl text-primary dark:text-dark_primary">
				<a
					href="https://github.com/kennethprose"
					target="_blank"
					rel="noreferrer"
				>
					<Github />
				</a>
			</div>
			<div className="btn btn-square btn-ghost text-3xl text-primary dark:text-dark_primary">
				<a
					href="https://www.linkedin.com/in/kennethpatrickrose/"
					target="_blank"
					rel="noreferrer"
				>
					<Linkedin />
				</a>
			</div>
		</div>
	);
}

export default Footer;
