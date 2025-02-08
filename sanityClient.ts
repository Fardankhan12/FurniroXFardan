// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: 'production',       
  apiVersion: 'v2025-01-07',     
  useCdn: false,                
  token:process.env.NEXT_PUBLIC_TOKEN_API,
});


if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Environment variable NEXT_PUBLIC_SANITY_PROJECT_ID is not set.');
}

if (!process.env.NEXT_TOKEN_API) {
  throw new Error('Environment variable NEXT_TOKEN_API is not set.');
}