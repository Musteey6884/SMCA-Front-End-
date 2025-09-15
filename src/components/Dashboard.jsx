import React from 'react'
import Navbar from './Navbar'
import ChatBox from './ChatBox'

export default function Dashboard({ user, onLogout }){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} onLogout={onLogout} />
      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-4 bg-[#081424] rounded-xl p-4 border border-gray-800">
            <h3 className="text-sm text-gray-300 mb-3 font-semibold">Contacts</h3>
            <ul className="space-y-3">
              <li className="p-3 bg-[#071827] rounded-md border border-gray-800 flex items-center justify-between">
                <div>
                  <div className="font-medium">Commander</div>
                  <div className="text-xs text-gray-400">commander@nda</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-sec-green"></div>
              </li>
              <li className="p-3 bg-[#071827] rounded-md border border-gray-800 flex items-center justify-between">
                <div>
                  <div className="font-medium">Ops Center</div>
                  <div className="text-xs text-gray-400">ops@control</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-sec-green"></div>
              </li>
              <li className="p-3 bg-[#071827] rounded-md border border-gray-800 flex items-center justify-between">
                <div>
                  <div className="font-medium">Intelligence</div>
                  <div className="text-xs text-gray-400">intel@nda</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-sec-green"></div>
              </li>
            </ul>
          </div>

          <div className="col-span-8 bg-[#081424] rounded-xl p-4 border border-gray-800">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  )
}
