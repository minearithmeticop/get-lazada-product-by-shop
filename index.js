const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/lazada', async (req, res) => {
    const { q } = req.query;
    const url = `https://www.lazada.co.th/${q}/?ajax=true&from=wangpu&isFirstRequest=true&langFlag=en&q=All-Products`;

    req.session

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching data from Lazada API' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});