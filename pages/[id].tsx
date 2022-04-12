import { useSession } from 'next-auth/react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'

function PostPage() {
  const { data : session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const router = useRouter();
  // const { id } = router. query;
  console.log(router)
  if(!session){return false}
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
        {/* Widgets */}

        { isOpen && <Modal/> }
      </main>
    </div>
  );
}

export default PostPage