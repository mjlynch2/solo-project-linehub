CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (120) UNIQUE NOT NULL,
    "employee_id" INT UNIQUE NOT NULL
);

    CREATE TABLE "ingredient"
    (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(120),
        "supplier_name" VARCHAR(50),
        "is_ordered" BOOLEAN DEFAULT FALSE
    );

    CREATE TABLE "menu"
    (
        "id" SERIAL PRIMARY KEY,
        "dish_name" VARCHAR(250) NOT NULL,
        "ingredient_id" INT REFERENCES "ingredient",
        "station_id" INT REFERENCES "station"
    );

    CREATE TABLE "station"
    (
        "id" SERIAL PRIMARY KEY,
        "station_name" VARCHAR(50) NOT NULL
    );

    CREATE TABLE "order"
    (
        "id" SERIAL PRIMARY KEY,
        "ingredient_id" INT REFERENCES "ingredient",
        "user_id" INT REFERENCES "user",
        "quantity" VARCHAR (50),
        "date" DATE,
        "note" VARCHAR (200)
    );