module.exports = {
	"parser": "./setup/node_modules/babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
		"node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
		"ecmaVersion": 6,
        "sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"modules": true,
			"experimentalObjectRestSpread": true
		},
    },
	"plugins": [
		"react"
	],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"no-unused-vars": "warn",
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2
    }
};
