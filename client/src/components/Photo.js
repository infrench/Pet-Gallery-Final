
const Photo = ({ image, setImage }) => {

    const handleClose = (evt) => {
        if(evt.target.classList.contains("modal-background")){
        setImage("")
        }
    }

    return (
        <div className="modal-background" onClick={handleClose}>
            <img className="modal-image" src={image} alt="a picture of a animal. probably cute" />
        </div>
    )
}

export default Photo