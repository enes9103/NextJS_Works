import React from 'react'

const PostDetails = ({post}) => {
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

//!getServerSideProps
// // Card tıklandığında post details sayfasına yönlendirilecek.
// // Ve tıklanan card id si eşleştirip apiden bu id nin verileri tekrar çekilecek.
// // En son post details sayfasında postun title ve body bilgileri görüntülenecek.

// export const getServerSideProps = async (context) => {
//     const { id } = context.query
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const post = await res.json()
//     return {
//         props: {
//             post,
//         }
//     }
// }

//! getStaticPaths
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await res.json()

    const paths = posts.map((post) => {
        return {
        params: { id: post.id.toString() },
        };
    });

    return {
        paths,
        fallback: false //or true
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return {
        props: {
            post,
        }
    }
}

//npm run build

export default PostDetails;
