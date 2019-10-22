module.exports = {
    "extends": [
        "react-app",
        "airbnb"
    ],
    "rules" : {
        "react/destructuring-assignment": 0,
        "react/jsx-filename-extension": 0,
        "indent": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    }
}