# Interactive Lesson 1: Fundamentals of Prompt Engineering

## Learning Objectives
- Understand what prompts are and how they work
- Learn about different prompt types
- Formulate first simple prompts

## Introduction

Welcome to the first lesson of our Prompt Engineering course! In this lesson, we will learn the fundamentals of prompt engineering and understand how to formulate effective prompts for Gemini.

## What is a Prompt?

A prompt is a natural language request submitted to a language model like Gemini to receive a response. Prompts can contain questions, instructions, contextual information, examples, and partial inputs for the model to complete or continue.

## The Anatomy of an Effective Prompt

An effective prompt consists of several components:

1. **Input (required)**: The main part of the prompt for which the model should provide a response
2. **Context (optional)**: Background information or instructions that help the model better understand the request
3. **Examples (optional)**: Input-output pairs that show the model what an ideal response should look like

## Prompt Types

### 1. Question Input
A question that you ask the model that the model provides an answer to.

**Example:**
```
What are the most common types of cyber attacks on corporate networks?
```

### 2. Task Input
A task that you want the model to perform.

**Example:**
```
Create a list of 5 best practices for secure passwords.
```

### 3. Entity Input
An entity the model performs an action on, such as classify or summarize.

**Example:**
```
Classify the following security incidents as [high, medium, low] priority:
1. Unknown IP address attempting multiple administrator login attempts
2. Employee saved a document on a public share
3. Antivirus software reports potential malware in an email attachment
```

### 4. Completion Input
Text that the model is expected to complete or continue.

**Example:**
```
Complete the following incident response plan:
1. Identification of the incident
2. Containment of the incident
3. ...
```

## Best Practices for Prompt Engineering

1. **Provide clear and precise instructions**: The more specific your instructions are, the better the model can understand what you want.

2. **Define the role**: Assign the model a specific role to guide its responses.

3. **Provide guidance instead of giving orders**: Formulate your requests as guidance rather than direct commands.

4. **Specify the task and clear goals**: Define exactly what you want to achieve.

5. **Provide context**: Give relevant background information to help the model better understand your request.

## Practical Exercise: Creating Simple Prompts

Let's create some simple prompts for common SOC tasks:

1. Create a prompt to get a summary of the latest threats to corporate networks.
2. Formulate a prompt to get steps for investigating a suspicious email.
3. Develop a prompt to create a checklist for responding to a phishing attack.

## Challenge: Prompt Improvement

**Starting point:**
```
Explain malware.
```

**Improved version:**
```
You are a cybersecurity expert helping a SOC team member. Explain the different types of malware, their typical infection vectors, and how to detect them. Provide concrete examples and organize your response in clearly defined sections.
```

## Your Task

Improve the following simple prompt to get more accurate and useful responses for your SOC team:

```
How do I detect a data breach?
```

Remember to apply the best practices:
- Define a role for the model
- Provide clear instructions
- Specify the task and goals
- Add relevant context

## Summary

In this lesson, we have learned:
- What prompts are and how they work
- The different types of prompts: question, task, entity, and completion
- How to formulate effective prompts by applying best practices

In the next lesson, we will delve deeper into instruction prompts and learn how to optimize them specifically for SOC teams.
