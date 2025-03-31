# Prompt Engineering Basics for Gemini

## What is a Prompt?

A prompt is a natural language request submitted to a language model to receive a response. Prompts can contain questions, instructions, contextual information, examples, and partial inputs for the model to complete or continue. After the model receives a prompt, depending on the type of model being used, it can generate text, embeddings, code, images, videos, music, and more.

## Prompt Content Types

Prompts can include one or more of the following types of content:

### 1. Input (required)

An input is the text in the prompt that you want the model to provide a response for, and it's a required content type. Inputs can be:

#### Question Input
A question that you ask the model that the model provides an answer to.

**Example:**
```
What's a good name for a flower shop that specializes in selling bouquets of dried flowers? Create a list of 10 options with just the names.
```

#### Task Input
A task that you want the model to perform.

**Example:**
```
Give me a simple list of just the things that I must bring on a camping trip. The list should have 10 items.
```

#### Entity Input
An entity the model performs an action on, such as classify or summarize.

**Example:**
```
Classify the following items as [large, small].
Elephant
Mouse
Snail
```

#### Completion Input
Text that the model is expected to complete or continue.

**Example:**
```
Complete the following prompt: Some simple strategies for overcoming writer's block include...
```

### 2. Context (optional)

Context can be:
- Instructions that specify how the model should behave
- Information that the model uses or references to generate a response

**Example:**
```
Marbles:
Color: red
Number: 12
Color: blue
Number: 28
Color: yellow
Number: 15
Color: green
Number: 17

How many green marbles are there?
```

### 3. Examples (optional)

Examples are input-output pairs that you include in the prompt to give the model an example of an ideal response. Including examples in the prompt is an effective strategy for customizing the response format.

**Example:**
```
Classify the following.
Options:
- red wine
- white wine

Text: Chardonnay
The answer is: white wine
Text: Cabernet
The answer is: red wine
Text: Moscato
The answer is: white wine

Text: Riesling
The answer is:
```

## Best Practices for Prompt Engineering

1. **Provide clear and precise instructions**: The more specific your instructions are, the better the model can understand what you want.

2. **Provide context**: Give relevant background information to help the model better understand your request.

3. **Use examples**: Show the model what an ideal response looks like by providing examples of input-output pairs.

4. **Use structured prompts**: Organize your prompts into logical sections to improve clarity.

5. **Work iteratively**: Refine your prompts based on the responses you receive to get better results.

6. **Request specific output formats**: Specify what format you want the answer in (list, table, JSON, etc.).

7. **Break down complex tasks**: Divide complex tasks into smaller, manageable steps.

8. **Use role instructions**: Assign the model a specific role to guide its responses (e.g., "Act as a cybersecurity expert").

9. **Set boundaries**: Clearly define what the model should and should not do.

10. **Experiment and adapt**: Try different phrasings and structures to achieve optimal results.
