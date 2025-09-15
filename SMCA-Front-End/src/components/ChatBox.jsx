import React, { useState, useEffect, useRef } from 'react'

const mockMessages = [
  { id:1, from: 'Commander', text: 'All units, report status. Over.' },
  { id:2, from: 'You', text: 'Alpha team in position. Awaiting orders.' },
  { id:3, from: 'Ops Center', text: 'Received. Monitor west sector.' },
  { id:4, from: 'Intelligence', text: 'Unusual movement detected near border.' },
]

export default function ChatBox(){
  const [messages, setMessages] = useState(mockMessages)
  const [input, setInput] = useState('')
  const boxRef = useRef()

  useEffect(()=> {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const send = (e) => {
    e.preventDefault()
    if(!input.trim()) return
    const m = { id: Date.now(), from: 'You', text: input.trim() }
    setMessages(prev => [...prev, m])
    setInput('')
  }

  return (
    <div className="flex flex-col h-[60vh]">
      <div className="flex-1 overflow-auto p-4 space-y-3" ref={boxRef}>
        {messages.map(m => (
          <div key={m.id} className={`max-w-xl p-3 rounded-lg ${m.from==='You' ? 'bg-sec-green text-black ml-auto' : 'bg-[#071827] text-gray-200'}`}>
            <div className="text-sm">{m.text}</div>
            <div className="text-xs text-gray-400 mt-1">{m.from}</div>
          </div>
        ))}
      </div>

      <form onSubmit={send} className="mt-3 flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type secure message..." className="flex-1 p-3 rounded-md bg-[#071827] border border-gray-800" />
        <button className="px-4 py-2 bg-sec-green text-black rounded-md font-semibold">Send</button>
      </form>
    </div>
  )
}
