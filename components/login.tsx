import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from 'react'

function Login({providers}) {
  return (
    <div className="text-white">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      <div>
        {Object.values(providers).map(provider => (
          <div key={provider.name}>
            {/* https://devdojo.com/tailwindcss/buttons#_ */} 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Login