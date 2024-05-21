export type BodySVGProps = {
	dot: { x: number; y: number };
	onClick: () => void;
	onMouseEnter: () => void;
	onMouseMove: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
	onMouseLeave: () => void;
};
