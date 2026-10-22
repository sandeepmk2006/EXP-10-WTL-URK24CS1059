const http = require('http');

const PORT = process.env.PORT || 3000;

function page(title, heading, message, req) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${title}</title>
            <style>
                body { font-family: Arial, sans-serif; background: linear-gradient(135deg, #0d1b3e, #1b4f72); margin: 0; padding: 40px; color: #fff; min-height: 100vh; }
                .card { background: rgba(255,255,255,0.08); border: 1px solid #4fc3f7; padding: 24px 32px; border-radius: 12px; max-width: 640px; }
                h1 { color: #4fc3f7; }
                nav a { color: #ffd54f; margin-right: 14px; text-decoration: none; font-weight: bold; }
                .req { background: rgba(0,0,0,0.3); padding: 4px 14px; border-radius: 6px; font-family: monospace; }
            </style>
        </head>
        <body>
            <div class="card">
                <nav><a href="/">&#128300; Home</a><a href="/home">Projects</a><a href="/about">About</a></nav>
                <h1>${heading}</h1>
                <p>${message}</p>
                <div class="req">
                    <p>Request URL: ${req.url}</p>
                    <p>Request Method: ${req.method}</p>
                </div>
            </div>
        </body>
        </html>
    `;
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page('Science Fair Project', 'Welcome to the Science Fair 2026!', 'This is a server-side application built with Node.js for the Science Fair Project.', req));
    } else if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page('Projects', 'Featured Projects', 'Solar-Powered Water Purifier &bull; Smart Plant Watering System &bull; Volcano Eruption Model &bull; Air Quality Monitor', req));
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page('About', 'About the Science Fair', 'Students present innovative science projects to judges and visitors. This site is served using the built-in http module of Node.js. (URK24CS1059)', req));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(page('404', '404 - Experiment Not Found', 'The requested page does not exist at the Science Fair.', req));
    }
});

server.listen(PORT, () => {
    console.log(`Science Fair server running at http://localhost:${PORT}`);
});
