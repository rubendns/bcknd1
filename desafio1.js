class Product {
constructor(id, title, description, price, thumbnail, code, stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
}
}

class ProductManager {
constructor() {
    this.products = [];
    this.counter = 1;
}

addProduct(title, description, price, thumbnail, code, stock) {
    const codeExists = this.products.some((product) => product.code === code);
    if (!codeExists) {
    const id = this.counter++;
    const newProduct = new Product(id, title, description, price, thumbnail, code, stock);
    this.products.push(newProduct);
    console.log('Producto agregado correctamente:', newProduct);
    } else {
    throw new Error('El código de producto ya existe');
    }
}

getProducts() {
    return this.products;
}

getProductById(productId) {
    if (!productId || typeof productId !== 'number') {
    throw new Error('Se requiere un ID de producto válido');
    }

    const product = this.products.find((p) => p.id === productId);

    if (!product) {
    throw new Error('Producto no encontrado');
    }

    return product;
}
}

// Ejemplo de uso
const productManager = new ProductManager();

try {
productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
productManager.addProduct('Producto 2', 'una descripción', 122, '/img/product2.jpg', 'abc321', 50);

console.log('Todos los productos:', productManager.getProducts());
console.log('Producto con ID 1:', productManager.getProductById(1));
console.log('Producto con ID 3:', productManager.getProductById(3)); // Esto debería mostrar un error "Producto no encontrado"
} catch (error) {
console.error(error.message);
}
