import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { Contact } from './services/contacts.js';


export function setupServer() {
    const app = express();

    app.use(pino());
    app.use(cors());
    app.use(express.json());

    app.get('/contacts', async (req, res) => {
        const contacts = await Contact.find();
        res.json({
            status: 200,
            message: "Successfully found contacts!",
            data: contacts,
        });
    });

    app.get('/contacts/:contactId', async (req, res) => {
        const contactId = req.params.contactId;
        const contact = await Contact.findById(contactId);
            
        if (contact === null) {
            return res.status(404).send({ message: 'Contact not found' });
        }
        
        res.json({
            status: 200,
            message: `Successfully found contact with id ${contactId}!`,
            data: contact,
        });
        
    });

    app.use((req, res, next) => {
        res.status(404).json({
            message: 'Not found',
        });
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

};


