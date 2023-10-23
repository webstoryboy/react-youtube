import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

const Video = () => {
    const { videoId } = useParams();
    const [ videoDetail, setVideoDetail ] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => console.log(data));
    }, [videoId]);

    return (
        <div>
            <span>비디오 제목</span>
            <span>비디오 좋아요</span>
            <span>비디오 뷰</span>
        </div>
    )
}

export default Video