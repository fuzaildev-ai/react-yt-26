import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  console.log("1. Component Rendered! State -> title:", title, "| details:", details, "| task:", task)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("4. Form Submitted! Adding Note ->", { title, details })
    setTask([...task, { title, details }])
    setTitle("")
    setDetails("")
  }


  const deleteNote = (idx) => {
    console.log("5. Delete Button Clicked! Removing note at index:", idx)
    const newArr = task.filter((elem, index) => index !== idx)
    setTask(newArr)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 p-4 md:p-8 lg:p-12'>

      <div className='max-w-7xl mx-auto'>
        <header className="mb-10 text-center md:text-left">
          <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight'>
            Idea Writer
          </h1>
          <p className="mt-2 text-slate-400">Capture your thoughts, beautifully.</p>
        </header>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

          {/* Form Section */}
          <div className='lg:col-span-4 h-fit'>
            <form onSubmit={(e) => submitHandler(e)}
              className='bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col gap-6 transition-all duration-300 hover:border-white/20'
            >
              <div>
                <h2 className='text-2xl font-bold text-white mb-1'>New Note</h2>
                <p className='text-xs text-slate-400 mb-4'>Jot down something important</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Heading</label>
                <input
                  type="text"
                  placeholder='e.g., Grocery List'
                  className='w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white placeholder-slate-500'
                  value={title}
                  onChange={(e) => {
                    console.log("2. Heading Input Changed ->", e.target.value)
                    setTitle(e.target.value)
                  }}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Details</label>
                <textarea
                  className='w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-slate-500 min-h-[120px] resize-y'
                  placeholder='Write what matters...'
                  value={details}
                  onChange={(e) => {
                    console.log("3. Details Input Changed ->", e.target.value)
                    setDetails(e.target.value)
                  }}
                  required
                />
              </div>

              <button
                className='w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all duration-200'
              >
                Save Note
              </button>
            </form>
          </div>

          {/* Notes Display Section */}
          <div className='lg:col-span-8'>
            <div className="flex items-center justify-between mb-6">
              <h2 className='text-2xl font-bold text-white'>Your Notes</h2>
              <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
                {task.length} saved
              </span>
            </div>

            {task.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-700/50 rounded-2xl">
                <svg className="w-16 h-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p>No notes yet. Create one to get started!</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {task.map(function (elem, idx) {
                  return (
                    <div key={idx} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/20 flex flex-col h-full">

                      <div className="flex-grow">
                        <h3 className='text-xl font-bold text-white mb-3 line-clamp-2'>{elem.title}</h3>
                        <p className='text-sm text-slate-400 leading-relaxed whitespace-pre-wrap break-words'>{elem.details}</p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/5 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => deleteNote(idx)}
                          className='flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-2 rounded-lg transition-colors active:scale-95'
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default App