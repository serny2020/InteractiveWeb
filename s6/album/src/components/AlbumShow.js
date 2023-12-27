// display the props that passed to each album object from the list

function AlbumShow({album}) {
    return <div className="book-show">{album.title}</div>
}

export default AlbumShow