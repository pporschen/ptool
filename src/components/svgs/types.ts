import { Dot } from "../content/ContentWrapper";

export type BodySVGProps = {
	dot: Dot;
	onClick: () => void;
	onMouseEnter: () => void;
	onMouseMove: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
	onMouseLeave: () => void;
};
