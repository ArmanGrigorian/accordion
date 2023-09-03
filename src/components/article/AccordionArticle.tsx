import { FC, ReactElement, ReactNode } from "react";
import "./AccordionArticle.scss";
import { Tadvantages } from "../../assets/_DATA.ts";
import {
	FaRegUserCircle,
	FaRegCheckCircle,
	FaMugHot,
	FaHandHoldingHeart,
	FaVideo,
	FaHeadset,
	FaRegHourglass,
	FaBriefcase,
	FaRegBuilding,
	FaChevronDown,
} from "react-icons/fa";

type AccordionArticleProps = {
	idx: number;
	info: Tadvantages;
	handleOpen: (idx: number) => void;
};

const AccordionArticle: FC<AccordionArticleProps> = ({ idx, info, handleOpen }): ReactElement => {
	const { id, preTitle, title, description, isOpen } = info;

	function setIcon(): ReactNode {
		switch (id) {
			case "1":
				return <FaRegUserCircle />;
			case "2":
				return <FaRegCheckCircle />;
			case "3":
				return <FaMugHot />;
			case "4":
				return <FaHandHoldingHeart />;
			case "5":
				return <FaVideo />;
			case "6":
				return <FaHeadset />;
			case "7":
				return <FaRegHourglass />;
			case "8":
				return <FaBriefcase />;
			case "9":
				return <FaRegBuilding />;
			default:
				break;
		}
	}

	return (
		<article className={"accordionArticle" + (isOpen ? "IsOpen" : "")} id={id}>
			<div className="extendable">
				<div>
					{setIcon()}
					<h3>
						<strong>{preTitle}</strong> {title}
					</h3>
				</div>
				<button
					type="button"
					name="extendButton"
					className={"extendButton" + (isOpen ? "IsOpen" : "")}
					onClick={() => handleOpen(idx)}>
					<FaChevronDown />
				</button>
			</div>

			<p className="description">{description}</p>
		</article>
	);
};

export default AccordionArticle;
