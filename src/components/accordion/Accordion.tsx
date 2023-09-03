import { FC, ReactElement, useState } from "react";
import "./Accordion.scss";
import AccordionArticle from "../article/AccordionArticle.tsx";
import { Tadvantages, advantages } from "../../assets/_DATA.ts";

const Accordion: FC = (): ReactElement => {
	const [info, setInfo] = useState<Tadvantages[]>(advantages);

	function handleOpen(idx: number) {
		setInfo(
			info.map((val, i) => {
				i === idx ? (val.isOpen = !val.isOpen) : (val.isOpen = false);
				return val;
			}),
		);
	}

	return (
		<div className="accordion">
			{info?.map((val, i) => {
				return <AccordionArticle key={i} idx={i} info={val} handleOpen={handleOpen} />;
			})}
		</div>
	);
};

export default Accordion;
