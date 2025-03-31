# Interactive Lesson 2: Instruction Prompts for SOC Teams

## Learning Objectives
- Understand how instruction prompts work
- Formulate effective instructions for Gemini
- Create SOC-specific instruction prompts

## Introduction

Welcome to the second lesson of our Prompt Engineering course! In this lesson, we will focus on instruction prompts and learn how to optimize them specifically for SOC teams.

## What are Instruction Prompts?

Instruction prompts are directives that tell the language model exactly what to do. They are particularly useful when you want to accomplish specific tasks or obtain certain information. Unlike simple questions, instruction prompts give the model clear directions about the desired action and expected outcome.

## Structure of Instruction Prompts

An effective instruction prompt consists of several elements:

1. **Role instruction**: Defines who or what the model should respond as
2. **Task description**: Describes the task to be completed
3. **Formatting instructions**: Indicates how the response should be structured
4. **Constraints**: Defines boundaries or specific requirements
5. **Examples**: Shows what the answer should look like

## Best Practices for Instruction Prompts

### 1. Provide Clear Role Instruction

Assign the model a specific role that is relevant to the task.

**Example:**
```
You are an experienced SOC analyst supporting a team in investigating security incidents.
```

### 2. Provide Guidance Instead of Giving Orders

Formulate your requests as guidance rather than direct commands.

**Less effective:**
```
Create a list of IoCs.
```

**More effective:**
```
As a SOC analyst, you would create a list of Indicators of Compromise (IoCs) that would be helpful in investigating a ransomware attack. Please share this list.
```

### 3. Specify the Task and Clear Goals

Define exactly what you want to achieve.

**Example:**
```
Create a step-by-step guide for investigating suspicious network activities. The guide should be understandable for junior analysts and highlight the key indicators of potential intruders.
```

### 4. Provide Formatting Instructions

Indicate how the response should be structured.

**Example:**
```
Structure your response into the following sections:
1. Initial signs of an attack
2. Evidence to collect
3. Analysis steps
4. Recommended actions
```

### 5. Define Constraints

Set clear boundaries for the response.

**Example:**
```
Focus exclusively on Windows environments and do not consider cloud services.
```

## SOC-specific Instruction Prompts

Here are some examples of effective instruction prompts that are specifically relevant for SOC teams:

### Example 1: Incident Response

```
You are a senior SOC analyst specializing in incident response. Create a detailed response plan for a suspected ransomware attack. The plan should include the following sections:

1. Immediate containment measures
2. Evidence preservation
3. Analysis of attack vectors
4. Recovery steps
5. Post-incident review and lessons learned

Pay particular attention to communication with management and other departments. The plan should be suitable for a medium-sized company with Windows infrastructure and some cloud services.
```

### Example 2: Threat Hunting

```
As an experienced threat hunter, you need to create a guide for proactively searching for signs of an Advanced Persistent Threat (APT) in a corporate network. Your guide should:

- List the most important indicators of APT activities
- Identify specific log sources that should be checked
- Suggest concrete search queries for SIEM systems
- Recommend a prioritization strategy for alerts

Keep the guide practical and actionable for a SOC team with limited resources.
```

## Practical Exercise: Instruction Prompts for SOC Tasks

Let's create some instruction prompts for typical SOC tasks:

1. Create an instruction prompt for analyzing firewall logs.
2. Formulate an instruction prompt for creating a phishing detection checklist.
3. Develop an instruction prompt for assessing the severity of a security incident.

## Challenge: Complex Instruction Prompt for Incident Response

**Task:**

Develop a comprehensive instruction prompt for a Gemini model to help your SOC team respond to a suspected data breach. The prompt should:

1. Assign a clear role to the model
2. Define the specific task and goals
3. Include formatting instructions
4. Set relevant constraints
5. Provide an example context for the data breach

Remember to apply the best practices for instruction prompts and optimize the prompt specifically for the needs of a SOC team.

## Summary

In this lesson, we have learned:
- What instruction prompts are and how they work
- How to create effective instruction prompts with clear role instructions, task descriptions, and formatting instructions
- How to develop SOC-specific instruction prompts for various security tasks

In the next lesson, we will explore the use of context and examples in prompts to get even more precise and useful responses from Gemini.
