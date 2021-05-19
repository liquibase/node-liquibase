module.exports = {
  "extends": [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "settings": {
    "react": {
      "version": "999.999.999"
    }
  },
	"rules": {
    "prettier/prettier": [
      "error",
      {
				"printWidth": 120,
				"semi": true,
				"singleQuote": true,
				"trailingComma": "es5",
				"useTabs": false
			}
    ]
  }
}
