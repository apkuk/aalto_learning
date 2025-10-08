# Complete Guide to Building Custom GPTs with OpenAI

## Table of Contents

1. [Overview & Requirements](#overview--requirements)
2. [Creating Your GPT](#creating-your-gpt)
3. [Configuration Settings](#configuration-settings)
4. [GPT Actions (API Integrations)](#gpt-actions-api-integrations)
5. [File Uploads & Knowledge](#file-uploads--knowledge)
6. [Publishing & Sharing](#publishing--sharing)
7. [Advanced Features](#advanced-features)
8. [Best Practices](#best-practices)

---

## Overview & Requirements

### What are Custom GPTs?

Custom GPTs are tailored versions of ChatGPT that combine:

- Custom instructions
- Specific knowledge (uploaded files)
- External API capabilities (Actions)
- Specialized tools (web browsing, image generation, code interpreter)

### Requirements to Create GPTs

- **Subscription**: ChatGPT Plus, Pro, Team, Enterprise, or Edu
- **Note**: Free users can use GPTs but cannot create them
- **GPT-5 Migration**: GPTs will automatically migrate to GPT-5 equivalents

---

## Creating Your GPT

### Step 1: Access the GPT Builder

Two ways to start:

1. Navigate to `https://chatgpt.com/gpts/editor`
2. Go to `https://chatgpt.com/gpts` and click "+ Create" in the top right

### Step 2: Choose Your Building Method

#### Option A: Create Tab (Conversational)

- Message the GPT Builder naturally
- Example: "Make a French tutor that helps with GCSE preparation"
- The Builder will guide you through the process

#### Option B: Configure Tab (Direct Setup)

- Manually set all parameters
- More control over specific settings
- Better for complex configurations

### Step 3: Essential Configuration

#### Basic Settings

- **Name**: Clear, descriptive title
- **Description**: What your GPT does (appears in search)
- **Instructions**: Detailed behavior guidelines
- **Conversation Starters**: 4 example prompts to help users begin

#### Upload an Image

- Custom icon for your GPT
- Can be AI-generated or uploaded
- Appears in the GPT library

---

## Configuration Settings

### Instructions (Most Important)

This is where you define your GPT's personality and behavior:

```markdown
You are a French GCSE tutor specializing in helping students achieve Grade 9.

Core behaviors:

- Adapt explanations to student's learning style
- Use the UK GCSE curriculum framework
- Provide practice questions similar to exam format
- Give encouraging feedback
- Track common mistakes and address them

Always:

- Speak clearly and at an appropriate level
- Use examples relevant to teenage students
- Celebrate progress, no matter how small

Never:

- Give direct exam answers without explanation
- Use complex linguistic terminology unnecessarily
- Discourage students who are struggling
```

### Knowledge (File Uploads)

- **Limit**: Up to 20 files per GPT
- **File Size**: 512MB per file max
- **Text Files**: 2M tokens per file max
- **Spreadsheets**: ~50MB max
- **Images**: 20MB max

**Managing the 20-File Limit with Instructions**:
Since instruction files count toward your 20-file limit, organize strategically:

- **5-7 files**: Instruction protocols and teaching guides
- **10-12 files**: Reference materials (past papers, specifications)
- **1-3 files**: Reserved for updates and testing

Consider combining related protocols into single files with clear sections rather than many small files.

**Supported Types**:

- Documents: PDF, Word, TXT, Markdown
- Spreadsheets: CSV, Excel
- Presentations: PowerPoint
- Code files: Most programming languages

**Important**: Content from uploaded files may be included in outputs

### Capabilities (Tools)

Enable/disable these features:

- **Web Browsing**: Search and retrieve current information
- **DALL·E Image Generation**: Create images
- **Code Interpreter & Data Analysis**: Run Python code, analyze data
- **Canvas**: Collaborative editing interface

---

## GPT Actions (API Integrations)

### What are Actions?

Actions let your GPT interact with external APIs, enabling:

- Data retrieval from external sources
- Performing operations in other applications
- Real-time information access

### Setting Up an Action

#### Step 1: Create OpenAPI Schema

Use the Actions GPT (`https://chatgpt.com/g/g-TYEliDU6A-actionsgpt`) to help generate schemas.

Example schema structure:

```yaml
openapi: 3.0.0
info:
  title: Your API
  description: What your API does
  version: 1.0.0
paths:
  /endpoint:
    get:
      operationId: getData
      summary: Retrieve data
      parameters:
        - name: param
          in: query
          required: true
          schema:
            type: string
      responses:
        "200":
          description: Success
```

#### Step 2: Authentication Options

**1. No Authentication**

- For public APIs
- No setup required

**2. API Key**

- Simple token-based auth
- Key stored encrypted by OpenAI

**3. OAuth 2.0**

- For user-specific access
- Requires:
  - Client ID & Secret
  - Authorization URL
  - Token URL
  - Scope
  - Callback URL setup

#### Step 3: Configure in GPT

1. Go to Actions section in Configure tab
2. Paste OpenAPI schema
3. Set authentication method
4. Add authentication credentials
5. Test each action endpoint

### Important Action Limits

- 300 chars max per endpoint description
- 700 chars max per parameter description
- Request/response payloads < 100,000 chars
- 45-second timeout per request
- Custom headers not supported

### Consequential Actions Flag

Mark actions that have real-world effects:

```yaml
x-openai-isConsequential: true
```

This prevents "always allow" option and requires user confirmation.

---

## File Uploads & Knowledge

### How Files Work in GPTs

- Files become searchable knowledge for your GPT
- GPT can extract and reference specific information
- Supports semantic search across all uploaded content

### File Processing

**Automatic Processing**:

- Text extraction from PDFs
- Parsing of structured data (CSV, Excel)
- Image analysis (with visual retrieval on Enterprise)
- Metadata extraction

### Best Practices for Knowledge Files

1. **Organization**: Structure content clearly with headers
2. **Format**: Use markdown for better parsing
3. **Size**: Keep individual files focused and manageable
4. **Updates**: Replace files when content changes
5. **Privacy**: Don't upload sensitive or private data

### Accessing Files in Conversations

The GPT can:

- Search across all uploaded files
- Quote specific sections
- Synthesize information from multiple sources
- Perform calculations on data files

---

## Publishing & Sharing

### Visibility Options

**1. Private**

- Only you can access
- For personal use or testing

**2. Anyone with Link**

- Unlisted but shareable
- Good for limited distribution

**3. Everyone (Public)**

- Listed in GPT Store
- Requires verified Builder Profile

### Setting Up Builder Profile

#### Name Verification

- Uses your ChatGPT Plus billing name
- Toggle "Show your name" to display publicly

#### Domain Verification (Recommended)

1. Go to Settings > Builder Profile
2. Click "Verify new domain"
3. Add DNS TXT record to your domain
4. Once verified, displays as "by yourdomain.com"

#### Social Links (Optional)

Connect Twitter, GitHub, or LinkedIn for credibility

### Publishing Process

1. Complete your GPT configuration
2. Click "Publish" or "Share"
3. Select visibility level
4. Choose appropriate category
5. Add Privacy Policy URL (required for Actions)
6. Submit for review

### GPT Store Listing

- Automated policy checks
- Most GPTs appear within minutes
- May require manual review for complex cases

---

## Advanced Features

### GPT-5 Integration

GPTs now use GPT-5 models with:

- Auto-switching between chat and reasoning modes
- Better accuracy and speed
- Larger context windows (up to 196K for thinking mode)

### Analytics & Management

View from your GPT dashboard:

- Chat count (10+, 100+ indicators)
- Usage patterns
- User feedback (if enabled)

### Version History

- Track changes to your GPT
- Revert to previous versions if needed
- Useful for testing iterations

### Workspace Controls (Enterprise)

Admins can control:

- Who can create GPTs
- Allowed Action domains
- Third-party GPT access
- Sharing permissions

---

## Best Practices

### Writing Effective Instructions

1. **Be Specific**: Clear, detailed guidelines
2. **Use Examples**: Show desired behavior
3. **Set Boundaries**: Define what the GPT should NOT do
4. **Personality**: Give it a consistent voice
5. **Error Handling**: How to respond when unsure

### Optimizing for Discovery

- **Clear Name**: Descriptive and searchable
- **Good Description**: Explain value proposition
- **Category Selection**: Choose most relevant
- **Conversation Starters**: Showcase capabilities

### Testing Your GPT

Create an evaluation set:

1. 5-10 representative use cases
2. Edge cases and error conditions
3. Complex multi-step interactions
4. Different user personas

### Common Issues & Solutions

**GPT not following instructions?**

- Make instructions more explicit
- Use numbered steps for complex processes
- Add examples of correct behavior

**Actions not working?**

- Test in external tool (Postman) first
- Check authentication settings
- Verify callback URLs
- Review API response format

**Poor performance?**

- Simplify knowledge base
- Break complex instructions into steps
- Remove conflicting guidelines

### Security & Privacy

- Never include API keys in instructions
- Use OAuth for user-specific data
- Be transparent about data usage
- Follow OpenAI usage policies
- Include privacy policy for public GPTs

---

## Quick Start Checklist

### For a Simple GPT (No Actions)

- [ ] Name and description
- [ ] Core instructions
- [ ] Upload relevant knowledge files
- [ ] Add conversation starters
- [ ] Test with 5+ example queries
- [ ] Publish privately first
- [ ] Iterate based on testing

### For an Advanced GPT (With Actions)

- [ ] Complete simple GPT steps
- [ ] Design API endpoints needed
- [ ] Generate OpenAPI schema
- [ ] Test API independently
- [ ] Configure authentication
- [ ] Add to GPT and test each action
- [ ] Set consequential flags appropriately
- [ ] Verify domain (if publishing publicly)
- [ ] Add privacy policy
- [ ] Extensive testing before public release

---

## Example: French GCSE Tutor GPT

### Configuration for "Maren II" (Your Current GPT)

Based on your screenshots, here's the recommended configuration:

**Name**: Maren II ✓ (Already set)

**Description**: Maren's Interim French Tutor While Dada Builds! ✓ (Already set)

**Instructions** (Replace the placeholder with this):

```
You are Maren's personal French GCSE tutor, specialized in helping her achieve Grade 9 one year early. You understand that Maren is 14, in Year 10, and has intermediate French skills.

Your teaching approach:
1. Adapt to Maren's visual-narrative learning style
2. Focus on her weak areas: subjunctive mood and speaking confidence
3. Build on her strengths: vocabulary retention and written comprehension
4. Use age-appropriate, engaging examples that relate to teenage life
5. Provide practice aligned with UK GCSE mark schemes

For each session:
- Start by checking what Maren wants to work on today
- Provide clear explanations with relevant examples
- Offer practice exercises similar to GCSE exam format
- Give encouraging, specific feedback
- Track common mistakes and address patterns
- Celebrate progress, no matter how small

Speaking practice approach:
- Be patient with pronunciation attempts
- Provide phonetic guides when helpful
- Use familiar contexts for conversation practice
- Build confidence gradually

Always maintain a supportive, friendly tone. Remember this is personalized tutoring for Maren specifically, not generic French teaching.
```

**Conversation Starters**:

1. "Help me practice French speaking for tomorrow"
2. "Can we work on the subjunctive mood?"
3. "Give me a GCSE-style reading comprehension exercise"
4. "Test my vocabulary on [topic]"

**Knowledge Files to Upload**:

- GCSE French specification (AQA/Edexcel/OCR as relevant)
- Past exam papers (last 3-5 years)
- French grammar reference guide
- Common GCSE vocabulary lists by topic
- Verb conjugation tables
- Speaking exam rubrics and examples
- Sample essays with examiner comments

**Recommended Model**: No Recommended Model - Users will use any model they prefer ✓ (This is fine)

**Capabilities**: All enabled ✓ (Perfect for comprehensive tutoring)

**Actions**: None needed initially (can add later for progress tracking)

### Next Steps for Your Setup

1. Copy the instructions above into the Instructions field
2. Add the conversation starters
3. Upload any French GCSE materials you have
4. Test in the Preview panel with typical questions
5. Click "Create" to save as private GPT
6. Share the link with Maren to start using

---

## Summary

Building a successful GPT requires:

1. **Clear Purpose**: Define what problem it solves
2. **Good Instructions**: Detailed behavioral guidelines
3. **Relevant Knowledge**: Curated, high-quality content
4. **Thorough Testing**: Before and after publishing
5. **Iteration**: Continuous improvement based on usage

Remember: Start simple, test thoroughly, then add complexity. Your GPT will improve with user feedback and refinement over time.
