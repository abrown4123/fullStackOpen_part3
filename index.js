const express = require("express"),
      morgan = require("morgan"),
      cors = require("cors");
      app = express();

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('entry', function entry(req, res) {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :entry'))

let people = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
];

const generateId = () => {
  const maxId = people.length > 0 ?
    Math.max(...people.map(entry => entry.id))
    : 0
  return maxId + 1
}

app.get("/info", (request, response) => {
  response.send(`<p>Phonebook has info for ${people.length} people</p><p>${new Date()}</p>`)
})

app.get("/api/persons", (request, response) => {
  response.json(people);
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = people.find(entry => entry.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.post("/api/persons", (request, response) => {
  const body = request.body
  const duplicateEntry = people.find(entry => entry.name === body.name)
  
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number is missing'
    })
  }

  if (duplicateEntry) {
    return response.status(400).json({
      error: 'name already exists'
    })
  }
  
  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  people = people.concat(person)

  response.json(person)
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  people = people.filter(entry => entry.id !== id)
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

