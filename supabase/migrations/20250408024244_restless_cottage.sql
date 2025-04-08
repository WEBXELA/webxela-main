/*
  # Contact and Newsletter Tables

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text) 
      - `email` (text)
      - `company` (text)
      - `message` (text)
      - `created_at` (timestamp)
    
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `active` (boolean)

  2. Security
    - Enable RLS on both tables
    - Add policies for inserting data
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  active boolean DEFAULT true
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anonymous contact submissions"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous newsletter subscriptions"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);