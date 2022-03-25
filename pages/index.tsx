import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
        <Feed/>
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}