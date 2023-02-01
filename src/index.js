function Image(props){
    return(
        <div className="imageCard">
            <img src = {props.image} />
        </div>
    )
}
function Card(){
    return(
        <div className="card">
            <Image image="images/image-qr-code.png"/>
            <h3>Improve your front-end skills by building projects</h3>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
       
    )
}

ReactDOM.render(<Card />,document.getElementById("root"))