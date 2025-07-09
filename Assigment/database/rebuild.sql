-- ====================================================
-- Assignment 2 - Task 2: Database Rebuild Script
-- File: task2_create_database.sql
-- ====================================================

DROP TABLE IF EXISTS public.account CASCADE;
DROP TABLE IF EXISTS public.users CASCADE;
DROP TABLE IF EXISTS public.inventory CASCADE;
DROP TABLE IF EXISTS public.classification CASCADE;

DROP TYPE IF EXISTS public.account_type;

CREATE TYPE public.account_type AS ENUM ('Client', 'Employee', 'Admin');

CREATE TABLE public.account (
  account_id SERIAL PRIMARY KEY,
  account_firstname VARCHAR(50) NOT NULL,
  account_lastname VARCHAR(50) NOT NULL,
  account_email VARCHAR(100) UNIQUE NOT NULL,
  account_password TEXT NOT NULL,
  account_type public.account_type DEFAULT 'Client'
);

CREATE TABLE public.users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  account_type public.account_type NOT NULL
);

CREATE TABLE public.classification (
  classification_id SERIAL PRIMARY KEY,
  classification_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE public.inventory (
  inv_id SERIAL PRIMARY KEY,
  inv_make VARCHAR(50) NOT NULL,
  inv_model VARCHAR(50) NOT NULL,
  inv_description TEXT,
  inv_image TEXT,
  inv_thumbnail TEXT,
  classification_id INT REFERENCES public.classification(classification_id)
);

INSERT INTO public.classification (classification_name) VALUES
  ('Sport'),
  ('Truck'),
  ('SUV')
ON CONFLICT DO NOTHING;

INSERT INTO public.inventory (
  inv_make, inv_model, inv_description, inv_image, inv_thumbnail, classification_id
) VALUES
  ('GM', 'Hummer', 'Rugged SUV with small interiors', '/images/hummer.jpg', '/images/hummer-thumb.jpg', 3),
  ('Ford', 'Mustang', 'High-performance sports car', '/images/mustang.jpg', '/images/mustang-thumb.jpg', 1),
  ('Chevy', 'Camaro', 'Fast coupe in the sport category', '/images/camaro.jpg', '/images/camaro-thumb.jpg', 1);


UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

UPDATE public.inventory
SET 
  inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
  inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
