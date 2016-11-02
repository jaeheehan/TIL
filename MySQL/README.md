# MySQL upsert method

```
INSERT INTO log_stat ( name, name_count ) VALUES('RED', 1)
ON DUPLICATE KEY UPDATE name_count = name_count + 1;
```
