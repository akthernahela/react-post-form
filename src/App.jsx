import { useState } from 'react'


function App() {
  const linkEndpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  return (
    <>
      <h1>Apri un ticket</h1>
      <div class="row g-5">
        <div class="col">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="text" class="form-control" placeholder="Author name" aria-label="Author" />
        </div>
        <div class="col">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="text" class="form-control" placeholder="Title" aria-label="Title" />
        </div>
        <div class="col mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
    </>
  )
}

export default App
