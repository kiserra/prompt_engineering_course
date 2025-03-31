#!/bin/sh

# Replace the API key placeholder in the gemini-api.js file
if [ "$GEMINI_API_KEY" != "YOUR_API_KEY" ]; then
    echo "Setting Gemini API key..."
    sed -i "s/const GEMINI_API_KEY = \"YOUR_API_KEY\"/const GEMINI_API_KEY = \"$GEMINI_API_KEY\"/" /usr/share/nginx/html/js/gemini-api.js
    echo "API key configured successfully."
else
    echo "Warning: Using default API key placeholder. For full functionality, set the GEMINI_API_KEY environment variable."
fi

# Start nginx
echo "Starting nginx server..."
exec "$@"
