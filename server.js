const http = require('http');

const PORT = process.env.PORT || 3000;

function page(title, heading, message, req) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${title}</title>
            <style>
                body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 40px; }
                .card { background: #fff; padding: 24px 32px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 600px; }
                h1 { color: #2e7d32; }
                nav a { margin-right: 12px; }
            </style>
        </head>
        <body>
            <div class="card">
                <nav><a href="/">Home</a><a href="/home">/home</a><a href="/about">/about</a></nav>
                <h1>${heading}</h1>
                <p>${message}</p>
                <p>Request URL: ${req.url}</p>
                <p>Request Method: ${req.method}</p>
            </div>
        </body>
        </html>
    `;
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page('Node.js Server', 'Welcome to Node.js!', 'This is a server-side application.', req));
    } else if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page('Home', 'Home Page', 'Welcome to the Home page served by Node.js.', req));
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page('About', 'About Page', 'This application was developed using the built-in http module of Node.js. (URK24CS1059)', req));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(page('404', '404 - Page Not Found', 'The requested page does not exist.', req));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
