import { signIn } from "next-auth/react";
import Image from "next/image";
import React from 'react'

function login() {
  return (
    <div className="text-white">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
    </div>
  )
}

export default login