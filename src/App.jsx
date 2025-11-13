import { useState } from 'react'


function App() {
  const linkEndpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    body: "",
    public: false,
  })
  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <h1>Apri un ticket</h1>
      <form>
        <div class="row g-5">
          <div class="col">
            <label for="inputAuthor" class="form-label">Author</label>
            <input type="text" class="form-control" placeholder="Author name" aria-label="Author" />
          </div>
          <div class="col">
            <label for="inputTitle" class="form-label">Title</label>
            <input type="text" class="form-control" placeholder="Title" aria-label="Title" />
          </div>
          <div class="col mb-3">
            <label for="Textarea" class="form-label">Body</label>
            <textarea class="form-control" id="Textarea" rows="3"></textarea>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
