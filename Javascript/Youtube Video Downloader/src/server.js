const express = require('express');
const ytdl = require('ytdl-core');

const app = express();

app.use(express.static(__dirname));

app.get('/download', (req, res) => {
    const URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, { filter: 'audioonly', format: 'mp4' })
        .pipe(res);
});

const PORT = process.env.PORT || 5600;

app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
});


