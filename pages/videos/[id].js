import React from 'react'
import {URL} from '../../environment/index'

const VideoDetails = ({video}) => {
  return (
    <div>
        <h3>{video.name}</h3>
        <p>{video.content}</p>
    </div>
  )
}

//!getServerSideProps
// // Card tıklandığında post details sayfasına yönlendirilecek.
// // Ve tıklanan card id si eşleştirip apiden bu id nin verileri tekrar çekilecek.
// // En son post details sayfasında postun title ve body bilgileri görüntülenecek.

// export const getServerSideProps = async (context) => {
//     const { id } = context.query
//     const res = await fetch(`{URL}/api/videos/${id}`)
//     const video = await res.json()
//     return {
//         props: {
//             video,
//         }
//     }
// }

//! getStaticPaths
export const getStaticPaths = async () => {
    const res = await fetch(`${URL}/api/videos`)
    const videos = await res.json()

    const paths = videos.map((video) => {
        return {
        params: { id: video.id.toString() },
        };
    });

    return {
        paths,
        fallback: false //or true
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params
    const res = await fetch(`${URL}/api/videos/${id}`)
    const video = await res.json()
    return {
        props: {
            video,
        }
    }
}

//npm run build

export default VideoDetails;
