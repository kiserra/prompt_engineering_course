FROM nginx:alpine

# Copy the course files to the nginx html directory
COPY prompt_engineering_course_package /usr/share/nginx/html

# Copy the nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Set environment variable for API key (to be overridden at runtime)
ENV GEMINI_API_KEY="YOUR_API_KEY"

# Add a startup script to replace the API key placeholder
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Use the startup script as the entrypoint
ENTRYPOINT ["/start.sh"]

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
