const express = require('express');
const createRouter = require('./helpers/create_router');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
.then( (client) => {
    const db = client.db('hotel_checkins');
    const guestCollection = db.collection('guests');
    const guestRouter = createRouter(guestCollection);
    app.use('/api/guests', guestRouter);
})
.catch(console.error);

app.listen(9000, function() {
    console.log(`listening on port ${this.address().port}`);
})
