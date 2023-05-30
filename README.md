# Segunda pre-entrega Proyecto Final

## Endpoints api/products

### query para buscar

#### en stock

http://localhost:8080/api/products?query={"stock":{"$gt":"0"}}

#### por categorias

http://localhost:8080/api/products?query={"category":"Impermeabilizantes"}

#### definiendo el límite

http://localhost:8080/api/products?query={"category":"Impermeabilizantes"}&limit=50

#### ordenando por precio

http://localhost:8080/api/products?query={"category":"Impermeabilizantes"}&sort=asc

## Endpoints api/carts

### body para modificar quantity de un producto

http://localhost:8080/api/carts/:cid/product/:pid

```
{"qty":"5"]}
```

### body para reemplazar todo el array de productos

http://localhost:8080/api/carts/:cid/

```
{"products":[{"product":"646f88b5d0738d8d23e17994","quantity":"12"},{"product":"646f88b5d0738d8d23e17991"},{"product":"646f88b5d0738d8d23e179ac"},{"product":"646f88b5d0738d8d23e179b1"}]}
```

## Vistas productos

### Listado de productos

http://localhost:8080/products

#### Detalle de producto

http://localhost:8080/products/:pid

## Vistas carrros

### Listado de carros

http://localhost:8080/carts

#### Detalle de producto

http://localhost:8080/carts/:cid