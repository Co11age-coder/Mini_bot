import express from "express"

const app = express()
const port = 3000

//app.use(express.static('images'))
//app.use('/static'), express.static('images')
app.use('/css', express.static("css"))
app.use('/js', express.static("js"))
app.use('/html', express.static("html"))
app.use('/image', express.static("images"))

app.post('/api/check_hash', (req, res) => {
  res.sendFile('forHTML.html', {root: '.'})
  
})  

app.post('/api/check_hash', (req, res) => {
console.log('Body:')
console.log(req.body)
})  

app.get('/', (req, res) => {
  res.send('HelloWorld!')
})    
 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})