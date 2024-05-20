import HeadBack from "./Head/HeadBack";
import HeadFront from "./Head/HeadFront";
import HeadTop from "./Head/HeadTop";
import HeadLeft from "./Head/HeadLeft";
import HeadRight from "./Head/HeadRight";

import MaleBodyFront from "./Bodies/Male/MaleBodyFront";
import MaleBodyBack from "./Bodies/Male/MaleBodyBack";
import MaleBodyLeft from "./Bodies/Male/MaleBodyLeft";
import MaleBodyRight from "./Bodies/Male/MaleBodyRight";

import FemaleBodyFront from "./Bodies/Female/FemaleBodyFront";
import FemaleBodyBack from "./Bodies/Female/FemaleBodyBack";
import FemaleBodyLeft from "./Bodies/Female/FemaleBodyLeft";
import FemaleBodyRight from "./Bodies/Female/FemaleBodyRight";
import { BodySVGProps } from "./types";
import { BodyParts } from "../content/types";

type ImageItem = {
	name: string;
	svg: ({ dot, onClick, onMouseEnter, onMouseMove }: BodySVGProps) => JSX.Element;
	id: string;
};

const imageMap: Record<BodyParts, ImageItem[]> = {
	headPart: [
		{ name: "Front", svg: HeadFront, id: "headFront" },
		{ name: "Left", svg: HeadLeft, id: "headLeft" },
		{ name: "Right", svg: HeadRight, id: "headRight" },
		{ name: "Back", svg: HeadBack, id: "headBack" },
		{ name: "Top", svg: HeadTop, id: "headTop" },
	],
	malePart: [
		{ name: "Front", svg: MaleBodyFront, id: "maleBodyFront" },
		{ name: "Back", svg: MaleBodyBack, id: "maleBodyBack" },
		{ name: "Left", svg: MaleBodyLeft, id: "maleBodyLeft" },
		{ name: "Right", svg: MaleBodyRight, id: "maleBodyRight" },
	],
	femalePart: [
		{ name: "Front", svg: FemaleBodyFront, id: "femaleBodyFront" },
		{ name: "Back", svg: FemaleBodyBack, id: "femaleBodyBack" },
		{ name: "Left", svg: FemaleBodyLeft, id: "femaleBodyLeft" },
		{ name: "Right", svg: FemaleBodyRight, id: "femaleBodyRight" },
	],
};

export {
	imageMap,
	HeadBack,
	HeadFront,
	HeadTop,
	HeadLeft,
	HeadRight,
	MaleBodyFront,
	MaleBodyBack,
	MaleBodyLeft,
	MaleBodyRight,
	FemaleBodyFront,
	FemaleBodyBack,
	FemaleBodyLeft,
	FemaleBodyRight,
};
