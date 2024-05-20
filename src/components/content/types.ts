export enum PainLevels {
	none = "noneLevel",
	itch = "itchLevel",
	mild = "mildLevel",
	moderate = "moderateLevel",
	severe = "severeLevel",
}

export enum BodyParts {
	male = "malePart",
	female = "femalePart",
	head = "headPart",
}

export enum PainSources {
	none = "noneSource",
	cramp = "crampSource",
	skin = "skinSource",
	muscle = "muscleSource",
	bone = "boneSource",
	organ = "organSource",
	joint = "jointSource",
	nerve = "nerveSource",
}

export type FormData = {
	painLevel: PainLevels;
	bodyPart: BodyParts;
	painSource: PainSources;
};
