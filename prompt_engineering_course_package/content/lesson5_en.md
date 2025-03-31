# Interactive Lesson 5: Prompt Engineering for Security Analysis

## Learning Objectives
- Optimize prompts for security analysis
- Effectively use Gemini for SOC tasks
- Extract security-relevant information

## Introduction

Welcome to the fifth lesson of our Prompt Engineering course! In this lesson, we will focus on how to apply prompt engineering specifically for security analysis and SOC tasks.

## Prompts for Log Analysis

Analyzing security logs is one of the core tasks in a SOC. With well-designed prompts, Gemini can assist in interpreting and analyzing these logs.

### Best Practices for Log Analysis Prompts

1. **Provide context about the logging system**: Explain the format and meaning of log entries
2. **Define specific patterns or anomalies**: Specify what to look for
3. **Narrow down the timeframe**: Focus the analysis on relevant time periods
4. **Request structured output**: Ask for an organized presentation of the results

### Example of a Log Analysis Prompt

```
You are a SOC analyst specializing in SIEM systems. Analyze the following Windows security logs and identify possible signs of a brute force attack or unauthorized access attempts.

Log format: [Date Time] [Event ID] [User] [Source IP] [Status] [Details]

Logs:
[2025-03-15 08:23:15] [4625] [Administrator] [198.51.100.42] [Failed] [Invalid password]
[2025-03-15 08:23:18] [4625] [Administrator] [198.51.100.42] [Failed] [Invalid password]
[2025-03-15 08:23:22] [4625] [Administrator] [198.51.100.42] [Failed] [Invalid password]
[2025-03-15 08:23:25] [4625] [Administrator] [198.51.100.42] [Failed] [Invalid password]
[2025-03-15 08:23:30] [4625] [Administrator] [198.51.100.42] [Failed] [Invalid password]
[2025-03-15 08:23:35] [4624] [Administrator] [198.51.100.42] [Success] [Login]
[2025-03-15 08:24:02] [4688] [Administrator] [198.51.100.42] [Success] [New process: cmd.exe]
[2025-03-15 08:24:15] [4688] [Administrator] [198.51.100.42] [Success] [New process: powershell.exe]

Analyze these logs and:
1. Identify suspicious activities
2. Assess the severity (high, medium, low)
3. Recommend appropriate actions
4. Explain what additional logs or information would be helpful
```

## Pattern Recognition Prompts

Pattern recognition is an important aspect of security analysis. With specialized prompts, you can help Gemini identify patterns in data that might indicate security incidents.

### Elements of an Effective Pattern Recognition Prompt

1. **Describe known patterns**: Explain typical patterns for specific attacks
2. **Provide context about normal activities**: Help the model identify deviations
3. **Include multiple data sources**: Combine information from different sources
4. **Ask for correlations**: Request the model to identify relationships

### Example of a Pattern Recognition Prompt

```
You are a threat hunter in a SOC team. Analyze the following network and endpoint data to identify possible signs of an Advanced Persistent Threat (APT).

Network connections:
- 192.168.1.105 -> 203.0.113.42:443 (HTTPS, daily, 10:00-11:00 PM, data volume: ~500KB)
- 192.168.1.105 -> 198.51.100.73:8080 (HTTP, irregular, various times of day)
- 192.168.1.105 -> 192.168.1.1:53 (DNS)

Processes on 192.168.1.105:
- svchost.exe (legitimate Windows process, but with unusual parent process)
- rundll32.exe (running from temp directory)
- powershell.exe (with obfuscated command line parameters)

Typical APT patterns include:
- Regular, time-scheduled connections to C2 servers
- Use of legitimate processes for malware execution
- Obfuscated commands and scripts
- Data exfiltration over encrypted channels

Identify possible APT activities in this data, explain the suspicious patterns, and recommend further investigation steps.
```

## Summarizing Security Incidents

Summarizing security incidents is an important task to make complex information understandable for various stakeholders. Gemini can help create clear and precise summaries.

### Elements of an Effective Summary Prompt

1. **Define the audience**: Specify who the summary is intended for
2. **Set the level of detail**: Specify how detailed the summary should be
3. **Provide structure**: Define the desired sections of the summary
4. **Adjust technical jargon**: Request more or less technical details depending on the audience

### Example of a Summary Prompt

```
You are a SOC manager who needs to summarize a security incident for various stakeholders. Based on the following technical details, create three different summaries:

Technical details:
- Ransomware infection through phishing email with malicious macro
- Affected systems: 3 workstations in the finance department
- Encryption of local files on the affected systems
- No spread to network shares or servers thanks to quick isolation
- Successful recovery from backups, no ransom paid
- Identified vulnerability: Macros in Office documents enabled by default

1. Create a technical summary for the IT security team (detailed, technical)
2. Create a management summary for the executive team (brief, business-oriented)
3. Create a notification for all employees (simple, educational)

Each summary should contain the most important information relevant to the respective audience.
```

## Practical Exercise: Prompts for Security Analysis

Let's create some prompts for typical SOC tasks:

1. Develop a prompt for analyzing firewall logs to identify unusual outbound traffic.
2. Create a prompt for correlating events from different security systems.
3. Formulate a prompt for prioritizing security alerts based on severity and context.

## Challenge: Prompt for Detecting Anomalies in Network Data

**Task:**

Develop a comprehensive prompt for a Gemini model to help your SOC team detect anomalies in network data. The prompt should:

1. Provide clear context about normal network activities in your organization
2. Include realistic network data showing both normal and potentially anomalous activities
3. Instruct the model to identify and explain specific types of anomalies
4. Request a structured output for the results
5. Ask for recommendations for further investigation or actions

Remember to use SOC-specific terminology and realistic data to make the prompt practical.

## Summary

In this lesson, we have learned:
- How to optimize prompts for analyzing security logs
- How to create pattern recognition prompts for identifying security threats
- How to design prompts for summarizing security incidents for different audiences
- How to effectively use Gemini for various SOC tasks

In the next lesson, we will explore the integration of the Gemini API and the automation of SOC tasks.
