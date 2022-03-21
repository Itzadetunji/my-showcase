import React, { useRef, useState } from 'react';
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";  

function Input() {
  const [input, setInput] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const filePickerRef = useRef(null)
  const addImageToPost = () => {};
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
            <div className="relative">
            <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer" onClick={() => setSelectedFile(null)}>
              <XIcon className="text-white h-5 "/>
            </div>
            <img 
              src={selectedFile} 
              alt="" 
              className="rounded-2xl max-h-80 object-contain"
              />
          </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              <div className="icon" onClick={() => filePickerRef.current.click()}>
                <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                <input 
                  type="file" 
                  hidden
                  onChange={addImageToPost} 
                  ref={filePickerRef}
                />
              </div>
              <div className="icon rotate-90">
                <ChartBarIcon className="h-[22px] text-[#1d9bf0]"/>
              </div>
              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]"/>
              </div>
              <div className="icon">
                <CalendarIcon className="h-[22px] text-[#1d9bf0]"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Input