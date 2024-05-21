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
import HandTop from "./Hands/HandTop";
import HandBottom from "./Hands/HandBottom";
import FootInner from "./Feet/FootInner";
import FootOuter from "./Feet/FootOuter";
import FootTop from "./Feet/FootTop";
import FootBottom from "./Feet/FootBottom";

type ImageItem = {
	name: string;
	svg: ({ dot, onClick, onMouseEnter, onMouseMove }: BodySVGProps) => JSX.Element;
	id: string;
	mirrorable: boolean;
};

const imageMap: Record<BodyParts, ImageItem[]> = {
	headPart: [
		{ name: "Front", svg: HeadFront, id: "headFront", mirrorable: false },
		{ name: "Left", svg: HeadLeft, id: "headLeft", mirrorable: false },
		{ name: "Right", svg: HeadRight, id: "headRight", mirrorable: false },
		{ name: "Back", svg: HeadBack, id: "headBack", mirrorable: false },
		{ name: "Top", svg: HeadTop, id: "headTop", mirrorable: false },
	],
	malePart: [
		{ name: "Front", svg: MaleBodyFront, id: "maleBodyFront", mirrorable: false },
		{ name: "Back", svg: MaleBodyBack, id: "maleBodyBack", mirrorable: false },
		{ name: "Left", svg: MaleBodyLeft, id: "maleBodyLeft", mirrorable: false },
		{ name: "Right", svg: MaleBodyRight, id: "maleBodyRight", mirrorable: false },
	],
	femalePart: [
		{ name: "Front", svg: FemaleBodyFront, id: "femaleBodyFront", mirrorable: false },
		{ name: "Back", svg: FemaleBodyBack, id: "femaleBodyBack", mirrorable: false },
		{ name: "Left", svg: FemaleBodyLeft, id: "femaleBodyLeft", mirrorable: false },
		{ name: "Right", svg: FemaleBodyRight, id: "femaleBodyRight", mirrorable: false },
	],
	handPart: [
		{ name: "Top", svg: HandTop, id: "handTop", mirrorable: true },
		{ name: "Bottom", svg: HandBottom, id: "handBottom", mirrorable: true },
	],
	footPart: [
		{ name: "Inner", svg: FootInner, id: "footInner", mirrorable: true },
		{ name: "Outer", svg: FootOuter, id: "footOuter", mirrorable: true },
		{ name: "Top", svg: FootTop, id: "footTop", mirrorable: true },
		{ name: "Bottom", svg: FootBottom, id: "footBottom", mirrorable: true },
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
	HandTop,
	HandBottom,
};
