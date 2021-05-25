import { useEffect, useState } from 'react';

import Song from '../components/Song.js'

const ListContainer = () => {

    const [songs, setSongs] = useState([]);

    const getSongs = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry));
    }

    useEffect(() => {
        getSongs();
    }, [])

    const songNodes = songs.map(song => {
        return (
            <Song 
                title={song["im:name"].label} 
                artist={song["im:artist"].label} 
                image={song["im:image"][2].label}
                audio={song.link[1].attributes.href}
                key={song.id.attributes["im:id"]} 
            />
        )
    })

    return (
        <>
            {songNodes}
        </>
    )
}

export default ListContainer;