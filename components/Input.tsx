import React, { useState } from 'react';

function Input() {
  const [input, setInput] = useState("")
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
      <img src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.fit_scale.size_1028x578.v1605559903.png" alt="" className="h-11 w-11 rounded-full cursor-pointer"/>
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          rows="2" className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" 
          placeholder="What's Happening?"></textarea>
        </div>
      </div>
    </div>
  )
}

export default Input