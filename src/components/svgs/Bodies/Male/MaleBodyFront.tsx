import { DOT_SIZE } from "../../../../config/consts";
import { BodySVGProps } from "../../types";

const MaleBodyFront = ({ dot, onClick, onMouseEnter, onMouseMove, onMouseLeave }: BodySVGProps) => {
	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 3000 4000"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlSpace="preserve"
			style={{
				transform: dot?.isMirrored ? "scaleX(-1)" : "scaleX(1)",
				fillRule: "evenodd",
				clipRule: "evenodd",
				strokeLinejoin: "round",
				strokeMiterlimit: 2,
			}}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
		>
			<g transform="matrix(4,0,0,4,0,0)">
				<g id="Hintergrund" transform="matrix(0.25,0,0,0.25,-536.25,-40)">
					<use
						id="_Image1_"
						xlinkHref="#_Image1"
						x="0"
						y="0"
						width="7680px"
						height="4320px"
						transform="matrix(3,0,0,3,0,0)"
					/>
				</g>
			</g>
			<defs>
				<image
					id="_Image1"
				/>
			</defs>
			{dot?.x && dot.y && <circle cx={dot.x} cy={dot.y} r={DOT_SIZE} fill="red" />}
		</svg>
	);
};

export default MaleBodyFront;