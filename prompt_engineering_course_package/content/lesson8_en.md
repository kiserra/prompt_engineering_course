# Interactive Lesson 8: Final Project - SOC Prompt Engineering Challenge

## Learning Objectives
- Apply what you've learned in a practical project
- Solve complex SOC tasks with prompt engineering
- Iteratively improve and optimize prompts

## Introduction

Welcome to the eighth and final lesson of our Prompt Engineering course! In this lesson, we will apply all the knowledge you've gained in the previous lessons in a comprehensive final project.

## Summary of Course Content

Before we begin the final project, let's briefly summarize the key concepts we've covered in this course:

1. **Fundamentals of Prompt Engineering**
   - Different prompt types: question, task, entity, completion
   - Anatomy of an effective prompt: input, context, examples

2. **Instruction Prompts for SOC Teams**
   - Clear role instructions
   - Specific task descriptions
   - Formatting instructions

3. **Context and Examples in Prompts**
   - Zero-shot vs. few-shot prompting
   - Providing relevant background information
   - Demonstrating format and logic through examples

4. **Advanced Prompt Techniques**
   - Chain-of-thought prompting
   - Role-based prompts
   - Requesting structured output formats

5. **Prompt Engineering for Security Analysis**
   - Log analysis prompts
   - Pattern recognition prompts
   - Summarizing security incidents

6. **Gemini API Integration and Automation**
   - Basics of the Gemini API
   - Prompt templates and their customization
   - Automating SOC tasks

7. **Best Practices and Pitfalls**
   - Avoiding common mistakes
   - Systematically improving prompts
   - Considering ethical aspects

## Final Project: Incident Response Workflow with Prompt Engineering

For our final project, we will develop a comprehensive incident response workflow that uses prompt engineering to analyze and address various aspects of a security incident.

### Scenario

You are part of the SOC team at a mid-sized financial service provider. Your company has recently detected suspicious activities that suggest a possible security incident. As a prompt engineering expert, you need to develop a workflow that uses Gemini to analyze and address the incident.

### Available Data

For this project, you have the following data available:

1. **Firewall Logs**: Show unusual outbound connections from an internal server to an unknown external IP address.

2. **Email Headers**: A suspicious email sent to multiple employees in the finance department.

3. **Endpoint Telemetry**: Unusual process activities on several workstations in the finance department.

4. **Network Traffic**: Increased data volume at unusual times of day.

### Task

Develop a comprehensive prompt engineering workflow for this incident response case. Your workflow should include the following components:

1. **Initial Assessment**: A prompt for initial analysis and evaluation of the available data.

2. **Deeper Investigation**: Multiple specialized prompts for detailed analysis of various aspects of the incident (network, email, endpoint).

3. **Correlation and Summary**: A prompt to correlate the findings and create an overall analysis.

4. **Action Recommendations**: A prompt to develop recommendations for containment, eradication, and recovery.

5. **Reporting**: Prompts for creating reports for different audiences (technical team, management, employees).

### Requirements

For each component of your workflow, you should:

1. Create a detailed prompt that applies best practices from the course
2. Explain which prompt techniques you used and why
3. Identify potential pitfalls and how you avoided them
4. Consider ethical aspects

## Practical Implementation

Let's now go through the development of this workflow step by step:

### 1. Initial Assessment

**Prompt for Initial Assessment:**

```
You are an experienced SOC analyst specializing in incident response. You have been tasked with the initial assessment of a possible security incident.

Available data:

1. Firewall Logs:
- Server 192.168.10.15 has established multiple connections to external IP 203.0.113.42 on port 8080 in the last 48 hours
- The data volume of these connections totals approximately 2.3 GB
- The connections primarily occur between 2:00 and 4:00 AM

2. Email Headers:
From: support@financial-updates.com
Subject: Important Financial Update - Immediate Action Required
Date: 03/28/2025 09:15:22
Attachment: Q1_Financial_Report_2025.xlsx

3. Endpoint Telemetry:
- Execution of powershell.exe with obfuscated command line parameters detected on 3 workstations in the finance department
- Unusual registry changes in the HKCU\Software\Microsoft\Windows\CurrentVersion\Run area on these workstations
- All affected users received and opened the email from support@financial-updates.com

4. Network Traffic:
- Increased outbound data volume between 2:00 and 4:00 AM
- Unusual DNS queries to domains with seemingly random names

Conduct an initial assessment of this possible security incident. Proceed as follows:

1. Analyze each data source and identify suspicious elements
2. Correlate information from different sources
3. Assess the severity of the possible incident (critical, high, medium, low)
4. Formulate a preliminary hypothesis about the nature of the incident
5. Recommend immediate next steps for further investigation

Structure your response in clearly defined sections with Markdown headings.
```

