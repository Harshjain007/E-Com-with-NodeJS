const fs = require('fs');

const  requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<Head><title>Title on Home page.</title></Head>');
        res.write(
            '<Body><form action="/message" method="POST"><input type="text" name="message"><Button type="submit" > Send </Button></form></Body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[0];
            fs.writeFile('message.txt', message, (err) => {
                
            });
        });
        res.statusCode = 302
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<Head><title>This is Node JS</title></Head>');
    res.write('<Body><h1>Helloo! This is using Backennd..</h1></Body>');
    res.write('</html>')
    res.end()
}
module.exports = requestHandler