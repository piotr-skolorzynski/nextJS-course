import { MongoClient } from 'mongodb';

const connectDatabase = async () => {
    const url = 'mongodb+srv://Skolo82:XHqWt3jYZq2GpzZm@nextjscourse.ib8lazu.mongodb.net/?retryWrites=true&w=majority';
    const client = await MongoClient.connect(url);

    return client;
}

const insertDocument = async (client, document) => {
    const dbName = 'newsletter';
    const db = client.db(dbName);
    await db.collection('emails').insertOne(document);
}

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' });

            return;
        }
        let client;
        try {
            client = await connectDatabase();
        } catch (error) {
            res.status(500).json({ message: 'Connecting to the database failed' });

            return;
        }

        try {
            await insertDocument(client, { email: userEmail });
            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed' });

            return;
        }

        res.status(201).json({ message: 'Signed up!' });
    }
};

export default handler;