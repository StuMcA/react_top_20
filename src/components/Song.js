import '../stylesheets/song.css';

const Song = ({title, artist, image, audio}) => {
    return (
        <div className="song">
            <section>
                <h4>{title}</h4>
                <p>{artist}</p>
                <audio controls>
                    <source src={audio} />
                </audio>
            </section>
            <img src={image}/>
        </div>
    )
}

export default Song;