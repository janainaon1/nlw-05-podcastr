
export default function Home(props) {

  console.log(props.episodes);

  return (
    <div>
      <h1>{JSON.stringify(props.episodes)}</h1>
    </div>
  )
}

//SSG
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

//SSR
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }