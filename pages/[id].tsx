import { Head } from 'next/document'
import React from 'react'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'

function PostPage() {
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
  )
}

export default PostPage