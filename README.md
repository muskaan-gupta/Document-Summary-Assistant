# Document Summary Assistant

Document Summary Assistant is an AI-powered web application built with Next.js that transforms your documents and images into actionable insights. Upload PDFs, images, Word documents, text files, and more to get smart summaries, key points, and improvement suggestions in seconds.

## Features

- Upload PDFs, images (JPEG, PNG, GIF, BMP, SVG), Word documents, text files, markdown, and other supported formats.
- AI-powered summarization using Google Gemini AI with OCR capabilities.
- Choose summary length: short (2-3 sentences), medium (1-2 paragraphs), or long (3-4 paragraphs).
- Inline document preview for PDFs, images, and text files.
- Privacy-first approach: no document or history storage.
- Fast and user-friendly interface with drag-and-drop upload.

## Supported File Types

- PDF (.pdf)
- Word (.doc, .docx)
- Text (.txt, .md, .csv, .rtf)
- Images (.jpeg, .jpg, .png, .gif, .bmp, .webp, .svg)
- JSON, XML, and other common document formats

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd document-summary-assistant
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add your Google Gemini API key:

```
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use the app.

## Usage

- Upload your document or image using the drag-and-drop area or file browser.
- Choose the desired summary length (short, medium, or long).
- View the AI-generated summary alongside an inline preview of your document.
- Download the original file if needed.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation.
- [Google Generative AI](https://cloud.google.com/generative-ai) - AI model for document summarization.
- [Tesseract.js](https://github.com/naptha/tesseract.js) - OCR for text extraction from images.
- [pdfjs-dist](https://github.com/mozilla/pdf.js) - PDF rendering and parsing.
- React and modern JavaScript/TypeScript.

