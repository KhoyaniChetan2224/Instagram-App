import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const camera = () => {
  return (
    <div>
        <div className="max-w-md mx-auto px-4 py-6 text-center space-y-4">
            <div className="flex-1 space-x-3">
                <Link to="/OpenHomePage"><ArrowRight className="w-7 h-7 ml-[19.7rem] cursor-pointer" /></Link>
                <h1 className="text-xl -mt-7 font-semibold justify-center items-center">Camera</h1>
            </div>
        </div>
    </div>
  )
}

export default camera
