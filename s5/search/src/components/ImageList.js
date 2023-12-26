import ImageShow from "./ImageShow";
import './ImageList.css'


function ImageList( {images} ) {
    // create a list of imageShow object 
    const renderedImages = images.map((image) => {
        {/*key should be applied to the top most element*/}
        return <ImageShow key={image.id} image={image}/>
    })

    return <div className="image-list">{renderedImages}</div>
    // return <div>ImageList: {images.length}</div>
}

export default ImageList;