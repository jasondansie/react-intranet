const express = require('express');
const axios = require('axios');

const app = express();
const port = 3010;

app.use(express.json());

app.post('/submit-text', async (req, res) => {
  const text = req.body.text;
  console.log("text: ", text);

  const response = await axios.post('https://api.openai.com/v1/engines/chatbot/jobs', {
    prompt: text,
    max_tokens: 1024,
    n: 1,
    stop: null,
    temperature: 0.5,
  }, {
    headers: {
      'Authorization': 'Bearer <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>',
      'Content-Type': 'application/json'
    }
  });

  const responseText = response.data.choices[0].text;

  res.send({
    response: responseText
  });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
