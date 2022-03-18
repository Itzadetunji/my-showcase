import React from 'react'

function Input() {
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}>
      <img src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.fit_scale.size_1028x578.v1605559903.png" alt="" className="h-11 w-11 rounded-full cursor-pointer"/>
      <div className="w-full divide-y divide-gray-700">
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          Hello
        </div>
      </div>
    </div>
  )
}

export default Input