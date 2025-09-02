@demo @inventory
Feature: Hooks & Tags sobre la página de inventario de SauceDemo
  Como QA quiero ver hooks globales, condicionales y de step
  ejecutando subconjuntos de escenarios sobre /inventory.html.

  Background:
    Given estoy logueado en SauceDemo
    And estoy en la página de inventario

  @smoke @fast
  Scenario: Render mínimo del inventario
    Then veo el título "Products"
    And hay al menos 1 producto en la lista

  @ui @sorting
  Scenario: Cambiar el orden del inventario por precio (low to high)
    When cambio el orden del inventario a "Price (low to high)"
    Then el primer producto es el más barato

  @cart @regression
  Scenario: Agregar y quitar del carrito
    When agrego el primer producto al carrito
    Then el icono del carrito muestra "1"
    When elimino ese producto del carrito
    Then el icono del carrito muestra vacío

  @ignore @manual
  Scenario: Caso manual referencial
    Then este escenario no debería ejecutarse en la demo
