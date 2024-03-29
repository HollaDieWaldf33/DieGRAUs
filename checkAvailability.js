<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DieGRAUs - Uptime Status</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0; /* Light gray background */
            color: #333;
        }

        header {
            background-color: #555; /* Dark gray header */
            color: #fff;
            padding: 1em;
            text-align: center;
        }

        section {
            max-width: 800px;
            margin: 2em auto;
            background-color: #fff;
            padding: 1em;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        footer {
            text-align: center;
            padding: 1em;
            background-color: #555;
            color: #fff;
        }

        .service-link {
            display: block;
            margin-bottom: 10px;
            text-decoration: none;
            color: #3498db;
        }

        .service-icon {
            margin-right: 8px;
        }

        .availability-icon {
            margin-right: 4px;
            font-size: 18px;
        }

        .availability-green {
            color: #27ae60; /* Green color for availability */
        }

        .availability-red {
            color: #e74c3c; /* Red color for unavailability */
        }
    </style>
</head>
<body>
    <header>
        <h1>DieGRAUs Uptime Status</h1>
    </header>

    <section>
        <h2>Services</h2>
        <a href="https://seafile.uarg.de" class="service-link" target="_blank">
            <i class="fas fa-cloud service-icon"></i> Seafile
            <i id="seafileStatusIcon" class="availability-icon"></i>
        </a>
        <a href="https://bitwarden.uarg.de" class="service-link" target="_blank">
            <i class="fas fa-key service-icon"></i> Bitwarden
            <i id="bitwardenStatusIcon" class="availability-icon"></i>
        </a>
        <a href="https://jellyfin.uarg.de" class="service-link" target="_blank">
            <i class="fas fa-tv service-icon"></i> Jellyfin
            <i id="jellyfinStatusIcon" class="availability-icon"></i>
        </a>
    </section>

    <footer>
        <p>Page last updated on: <span id="lastUpdated"></span></p>
    </footer>

    <script src="checkAvailability.js"></script>
    <script>
        // Update last updated timestamp
        document.getElementById('lastUpdated').innerText = new Date().toLocaleString('de-DE');
    </script>
</body>
</html>
