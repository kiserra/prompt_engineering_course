# Interactive Lesson 3: Context and Examples in Prompts

## Learning Objectives
- Understand the role of context in prompts
- Effectively incorporate examples in prompts
- Enrich prompts with relevant information

## Introduction

Welcome to the third lesson of our Prompt Engineering course! In this lesson, we will explore how context and examples in prompts can significantly improve the quality of responses from Gemini.

## The Importance of Context in Prompts

Context provides the language model with additional information it needs to generate precise and relevant answers. Without sufficient context, the model has to make assumptions, which can lead to inaccurate or incomplete responses.

Context can take various forms:
- Background information about the problem
- Specific requirements or constraints
- Domain-specific knowledge
- Previous interactions or results

## Providing Context in Prompts

### 1. Relevant Background Information

Provide the model with important background information that is relevant to the task.

**Example:**
```
Context: Our company is a mid-sized financial service provider with 500 employees. We use a hybrid cloud infrastructure with on-premise servers and Azure services. Recently, we have detected suspicious activities in our network that suggest possible lateral movement.

Task: Create a checklist for investigating these suspicious activities.
```

### 2. Specific Requirements

Clearly define what specific requirements or constraints apply to the response.

**Example:**
```
Create an incident response plan for a ransomware attack. The plan must:
- Be implementable by a SOC team with 3 analysts
- Not require tools that cost more than $5,000
- Work in a Windows environment
- Ensure compliance with GDPR
```

### 3. Domain-Specific Knowledge

Provide relevant expertise that is important for the task.

**Example:**
```
In our SIEM system, we use the following event IDs for Windows security logs:
- 4624: Successful login
- 4625: Failed login
- 4648: Explicit login with alternative credentials
- 4672: Special privileges assigned

Create a search query that identifies potential pass-the-hash attacks.
```

## Few-Shot and Zero-Shot Prompting

### Zero-Shot Prompting

In zero-shot prompting, you give the model a task without providing examples of the expected response. The model must understand and solve the task without specific examples.

**Example:**
```
Classify the following security alerts by severity (critical, high, medium, low):

1. Multiple failed login attempts for an admin account
2. Unusual data upload to an external IP address
3. Antivirus warning for a temporary file
4. Unknown USB device connected
```

### Few-Shot Prompting

In few-shot prompting, you give the model a few examples of the expected response before posing the actual task. This helps the model understand the desired format and logic.

**Example:**
```
Classify the following security alerts by severity (critical, high, medium, low):

Examples:
- Unauthorized access to financial records -> critical
- Suspicious PowerShell commands -> high
- Failed VPN login -> medium
- Outdated software detected -> low

Now classify these alerts:
1. Multiple failed login attempts for an admin account
2. Unusual data upload to an external IP address
3. Antivirus warning for a temporary file
4. Unknown USB device connected
```

## Effectively Incorporating Examples in Prompts

### 1. Demonstrate Format and Structure

Use examples to show the desired format and structure of the response.

**Example:**
```
Create descriptions for the following security incidents in the format:
[Incident ID] - [Date] - [Short description]
[Affected systems]
[Impact]
[Recommended actions]

Example:
INC-2023-001 - 03/15/2023 - Phishing campaign targeting finance department
Affected systems: 3 workstations in the finance department
Impact: Potential access to financial data, no confirmed data compromise
Recommended actions: Reset passwords, perform endpoint scan, phishing training for finance team

Now create descriptions for:
1. Suspicious login from foreign country
2. Malware detection on a server
```

### 2. Show Logic and Thought Process

Use examples to demonstrate the logic and thought process you expect in the response.

**Example:**
```
Analyze the following network connections and identify suspicious activities. Explain your analysis.

Example:
Connection: 192.168.1.105:49234 -> 203.0.113.42:445
Analysis: Suspicious. An internal host (192.168.1.105) is connecting to port 445 (SMB) of an external IP address. SMB connections should not typically go over the internet and could indicate a data exfiltration attempt or a command-and-control connection.

Now analyze:
1. 192.168.1.110:52413 -> 198.51.100.73:22
2. 192.168.1.115:63142 -> 172.16.0.5:3389
```

## Practical Exercise: Prompts with Context and Examples

Let's create some prompts with context and examples for SOC tasks:

1. Create a few-shot prompt for classifying phishing emails.
2. Formulate a prompt with detailed context for analyzing network traffic.
3. Develop a prompt with examples for creating incident response reports.

## Challenge: Few-Shot Prompt for Classifying Security Alerts

**Task:**

Develop a comprehensive few-shot prompt for a Gemini model to help your SOC team classify security alerts. The prompt should:

1. Provide a clear context for the classification task
2. Include at least 3 examples of different severity levels
3. Explain the logic behind the classification
4. Define specific criteria for each severity category
5. Include at least 5 new security alerts to be classified

Remember to use SOC-specific terminology and realistic scenarios to make the prompt practical.

## Summary

In this lesson, we have learned:
- The importance of context in prompts and how to provide it effectively
- The difference between zero-shot and few-shot prompting
- How to use examples to demonstrate format, structure, and logic
- How to enrich prompts with relevant information to get more precise responses

In the next lesson, we will explore advanced prompt techniques, including chain-of-thought prompting and role-based prompts.
