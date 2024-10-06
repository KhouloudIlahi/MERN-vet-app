const express = require('express')
const app = express()
const port = process.env.port || 5000;
const cors = require('cors')
const registerModel = require('./models/register')

//connexion avec le frontend
app.use(cors());
app.use(express.json()); // Correct



app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongodb configuration


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
//ce url connect avec mongodb
const uri = "mongodb+srv://veterinaire:pzSMAeIkegc5Y21z@cluster0.d9iqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    


//creation collection de document

const rapportCollection = client.db("vet-app").collection("rapport");


// insertion de rapport dans la base de données : post method

app.post("/upload-rapport", async(req,res) =>{
  const data = req.body;
  const result = await rapportCollection.insertOne(data);
  res.send(result);
} )

// get all rapports from database

//app.get("/all-rapports", async(req , res) => {
  //const rapports =  rapportsCollection.find();
//const result = await rapports.toArray();
//res.send(result);
//})
//update a rapport data : patch or update methods

app.patch("/rapport/:id",async(req,res)=>{
  const id=req.params.id;
  //console.log(id);
  const updaterapportdata = req.body;
  const filter = {_id: new ObjectId(id)};
  const options = {upsert: true};
  const updateDoc = {
    $set:{
      ...updaterapportdata
    }
  }
  //update
  const result = await rapportCollection.updateOne(filter,updateDoc,options);
res.send(result);
})


//delete a rapport data
app.delete("/rapport/:id",async(req,res)=>{
  const id=req.params.id;
  const filter = {_id: new ObjectId(id)};
  const result = await rapportCollection.deleteOne(filter);
  res.send(result);
})
//find by nom date de consultation
app.get("/all-rapports", async(req,res) =>{

  let query = {};
  if(req.query?.date_de_consultation){
    query = {date_de_consultation: req.query.date_de_consultation}
  }
  const result = await rapportCollection.find(query).toArray();
  res.send(result);
})

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);

app.post('/Sinscrire' , (req, res) =>{
  rapportModel.create(req.body)
  .then(rapports => res.json(rapports))
  .catch(err => res.json(err))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})