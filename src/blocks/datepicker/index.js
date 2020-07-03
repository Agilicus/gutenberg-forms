const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import { getFieldTransform } from "../../block/functions";
import { fieldParents, myAttrs } from "../../constants";
import datePickerEdit from "./edit.js";
import datePickerSave from "./save.js";

import blockData from "./block.json";

const { attributes, title } = blockData;

registerBlockType("cwp/datepicker", {
	title: __(title),
	icon: "calendar-alt",
	category: "common",
	keywords: [__("gutenberg-forms"), __("forms"), __("datepicker")],
	edit: datePickerEdit,
	save: datePickerSave,
	attributes,
	transforms: {
		from: [
			{
				type: "block",
				blocks: myAttrs.map((block) => "cwp/".concat(block)),
				transform: (a) => getFieldTransform(a, "datepicker"),
			},
		],
	},
	parent: fieldParents,
});
