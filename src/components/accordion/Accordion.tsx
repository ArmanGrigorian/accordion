import { FC, ReactElement, useState } from "react";
import "./Accordion.scss";
import AccordionArticle from "../article/AccordionArticle.tsx";
import { advantages } from "../../assets/_DATA.ts";

const Accordion: FC = (): ReactElement => {
	const [info, setInfo] = useState(advantages);

	return (
		<div className="accordion">
			{info?.map((val, i) => {
				return <AccordionArticle key={i} idx={i} info={val} />;
			})}
		</div>
	);
};

export default Accordion;
