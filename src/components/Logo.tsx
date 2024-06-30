interface Props {
	fill?: string;
	className?: string;
}

function Logo({ fill = "#ffff", className = "" }: Props) {
	return (
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
			width="461.000000pt" height="461.000000pt" viewBox="0 0 461.000000 461.000000"
			preserveAspectRatio="xMidYMid meet">

			<g transform="translate(0.000000,461.000000) scale(0.100000,-0.100000)"
				fill="#000000" stroke="none">
				<path d="M1751 2926 l-161 -162 142 -80 c908 -510 901 -507 877 -520 -13 -7
-197 -107 -409 -223 l-385 -211 -5 193 c-5 205 -13 238 -63 285 -19 17 -252
153 -355 206 l-32 17 0 -581 0 -581 25 -24 c24 -25 25 -25 218 -25 l194 0 604
326 c332 179 639 344 682 367 128 67 182 148 181 272 0 90 -25 146 -90 204
-33 29 -243 148 -656 371 l-606 327 -161 -161z"/>
			</g>
		</svg>

	);
}

export default Logo;
