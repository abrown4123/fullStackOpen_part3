const express = require("express"),
      morgan = require("morgan"),
      Entry = require("./models/entry"),
      { unknownEndpoint, errorHandler } = require("./middleware/error")
      cors = require("cors"),
      app = express();
// console.log(errorHandlers)
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
  Entry.find({}).then(result => {
    response.send(`<p>Phonebook has info for ${result.length} people</p><p>${new Date()}</p>`)
  })
})

app.get("/api/persons", (request, response) => {
  Entry.find({}).then(result => {
    response.json(result)
  })
})

app.get("/api/persons/:id", (request, response) => {
  Entry.findById(request.params.id)
    .then(requestedEntry => {
      response.json(requestedEntry)
    })
    .catch(error => next(error))
})

app.put("/api/persons/:id", (request, response) => {
  const body = request.body;

  const entry = {
    name: body.name,
    number: body.number
  }

  Entry.findByIdAndUpdate(request.params.id, entry, {new: true})
    .then(updatedEntry => {
      response.json(updatedEntry)
    })
    .catch(error => next(error))
})

app.post("/api/persons", (request, response) => {
  const body = request.body
  
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number is missing'
    })
  }
  
  const person = new Entry({
    name: body.name,
    number: body.number
  })

  person.save().then(savedEntry => {
    response.json(savedEntry)
  })
})

app.delete("/api/persons/:id", (request, response, next) => {
  Entry.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.use(unknownEndpoint) //used if endpoint doesn't exist
app.use(errorHandler) //used to catch more specific errors returned by requests

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