**Explanation:**
- **Techniques Used**: Role instruction, detailed context, structured task description, formatting instructions
- **Benefits**: Clear task definition, comprehensive context, structured output
- **Avoided Pitfalls**: Too vague instructions, lack of context

### 2. Deeper Investigation - Network Analysis

**Prompt for Network Analysis:**

```
You are a network security expert in a SOC team. Based on the initial assessment of a security incident, you need to conduct a deeper analysis of the network aspects.

Context from initial assessment:
- Server 192.168.10.15 has established connections to external IP 203.0.113.42 on port 8080
- High data transfer (2.3 GB) primarily between 2:00 and 4:00 AM
- Unusual DNS queries to domains with seemingly random names
- Suspicion of data exfiltration following a malware infection via phishing email

Additional network data:
- IP 203.0.113.42 is not associated with any known business partner
- Geolocation of the IP: Eastern Europe
- Server 192.168.10.15 is an internal file server with access to financial data
- Typical communication patterns of the server are limited to business hours (8:00 AM-6:00 PM)
- DNS queries go to domains like: a7f3b2c1.financialdata.net, 9d2e5f8c.bankupdate.org

Analyze this network data and:
1. Assess the likelihood of data exfiltration
2. Identify possible command-and-control (C2) communication
3. Explain the significance of the temporal patterns
4. Analyze the DNS queries for signs of Domain Generation Algorithms (DGA)
5. Recommend specific network-based containment measures

Think through your analysis step by step and explain your conclusions. Structure your response in clearly defined sections.
```

**Explanation:**
- **Techniques Used**: Specialized role instruction, chain-of-thought prompting, detailed context
- **Benefits**: Focused analysis of a specific aspect, traceable thought process
- **Avoided Pitfalls**: Too broad task definition, lack of specialization

### 3. Correlation and Summary

**Prompt for Correlation and Summary:**

```
You are a senior SOC analyst with experience in correlating security data from various sources. Based on the results of multiple analyses, you need to create an overall assessment of a security incident.

Results of network analysis:
- High probability of data exfiltration via encrypted HTTP connections
- The external IP 203.0.113.42 is associated with known APT groups
- DNS queries show characteristics of a Domain Generation Algorithm (DGA)
- Recommended network measures: Block the external IP, monitor unusual outbound connections

Results of email analysis:
- The email from support@financial-updates.com is a phishing attempt
- The attachment contains a malicious macro that executes PowerShell code
- The sender domain was registered only recently
- Similar phishing campaigns have been linked to the APT group "FinancialHarvest"

Results of endpoint analysis:
- The PowerShell commands download a two-stage loader
- The registry changes serve for persistence
- Access to sensitive financial documents was detected on the affected workstations
- Signs of lateral movement to the file server were found

Create a comprehensive correlation and summary of the incident:
1. Describe the likely attack chain (kill chain) from beginning to end
2. Identify the likely attackers and their motivation
3. Assess the severity and impact of the incident
4. Summarize the key indicators of compromise (IoCs)
5. Create a timeline of the key events

Your summary should be understandable for both technical experts and management. Use a clear structure with sections and subsections.
```

**Explanation:**
- **Techniques Used**: Role instruction, comprehensive context from various sources, structured task description
- **Benefits**: Enables correlation of different data sources, provides an overall view
- **Avoided Pitfalls**: Isolated consideration of individual aspects, missing connections

### 4. Action Recommendations

**Prompt for Action Recommendations:**

