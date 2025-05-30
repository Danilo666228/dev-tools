module.exports = {
    "trailingComma": "none",
	"tabWidth": 4,
	"printWidth": 150,
	"useTabs": true,
	"semi": false,
	"jsxSingleQuote": true,
	"singleQuote": true,
	"arrowParens": "avoid",
	"endOfLine": "auto",
	"singleAttributePerLine": false,
	"bracketSameLine": true,
	"importOrder": [
		"<THIRD_PARTY_MODULES>",
		"^@/app/(.*)$",
		"^@/components/(.*)$",
		"^@/hooks/(.*)$",
		"^@/lib/(.*)$",
		"^@/providers/(.*)$",
		"^@/schemas/(.*)$",
		"^@/store/(.*)$",
		"^@/styles/(.*)$",
		"^@/utils/(.*)$",
		"^@/shared/(.*)$",
		"^../(.*)$",
		"^./(.*)$",
		"(.scss)$"
	],
	"importOrderSeparation": true,
	"importOrderSortSpecifiers": true,
	"plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"]
};