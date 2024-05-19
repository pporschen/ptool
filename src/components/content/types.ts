export enum PainLevels {
	none,
	itch,
	cramp,
	mild,
	moderate,
	severe,
	other,
}

export enum BodyParts {
	male = "male",
	female = "female",
	head = "head",
}

export type FormData = {
	painLevel: PainLevels;
	bodyPart: BodyParts;
};