```
You are an incident response specialist in a SOC team. After analyzing a security incident, you need to develop a comprehensive action plan.

Summary of the incident:
- APT group "FinancialHarvest" gained access through a phishing email with malicious Excel macro
- Affected systems: 3 workstations in the finance department and 1 file server
- Signs of financial data exfiltration (approx. 2.3 GB)
- Persistence mechanisms were installed on the affected systems
- The attack has been ongoing for at least 48 hours

Develop a detailed action plan with the following phases:

1. Immediate Containment:
   - What immediate actions should be taken to stop the attack?
   - How can further damage be prevented?

2. Eradication:
   - How should the affected systems be cleaned?
   - What steps are necessary to remove all components of the malware?

3. Recovery:
   - How should the systems be restored?
   - What steps are necessary to ensure normal operation?

4. Improvement:
   - What vulnerabilities were exploited?
   - What long-term measures can prevent similar incidents in the future?

Consider business continuity and the need to preserve evidence for possible forensic investigations in your recommendations. Prioritize actions by urgency and effectiveness.
```

**Explanation:**
- **Techniques Used**: Specialized role instruction, structured task description, clear phases
- **Benefits**: Practical, actionable recommendations, clear prioritization
- **Avoided Pitfalls**: Too theoretical or general recommendations, lack of structure

### 5. Management Reporting

**Prompt for Management Reporting:**

```
You are a SOC manager who needs to summarize a security incident for executive leadership. Create an executive summary that presents the key aspects of the incident in a way that is understandable for non-technical people.

Incident details:
- APT group gained access to financial systems through phishing
- Sensitive financial data may have been stolen (approx. 2.3 GB)
- Affected systems have been identified and isolated
- A comprehensive action plan has been developed and is being implemented
- No evidence of customer data being compromised

Create an executive summary with the following sections:

1. Incident Overview:
   - What happened? (in non-technical language)
   - When was it discovered?
   - Which systems/data are affected?

2. Business Impact:
   - What potential impacts does the incident have on the company?
   - Are there regulatory or compliance implications?
   - What risks exist for reputation and finances?

3. Current Actions:
   - What steps have already been taken?
   - How is the situation currently being handled?

4. Next Steps:
   - What further actions are planned?
   - What resources are needed?
   - What timeframe is expected?

5. Recommendations:
   - What strategic decisions should executive leadership make?
   - What investments could prevent future incidents?

The report should be no more than one page long, clear and concise. Avoid technical jargon and focus on business aspects and risk management.
```

**Explanation:**
- **Techniques Used**: Audience-specific role instruction, clear formatting requirements, focus on non-technical aspects
- **Benefits**: Information relevant to the target audience, business-oriented perspective
- **Avoided Pitfalls**: Too technical details, lack of business relevance

## Evaluation Criteria

Your final project will be evaluated based on the following criteria:

1. **Completeness**: Have you covered all required components of the workflow?
2. **Application of Course Content**: Have you effectively used the various prompt techniques from the course?
3. **Quality of Prompts**: Are your prompts clear, precise, and effective for the respective task?
4. **Consideration of Best Practices**: Have you applied the best practices for prompt engineering?
5. **Avoidance of Pitfalls**: Have you avoided common mistakes?
6. **Ethical Considerations**: Have you appropriately considered ethical aspects?
7. **Practical Applicability**: Is your workflow implementable in a real SOC environment?

## Your Task

Develop your own incident response workflow with prompt engineering for a scenario of your choice. You can use the scenario described above or develop your own that is relevant to your SOC team.

Your workflow should include at least four different prompts covering various aspects of the incident response process. For each prompt, you should explain:
- Which prompt techniques you used
- Why you chose these techniques
- Which pitfalls you avoided
- Which ethical considerations you took into account

## Summary

In this final lesson, we have:
- Summarized the key concepts of the course
- Conducted a comprehensive final project
- Applied various prompt techniques in a realistic scenario
- Developed a complete incident response workflow with prompt engineering

Congratulations on completing the Prompt Engineering course! You now have a solid foundation in prompt engineering for SOC teams and can use these skills in your daily work to increase the efficiency and effectiveness of your team.
