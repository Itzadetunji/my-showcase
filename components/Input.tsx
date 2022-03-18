import React, { useState } from 'react';
import { XIcon } from "@heroicons/react/outline";  

function Input() {
  const [input, setInput] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
      <img src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.fit_scale.size_1028x578.v1605559903.png" alt="" className="h-11 w-11 rounded-full cursor-pointer"/>
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          rows="2" className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" 
          placeholder="What's Happening?"
          />
          {selectedFile && (
            
          )}
          <div className="relative">
            <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
              <XIcon className="text-white h-5 "/>
            </div>
            <img src={selectedFile} alt="" className="rounded-2xl max-h-80 object-contain"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input