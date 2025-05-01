# DevStudio Website

A modern portfolio website for showcasing web development projects and services.

## Features

- Responsive design for all device sizes
- Services showcase section
- Portfolio section with filterable projects
- Contact form with email functionality
- Modern UI with animations and transitions

## Contact Form Setup

The contact form is configured to send emails using EmailJS. Follow these steps to set up email functionality:

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your account via the confirmation email

### 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose an email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Name your service and save it
6. Copy the "Service ID" for later use

### 3. Create an Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person submitting the form
   - `{{from_email}}` - The email of the person submitting the form
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The message content
   - `{{to_email}}` - The recipient email (thekomastore@gmail.com)
4. Save the template and copy the "Template ID"

### 4. Update the Contact Form Code

1. Open `src/components/ContactSection.tsx`
2. Replace the placeholder values with your actual credentials:
   ```javascript
   const serviceId = 'your_service_id'; // Replace with your Service ID
   const templateId = 'your_template_id'; // Replace with your Template ID
   const publicKey = 'your_public_key'; // Replace with your Public Key from Account > API Keys
   ```

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- EmailJS 