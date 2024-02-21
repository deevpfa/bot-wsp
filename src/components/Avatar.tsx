import React, { useEffect, useMemo, useState } from "react";
import { Avatar as MAvatar, AvatarProps as MAvatarProps } from "@material-tailwind/react";
import { getTwoFirstLetters } from "@/constants/common";
import { Kick } from "@/interfaces";

const colors = [
	{ name: "white", bg: "#fff", text: "#000" },
	{ name: "black", bg: "#000", text: "#fff" },
	{ name: "primary", bg: "#ff3254", text: "#fff" },
	{ name: "secondary", bg: "#192440", text: "#fff" },
	{ name: "success", bg: "#0f8c4f", text: "#fff" },
	{ name: "info", bg: "#0f62fe", text: "#fff" },
	{ name: "warning", bg: "#f29100", text: "#fff" },
	{ name: "danger", bg: "#ff1744", text: "#fff" },
];

interface AvatarProps extends Kick<MAvatarProps, "ref" | "color"> {
	color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "white" | "black";
	borderColor?: MAvatarProps["color"] | "white";
	name?: string;
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(function Avatar({ name, color = "primary", borderColor, src, ...restProps }, ref) {
	const [srcImage, setSrcImage] = useState(src);
	const canvasRef = React.useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!src) return generateSrc();
		loadImage(src);
	}, [src]);

	const loadImage = async (src: string) => {
		const image = new Image();
		image.src = src;
		image.onload = () => setSrcImage(src);
		image.onerror = () => generateSrc();
	};

	const generateSrc = () => {
		if (!canvasRef.current) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = 100;
		canvas.height = 100;

		ctx.fillStyle = colors.find((c) => c.name === color)?.bg || "#000";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = colors.find((c) => c.name === color)?.text || "#fff";
		ctx.font = "45px Arial";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		let initials = "";
		if (!name) name = "NA";
		if (name.length > 2) {
			let names = name.split(" ");
			names = names.filter((n, i) => i === 0 || i === names.length - 1);
			initials = names.map((n) => n.charAt(0)).join("");
		} else initials = name;

		ctx.fillText(initials.toUpperCase(), canvas.width / 2, canvas.height / 2 + 3);

		const base64Image = canvas.toDataURL("image/png");
		setSrcImage(base64Image);
	};

	return (
		<>
			<MAvatar ref={ref} color={borderColor as any} src={srcImage} {...restProps} />
			<canvas ref={canvasRef} className="hidden" />
		</>
	);
});
