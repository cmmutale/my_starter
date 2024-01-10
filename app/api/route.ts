// pages/api/example.ts

import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Your logic for handling GET requests here
            // For instance, fetching data from a database or an external API
            const data = { message: 'This is a GET request!' };

            // Sending a JSON response with status code 200
            res.status(200).json(data);
        } catch (error) {
            // Handling errors and sending an error response
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handling requests other than GET method
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

// pages/api/postExample.ts


export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Your logic for handling POST requests here
            // For instance, receiving data from the request body and processing it
            const { message } = req.body; // Assuming you're expecting a 'message' in the POST body

            // Perform any necessary processing with the received data

            // Sending a JSON response with status code 200
            res.status(200).json({ received: true, message });
        } catch (error) {
            // Handling errors and sending an error response
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handling requests other than POST method
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

// pages/api/putExample.ts

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
            // Your logic for handling PUT requests here
            // For instance, receiving data from the request body and processing it
            const { id, updatedData } = req.body; // Assuming you expect an 'id' and 'updatedData'

            // Perform any necessary processing with the received data

            // Sending a JSON response with status code 200
            res.status(200).json({ updated: true, id, updatedData });
        } catch (error) {
            // Handling errors and sending an error response
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handling requests other than PUT method
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

// pages/api/deleteExample.ts

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        try {
            // Your logic for handling DELETE requests here
            // For instance, receiving an 'id' from the request query parameters and deleting data based on that

            const { id } = req.query; // Assuming the 'id' to be deleted is passed as a query parameter

            // Perform deletion logic using the 'id'
            // Delete data, perform necessary operations, etc.

            // Sending a JSON response with status code 200
            res.status(200).json({ deleted: true, id });
        } catch (error) {
            // Handling errors and sending an error response
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handling requests other than DELETE method
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}


