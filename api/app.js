const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "new":"nodemon using volume",
      "title":"Book Review: The Bear & The Nightingale"
    },
    {
      "id":"2",
      "title":"Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Review: Alice in Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000...')
})