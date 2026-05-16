# AI MCQ Generator API

An AI-powered REST API that automatically generates Multiple Choice Questions (MCQs) from uploaded Markdown study notes using Large Language Models (LLMs).

The system extracts content from uploaded `.md` files, sends the content to a Groq-powered LLM using LangChain, validates the generated response using Zod, and returns structured MCQs in JSON format.

# Features

* Upload Markdown (`.md`) files
* AI-powered MCQ generation
* LangChain integration
* Groq LLM integration
* Structured JSON responses
* Zod schema validation
* Multer file upload handling
* Error handling middleware
* Unit testing with Jest and Supertest
* Modular backend architecture

# Tech Stack

## Backend

* Node.js
* Express.js

## AI Integration

* LangChain
* Groq API
* Llama 3.1 Model

## Validation

* Zod

## File Upload

* Multer

## Testing

* Jest
* Supertest


# Project Structure

```txt
src/
│
├── config/
│   └── aiConfig.js
│
├── controllers/
│   └── mcqController.js
│
├── middleware/
│   └── uploadMiddleware.js
│
├── routes/
│   └── mcqRoutes.js
│
├── schemas/
│   └── mcqSchema.js
│
├── services/
│   └── aiService.js
│
├── tests/
│   ├── aiService.test.js
│   ├── fileReader.test.js
│   └── mcq.test.js
│
├── utils/
│   └── fileReader.js
│
├── app.js
└── server.js

uploads/

sample.md

README.md
package.json
package-lock.json
.env.example
jest.setup.js
```

# API Endpoint

## Generate MCQs

### Endpoint

```http
POST /api/generate-mcq
```

### Request Type

```txt
multipart/form-data
```

### Form Field

| Key  | Type                |
| ---- | ------------------- |
| file | Markdown File (.md) |


# Example Request

Upload a markdown file using Postman.

Example:

```txt
sample.md
```


# Example Response

```json
{
  "total_questions": 5,
  "questions": [
    {
      "question": "What is REST API?",
      "options": {
        "a": "Database language",
        "b": "Architectural style",
        "c": "Frontend framework",
        "d": "CSS library"
      },
      "correct": "b",
      "explanation": "REST API is an architectural style used for communication between systems."
    }
  ]
}
```

# Installation

## Clone Repository

```bash
git clone <repository-url>
```


## Install Dependencies

```bash
npm install
```

# Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
GROQ_API_KEY=your_api_key
```

# Run Development Server

```bash
npm run dev
```

---

# Run Tests

```bash
npm test
```

# AI Processing Flow

```txt
Markdown Upload
        ↓
Multer File Validation
        ↓
Markdown Content Extraction
        ↓
LangChain Prompt Processing
        ↓
Groq LLM Generation
        ↓
JSON Parsing
        ↓
Zod Schema Validation
        ↓
Structured MCQ Response
```


# Error Handling

The API properly handles:

* Invalid file uploads
* Missing markdown files
* Invalid file types
* AI response parsing errors
* Invalid AI response structure
* File reading errors


# Test Coverage

The project includes unit tests for:

* API endpoint testing
* AI service testing
* Markdown file reader utility

Testing tools:

* Jest
* Supertest

# Future Improvements

* Difficulty level selection
* PDF export support
* Large document chunking
* Authentication and rate limiting
* Duplicate MCQ detection
* Frontend UI integration


# Author

Harshini T N
