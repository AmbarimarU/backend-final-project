DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

\c products;

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    url TEXT,
    type VARCHAR(20), 
    description TEXT NOT NULL,
    rating NUMERIC NOT NULL,
    CHECK (rating >= 0 AND rating <= 5),
    is_favorite BOOLEAN DEFAULT false 
);

-- DROP TABLE If EXISTS reviews;

-- CREATE TABLE reviews (
--     id SERIAL PRIMARY KEY, 
--     review TEXT,
--     title TEXT,
--     contemnt NUMERIC,
--     CHECK (rating >= 0 AND rating <= 5),
--     products INTEGER REFERENCES products (id) ON DELETE CASCADE
-- );