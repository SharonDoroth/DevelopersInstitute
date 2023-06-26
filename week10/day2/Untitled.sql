SELECT * FROM items 
ORDER BY price 

SELECT * FROM items
WHERE price > 79
ORDER BY price DESC

SELECT name_costumer,last_name_costumer FROM customers
ORDER BY name_costumer 
LIMIT 3

SELECT last_name_costumer FROM customers
ORDER BY last_name_costumer DESC