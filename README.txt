QUILTCLIENT ADMIN JAR REPLACER

Upload admin.html to your GitHub Pages repo.
Run worker.js as a Cloudflare Worker.

In admin.html replace the API URL with your Worker URL.

Worker secrets/variables:
ADMIN_PASSWORD = your admin password
GITHUB_TOKEN = GitHub fine-grained token with Contents read/write on QuiltClient-app
GITHUB_OWNER = sk53882724845-code
GITHUB_REPO = QuiltClient-app
GITHUB_BRANCH = main
JAR_PATH = downloads/QuiltClient.jar

Keep ADMIN_PASSWORD and GITHUB_TOKEN as Worker secrets. Never put the token in public website code.

The existing downloads/QuiltClient.jar is replaced by the uploaded JAR.
