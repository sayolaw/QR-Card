function Image(props) {
    return React.createElement(
        "div",
        { className: "imageCard" },
        React.createElement("img", { src: props.image })
    );
}
function Card() {
    return React.createElement(
        "div",
        { className: "card" },
        React.createElement(Image, { image: "images/image-qr-code.png" }),
        React.createElement(
            "h3",
            null,
            "Improve your front-end skills by building projects"
        ),
        React.createElement(
            "p",
            null,
            "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        )
    );
}

ReactDOM.render(React.createElement(Card, null), document.getElementById("root"));