# MongoDB Shell Commands & Query Functionalities

## MongoDB Shell Basics

| Command | Functionality |
|---|---|
| `mongosh` | Starts the MongoDB shell |
| `show dbs` | Displays all databases |
| `use shopdb` | Switches to or creates a database |
| `show collections` | Displays collections in current database |
| `db` | Shows current database name |
| `clear()` | Clears shell screen |
| `.exit` | Exits MongoDB shell |

---

# Collection Insert Commands

| Command | Functionality |
|---|---|
| `db.products.insertOne({...})` | Inserts one document into collection |
| `db.products.insertMany([...])` | Inserts multiple documents |

---

# Data Retrieval Commands

| Command | Functionality |
|---|---|
| `db.products.find()` | Returns all documents |
| `db.products.findOne()` | Returns first matching document |
| `db.products.find({...})` | Returns documents matching condition |
| `db.products.find({}, {...})` | Returns documents with selected fields (projection) |

---

# Query Operators

| Operator | Functionality |
|---|---|
| `$eq` | Equal to |
| `$ne` | Not equal to |
| `$lte` | Less than or equal to |
| `$gte` | Greater than or equal to |
| `$lt` | Less than |
| `$gt` | Greater than |

---

# MongoDB Queries & Functionalities

## 1. Insert Multiple Documents

```javascript
db.products.insertMany([
  {
    name: "Laptop",
    category: "Electronics",
    price: 75000,
    stock: 10,
    rating: 4.5,
    tags: ["portable", "work"]
  },
  {
    name: "Phone",
    category: "Electronics",
    price: 30000,
    stock: 25,
    rating: 4.2,
    tags: ["portable", "camera"]
  }
])
```

### Functionality
Inserts multiple documents into the `products` collection.

---

## 2. Insert One Document

```javascript
db.products.insertOne({
  name: "Monitor",
  category: "Electronics",
  price: 20000,
  stock: 15,
  rating: 4.6,
  tags: ["work", "display"]
})
```

### Functionality
Inserts one document into the collection.

---

## 3. Find All Documents

```javascript
db.products.find()
```

### Functionality
Returns all documents from the collection.

---

## 4. Exact Match Query

```javascript
db.products.find({
  category: "Furniture"
})
```

### Functionality
Returns documents where category is `"Furniture"`.

---

## 5. Multiple Conditions (AND Query)

```javascript
db.products.find({
  category: "Electronics",
  tags: "portable"
})
```

### Functionality
Returns documents where:

- category is `"Electronics"`
- tags contains `"portable"`

MongoDB automatically applies logical AND.

---

## 6. Range Query

```javascript
db.products.find({
  price: { $lte: 20000 },
  stock: { $gte: 20 }
})
```

### Functionality
Returns documents where:

- price ≤ 20000
- stock ≥ 20

---

## 7. Find One Matching Document

```javascript
db.products.findOne({
  price: { $lte: 20000 },
  stock: { $gte: 20 }
})
```

### Functionality
Returns only the first matching document.

---

## 8. Equality + Not Equal Query

```javascript
db.products.find({
  stock: { $eq: 10 },
  category: { $ne: "Electronics" }
})
```

### Functionality
Returns documents where:

- stock equals 10
- category is NOT `"Electronics"`

---

## 9. Projection (Select Specific Fields)

```javascript
db.products.find({}, {
  _id: 0,
  name: 1
})
```

### Functionality
Returns only the `name` field and hides `_id`.

---

# Incorrect Queries & Errors

## Incorrect Command

```javascript
shows databases
```

### Error
Wrong syntax.

### Correct Command

```javascript
show dbs
```

---

## Incorrect Clear Command

```javascript
clear
```

### Error
`clear` is not defined.

### Correct Command

```javascript
clear()
```

---

## Incorrect AND Condition

```javascript
db.products.find({
  category: "Electronics" && tags: "portable"
})
```

### Error
Invalid JavaScript syntax inside object.

### Correct Query

```javascript
db.products.find({
  category: "Electronics",
  tags: "portable"
})
```

---

## Incorrect Query Using `&&`

```javascript
db.products.find(
  { category: "Electronics" } &&
  { tags: "portable" }
)
```

### Problem
JavaScript evaluates only the second object.

### Correct Query

```javascript
db.products.find({
  category: "Electronics",
  tags: "portable"
})
```

---

## Missing Closing Brace Error

```javascript
db.products.find({
  price: { $lte: 20000 },
  stock: { $gte: 20 }
)
```

### Error
Missing closing `}`.

### Correct Query

```javascript
db.products.find({
  price: { $lte: 20000 },
  stock: { $gte: 20 }
})
```

---

## Incorrect Projection Query

```javascript
db.products.find({
  _id: 0,
  name: 1
})
```

### Problem
MongoDB treats this as a filter query.

### Correct Query

```javascript
db.products.find({}, {
  _id: 0,
  name: 1
})
```

---

# Important MongoDB Concepts

| Concept | Meaning |
|---|---|
| Document | One JSON-like record |
| Collection | Group of documents |
| Database | Group of collections |
| Projection | Selecting specific fields |
| Query Filter | Conditions used to search documents |
| Operator | Special keyword like `$gte`, `$lte`, `$eq` |