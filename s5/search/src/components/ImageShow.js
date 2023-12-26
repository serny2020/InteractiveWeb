function ImageShow( {image} ) {
    return (
        <div><img src={image.urls.small} alt={image.alt_description} /></div>
        // <div>{image.alt_description}</div>
    )
}

export default ImageShow;