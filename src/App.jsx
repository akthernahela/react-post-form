import { useState } from 'react'


function App() {
  const linkEndpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'
  const [formData, setFormData] = useState({
    author: "",
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
    axios.post(linkEndpoint, formData)
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <h1>Apri un ticket</h1>
      <form onSubmit={handleSubmit}>
        <div className="row g-5">
          <div className="col">
            <label className="form-label">Author</label>
            <input type="text" className="form-control" placeholder="Author name" aria-label="Author" value={formData.author} onChange={handleChange} />
          </div>
          <div className="col">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" placeholder="Title" aria-label="Title" />
          </div>
          <div className="col mb-3">
            <label className="form-label">Body</label>
            <textarea className="form-control" id="Textarea" rows="3"></textarea>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
