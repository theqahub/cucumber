Feature: Login de usuario

  Background:
    Given que el usuario navega a la página de login

  Scenario: Login exitoso con credenciales válidas
    When ingresa el nombre de usuario "standard_user" y la contraseña "secret_sauce"
    And hace clic en el botón de login
    Then debería ser redirigido al inventario

  Scenario: Login fallido con contraseña incorrecta
    When ingresa el nombre de usuario "standard_user" y la contraseña "incorrecta"
    And hace clic en el botón de login
    Then debería ver un mensaje de error de credenciales incorrectas

  Scenario: Login fallido con nombre de usuario incorrecto
    When ingresa el nombre de usuario "usuario_falso" y la contraseña "secret_sauce"
    And hace clic en el botón de login
    Then debería ver un mensaje de error de credenciales incorrectas

  Scenario: Login fallido con nombre de usuario incorrecto y contraseña incorrecta
    When ingresa el nombre de usuario "usuario_falso" y la contraseña "incorrecta"
    And hace clic en el botón de login
    Then debería ver un mensaje de error de credenciales incorrectas

  Scenario: Login incompleto con campos vacíos
    When ingresa el nombre de usuario "" y la contraseña ""
    And hace clic en el botón de login
    Then debería ver un mensaje de error indicando que el username es necesario

  Scenario: Login incompleto con campos usuario relleno y contraseña vacía
    When ingresa el nombre de usuario "theqahub" y la contraseña ""
    And hace clic en el botón de login
    Then debería ver un mensaje de error indicando que la password es necesaria

  Scenario: Login con usuario bloqueado
    When ingresa el nombre de usuario "locked_out_user" y la contraseña "secret_sauce"
    And hace clic en el botón de login
    Then debería ver un mensaje de error indicando que el usuario está bloqueado
