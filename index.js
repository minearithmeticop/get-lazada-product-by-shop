const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/lazada', async (req, res) => {
    const { q } = req.query;
    const url = `https://www.lazada.co.th/${q}/?ajax=true&from=wangpu&isFirstRequest=true&langFlag=en&q=All-Products`;

    try {
        // Dynamic import of node-fetch
        const fetch = await import('node-fetch');
        const response = await fetch.default(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data from Lazada API');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data from Lazada API' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
