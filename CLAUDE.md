# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the N8N-to-SaaS project.

## Project Overview

**N8N-to-SaaS** - A platform that allows N8N workflow creators to submit their automation workflows and we convert them into profitable SaaS products. Creators keep 100% of revenue.

## Business Model

- **Service-Based Pricing**: One-time conversion fee ($2,500 - $5,000) + optional monthly management
- **Creator Keeps 100% Revenue**: No ongoing revenue sharing - creators keep all profits forever
- **Service Model**: We handle complete SaaS conversion, UI/UX, payments, hosting, deployment
- **Target**: N8N creators who want to monetize workflows without building SaaS infrastructure

### Pricing Structure
- **Basic Conversion**: $2,500 (Simple workflows, 1-5 nodes)
- **Standard Conversion**: $3,500 (Medium complexity, 5-15 nodes) + 3 months support
- **Premium Conversion**: $5,000 (Complex workflows, 15+ nodes) + 6 months support

### Optional Monthly Add-Ons
- **Customer Support**: $49/month
- **Bug Fixes & Updates**: $99/month  
- **Marketing & SEO**: $199/month

## Commands

### Development
- `npm run dev` - Start development server with Turbopack on http://localhost:3001
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

### Installing Dependencies
- `npm install` - Install all dependencies
- `npm install <package>` - Add new dependency

## Architecture

This is a Next.js 15.5.2 application using:
- **App Router** (app/ directory structure)
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **Turbopack** for faster builds and development
- **Clerk** for authentication (workflow creators)
- **Stripe** for payments (when we build the customer-facing SaaS products)
- **File Upload** system for N8N workflow submissions

## Core Features

### 1. Workflow Submission System
- Landing page explaining the service
- Registration form for creators (name, phone, email)
- Workflow details form (name, description, use cases, target audience)
- File upload for N8N workflow (.json files)
- Estimated credit cost selection

### 2. Review & Approval Process (Future)
- Admin dashboard to review submitted workflows
- Workflow evaluation and pricing
- Communication with creators for revisions

### 3. SaaS Generation (Future)
- Convert approved workflows into customer-facing SaaS products
- Credit-based billing system for end users
- Revenue tracking and distribution to creators

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page - explains service & revenue sharing
│   ├── submit/            # Workflow submission flow
│   │   └── page.tsx       # Submission form (personal info + workflow upload)
│   ├── api/               # API routes
│   │   ├── submit/        # Handle workflow submissions
│   │   └── webhooks/      # Future: payment webhooks
│   └── admin/             # Future: admin dashboard for reviewing submissions
├── components/            # React components
├── lib/                   # Utilities
│   ├── clerk.ts          # Authentication configuration
│   └── db.ts             # Database utilities (future)
└── types/                # TypeScript definitions
```

## Environment Variables

Required in `.env.local`:
```env
# Clerk Authentication (for creators)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# File Upload Storage (future)
# AWS_ACCESS_KEY_ID=your_aws_key
# AWS_SECRET_ACCESS_KEY=your_aws_secret
# AWS_S3_BUCKET=your_bucket_name

# Database (future)
# DATABASE_URL=your_database_url_here
```

## Workflow Submission Flow

1. **Landing Page** (`/`)
   - Explains service: "Submit N8N workflows → We build SaaS → 70/30 revenue split"
   - Call-to-action to submit workflow

2. **Submission Form** (`/submit`)
   - Personal information (name, phone, email)
   - Workflow details (name, description, use cases, target audience)
   - Estimated credit cost per execution
   - N8N workflow file upload (.json)

3. **Review Process** (Future - `/admin`)
   - Admin reviews submission
   - Evaluates workflow complexity and market potential
   - Sets final pricing and credit costs
   - Approves or requests modifications

4. **SaaS Creation** (Future)
   - Convert workflow to customer-facing product
   - Build UI for end users
   - Set up credit-based billing
   - Deploy to production

## Database Schema (Future)

```sql
-- Workflow creators
creators (
  id,
  name,
  email, 
  phone,
  created_at
)

-- Submitted workflows
workflow_submissions (
  id,
  creator_id,
  workflow_name,
  description,
  use_case,
  target_audience,
  estimated_credits,
  file_path,
  status, -- 'pending', 'approved', 'rejected', 'live'
  admin_notes,
  created_at
)

-- Live SaaS products (approved workflows)
saas_products (
  id,
  workflow_submission_id,
  product_name,
  credit_cost,
  n8n_webhook_url,
  product_url,
  status, -- 'active', 'paused'
  total_revenue,
  creator_earnings,
  created_at
)

-- End user customers (future)
customers (
  id,
  email,
  credits_balance,
  created_at
)

-- Usage tracking (future) 
usage_logs (
  id,
  customer_id,
  saas_product_id,
  credits_used,
  execution_status,
  created_at
)
```

## Implementation Notes

### Current Phase: Workflow Collection
- Focus on getting high-quality N8N workflow submissions
- Simple form-based submission process
- Manual review and approval process
- No payments yet (pure submission platform)

### Next Phase: SaaS Generation
- Build system to convert workflows to customer products
- Implement credit-based billing for end users
- Set up revenue sharing with creators
- Launch first converted SaaS products

### Future Phases: Platform Scaling
- Self-service workflow submission
- Automated approval process
- Creator dashboard with earnings
- Marketplace for browsing available workflows

## Target Creators

- N8N power users with valuable automation workflows
- Creators looking to monetize their automation skills
- Small businesses/freelancers wanting passive income
- DevOps/automation consultants with proven workflows

## Workflow Categories We're Targeting

- **Content Generation**: Social media, blog posts, images
- **Data Processing**: Web scraping, data transformation, reporting  
- **Communication**: Email automation, Slack bots, notifications
- **E-commerce**: Inventory management, order processing
- **Marketing**: Lead generation, campaign automation
- **Business Operations**: CRM updates, invoice processing