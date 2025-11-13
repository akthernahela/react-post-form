import { useState } from 'react'


function App() {
  const linkEndpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  return (
    <>
      <h1>Apri un ticket</h1>
      <div class="row g-3">
        <div class="col">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="text" class="form-control" placeholder="Author name" aria-label="Author" />
        </div>
        <div class="col">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="text" class="form-control" placeholder="Title" aria-label="Title" />
        </div>
      </div>
    </>
  )
}

export default App
