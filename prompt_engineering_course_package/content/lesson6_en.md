# Interactive Lesson 6: Gemini API Integration and Automation

## Learning Objectives
- Integrate Gemini API into workflows
- Understand prompt-based automation
- Create your own prompt templates

## Introduction

Welcome to the sixth lesson of our Prompt Engineering course! In this lesson, we will explore how to integrate the Gemini API into our workflows and automate SOC tasks using prompts.

## Basics of the Gemini API

The Gemini API allows us to integrate Gemini's capabilities directly into our applications and workflows. This enables us to use prompt engineering for task automation.

### Key Components of the Gemini API

1. **API Key**: For authentication with the API
2. **Model Selection**: Different Gemini models for various requirements
3. **Prompt Parameters**: Control of model behavior
4. **Response Formats**: Structured outputs for further processing

### Basic Parameters for the API

- **Temperature**: Controls creativity vs. determinism (0.0 - 1.0)
- **Top-k** and **Top-p**: Influence the diversity of responses
- **Max Output Tokens**: Limits the length of the response
- **Safety Settings**: Controls content filtering

## Prompt Templates and Their Customization

Prompt templates are reusable prompt structures optimized for specific tasks. They can serve as a foundation for various use cases and be customized as needed.

### Structure of a Prompt Template

An effective prompt template consists of several components:

1. **Static Part**: Consistent instructions and context
2. **Dynamic Part**: Placeholders for variable information
3. **Formatting Instructions**: Guidelines for the output format
4. **Examples**: Demonstrations of expected behavior

### Example of a SOC Prompt Template

```
You are a SOC analyst specializing in {{SPECIALIZATION}}. Analyze the following {{DATA_TYPE}} and identify potential security threats.

Data:
{{DATA}}

Consider the following factors:
- Known indicators for {{THREAT_TYPE}}
- Typical patterns for this type of activity
- Company context: {{COMPANY_CONTEXT}}

Your analysis should include the following sections:
1. Summary of findings
2. Identified suspicious activities
3. Severity assessment (high, medium, low)
4. Recommended actions
5. Additional investigation steps

Format your response as a structured report with Markdown headings.
```

### Customizing Templates for Specific Use Cases

This template can be adapted for various SOC tasks by filling in the placeholders accordingly:

- **Phishing Analysis**: SPECIALIZATION = "email security", DATA_TYPE = "email headers and content"
- **Malware Analysis**: SPECIALIZATION = "malware analysis", DATA_TYPE = "process and network activities"
- **Network Analysis**: SPECIALIZATION = "network security", DATA_TYPE = "network traffic logs"

## Automating SOC Tasks with Prompts

The combination of the Gemini API and well-designed prompts enables the automation of various SOC tasks.

### Typical Automation Scenarios

1. **Initial Alert Assessment**: Automatic analysis and prioritization of security alerts
2. **Incident Enrichment**: Automatic addition of context and threat intelligence
3. **Report Generation**: Automatic creation of summaries and reports
4. **Action Recommendations**: Suggestions for next steps based on incident details

### Example: Automating Initial Alert Assessment

```python
import requests
import json

# Gemini API configuration
API_KEY = "YOUR_API_KEY"
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"

# Prompt template for alert assessment
def create_alert_assessment_prompt(alert_data):
    return f"""
    You are a SOC analyst evaluating security alerts. Analyze the following alert and assess its priority.

    Alert:
    {alert_data}

    Evaluate this alert based on the following criteria:
    1. Severity (critical, high, medium, low)
    2. Likelihood of a real security incident (high, medium, low)
    3. Potential impact
    4. Recommended next steps

    Provide your assessment in JSON format with the fields: severity, likelihood, impact, recommended_actions.
    """

# Function to call the Gemini API
def assess_alert(alert_data):
    prompt = create_alert_assessment_prompt(alert_data)
    
    headers = {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY
    }
    
    data = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.2,
            "topK": 40,
            "topP": 0.95,
            "maxOutputTokens": 1024
        }
    }
    
    response = requests.post(API_URL, headers=headers, json=data)
    result = response.json()
    
    # Extract the text response
    response_text = result["candidates"][0]["content"]["parts"][0]["text"]
    
    # Try to parse the JSON response
    try:
        assessment = json.loads(response_text)
        return assessment
    except:
        # Fallback if the response is not valid JSON
        return {"error": "Could not create structured assessment", "raw_response": response_text}

# Example usage
alert_example = """
Source: Firewall
Time: 2025-03-28 15:42:23
Type: Multiple failed login attempts
User: admin
Source IP: 203.0.113.42
Destination: Internal server (192.168.1.10)
Details: 15 failed login attempts within 2 minutes
"""

assessment_result = assess_alert(alert_example)
print(json.dumps(assessment_result, indent=2))
```

## Practical Exercise: Gemini API Integration

Let's do some practical exercises on integrating the Gemini API:

1. Create a prompt template for analyzing phishing emails.
2. Develop a simple Python script that uses the Gemini API to analyze security logs.
3. Design an automated workflow for creating incident response reports using the Gemini API.

## Challenge: Prompt Template for Recurring SOC Tasks

**Task:**

Develop a comprehensive prompt template for a recurring SOC task of your choice (e.g., malware analysis, phishing assessment, vulnerability assessment). The template should:

1. Include clearly defined placeholders for variable information
2. Provide detailed instructions for the model
3. Define specific formatting requirements for the output
4. Include examples of expected output
5. Be adaptable for different variants of the task

Additionally, create a simple concept for a Python script that would use this template with the Gemini API to automate the task.

## Summary

In this lesson, we have learned:
- The basics of the Gemini API and its key parameters
- How to create prompt templates and customize them for different use cases
- How to automate SOC tasks using prompts and the Gemini API
- Practical examples for integrating Gemini into SOC workflows

In the next lesson, we will explore best practices and common pitfalls in prompt engineering.
