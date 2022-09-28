import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' });

            return;
        }

        //MongoDB connection
        const url = 'mongodb+srv://Skolo82:XHqWt3jYZq2GpzZm@nextjscourse.ib8lazu.mongodb.net/?retryWrites=true&w=majority';
        const client = await MongoClient.connect(url);
        const dbName = 'newsletter';
        const db = client.db(dbName);
        await db.collection('emails').insertOne({ email: userEmail });
        client.close();

        res.status(201).json({ message: 'Signed up!' });
    }
};

export default handler;