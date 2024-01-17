import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse } from "./libs/api-libs"


const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (  
    <>
    {/* anime terpopuler */}
      <section>
      <Header title="Paling Populer" linkTitle="Lihat Semua" href="/populer"/>
      <AnimeList api={topAnime}/>

      </section>

    </>
  )
  
}


export default Page