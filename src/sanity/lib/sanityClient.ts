// sanityClient.ts
import { createClient } from '@sanity/client';
import  dotenv from 'dotenv';

dotenv.config();


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: 'v2025-01-07',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token:process.env.NEXT_PUBLIC_TOKEN_API,
});