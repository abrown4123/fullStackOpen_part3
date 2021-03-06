const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint'})
}

const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  if (error.name === "Cast Error") {
    return response.status(400).send({ error: "malformatted id" })
  }

  next(error)
}


module.exports = {unknownEndpoint, errorHandler}