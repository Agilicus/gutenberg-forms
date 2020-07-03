const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import websiteEdit from "./edit.js";
import websiteSave from "./save.js";
import { getFieldTransform } from "../../block/functions";
import { fieldParents, myAttrs } from "../../constants";

import blockData from "./block.json";
const { attributes, title } = blockData;

registerBlockType("cwp/website", {
	title: __(title),
	icon: "laptop",
	category: "common",
	keywords: [__("gutenberg-forms"), __("forms"), __("website")],
	edit: websiteEdit,
	save: websiteSave,
	attributes,
	transforms: {
		from: [
			{
				type: "block",
				blocks: myAttrs.map((block) => "cwp/".concat(block)),
				transform: (a) => getFieldTransform(a, "website"),
			},
		],
	},
	parent: fieldParents,
});
