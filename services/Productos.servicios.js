/**los servicios se encargan de toda la loga del negocio, mientras que la carpeta de rutas debe
 * ser solamente para enrutamiento, ya que siempre es mejor separar cada trabajo en vez de juntarlo todo
 */
const faker = require('faker');//traemos esto para poder importar data fake
/**eeste solo se usa para simular datos */
class ProductsServices {
  constructor() {
    this.products = []
    this.generar()
  }
  async generar() {
    const limit = 100;
    /**con cada iteracion se genera un producto con nombre
     * precioe imagen, en este caso si se agrega un size como parametro
     * se realizaran ese numero de data fake
     */
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price(), 10),//el 10 indica la base
        imagen: faker.image.imageUrl(),
      })
    }

  }
  async crear(data) {

    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }
  async borrar(id) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('producto no encontrado');
    }
    this.products.splice(index,1)
    return {message : true}
  }
  async actualizar(id, cambios) {
    const index = this.products.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('producto no encontrado');
    }
    const prod =this.products[index]
    this.products[index] ={
      ...prod,
      ...cambios
    }
    return this.products[index]
  }
  async buscar() {
    return this.products
  }
  async buscarUno(id) {
    return this.products.find(item => item.id === id)
  }

}
module.exports = ProductsServices;
