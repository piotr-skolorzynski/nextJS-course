import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    const url = 'mongodb+srv://Skolo82:XHqWt3jYZq2GpzZm@nextjscourse.ib8lazu.mongodb.net/?retryWrites=true&w=majority';
    const client = await MongoClient.connect(url);
    const dbName = 'events';
    const db = client.db(dbName);

    const eventId = req.query.eventId;

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({ message: 'Invalid input' });

            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId
        };

        const result = await db.collection('comments').insertOne(newComment);

        newComment.id = result.insertedId;

        res.status(201).json({ message: 'Added comment.', comment: newComment });
    };

    if (req.method === 'GET') {
        const documents = await db.collection('comments').find().sort({ _id: -1 }).toArray();

        res.status(200).json({ comments: documents });
    };

    client.close();
};

export default handler;