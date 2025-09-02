@inventario
Feature: Validación del inventario tras login y vía API

  Background:
    Given que el usuario busque la página de login
    When introduce el nombre de usuario "standard_user" y la contraseña "secret_sauce"
    And clicka en el botón de login
    Then debería ser redirigido hacia el inventario

  @web 
  Scenario: Validar productos visibles en el inventario
    Then debería ver los siguientes productos:
      | Nombre                                | Precio |
      | Sauce Labs Backpack                   | $29.99 |
      | Sauce Labs Bike Light                 | $9.99  |
      | Sauce Labs Bolt T-Shirt               | $15.99 |
      | Sauce Labs Fleece Jacket              | $49.99 |
      | Sauce Labs Onesie                     | $7.99  |
      | Test.allTheThings() T-Shirt (Red)     | $15.99 |

  @web
  Scenario: Validar cantidad total de productos en inventario
    Then deberían mostrarse 6 productos en total

  @web 
  Scenario: Validar que todos los precios son mayores a cero
    Then cada producto debería tener un precio mayor a 0

  @web
  Scenario: Validar que el botón 'Add to cart' está visible en cada producto
    Then cada producto debería tener un botón para añadir al carrito

  @api
  Scenario: Validar productos disponibles desde la API
    When hago una petición GET a "/inventory"
    Then la respuesta debería contener los siguientes productos:
      | nombre                            | precio |
      | Sauce Labs Backpack               | 29.99  |
      | Sauce Labs Bike Light             | 9.99   |
      | Sauce Labs Bolt T-Shirt           | 15.99  |
      | Sauce Labs Fleece Jacket          | 49.99  |
      | Sauce Labs Onesie                 | 7.99   |
      | Test.allTheThings() T-Shirt (Red) | 15.99  | 

  @api
  Scenario: Validar que la API devuelve status 200
    When hago una petición GET a "/inventory"
    Then la respuesta HTTP debería tener el status 200

  @api
  Scenario: Validar cantidad de productos en respuesta de API
    When hago una petición GET a "/inventory"
    Then la respuesta debería contener 6 productos

  @api
  Scenario: Validar que todos los productos tienen campos obligatorios
    When hago una petición GET a "/inventory"
    Then cada producto en la respuesta debería tener 'id', 'name' y 'price'

  @api
  Scenario: Validar que todos los precios de productos API son mayores a cero
    When hago una petición GET a "/inventory"
    Then todos los precios en la respuesta deberían ser mayores a 0
