document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inserted via innerHTML</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
            }
            h1 {
                color: #333;
            }
            p {
                color: #555;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to the Dynamic Page</h1>
        <p>This content is being inserted dynamically using JavaScript's innerHTML!</p>
        <div id="additional-content"></div>

        <script>
            // Example of adding more content dynamically
            document.getElementById('additional-content').innerHTML = '<p>More content inserted here.</p>';
        </script>
    </body>
    </html>
`;
