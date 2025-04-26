# Plan de Iteraciones - ReactCommerce (24 Abril - 24 Mayo)

**Metodología:** Agile con flujo Kanban. 1 Historia de Usuario / Objetivo Principal por iteración semanal.

**Épica:** Frontend "ReactCommerce" - Crear una interfaz de usuario moderna, funcional y responsiva para una tienda online ficticia, utilizando React, Bootstrap y JavaScript moderno, enfocándose en las mejores prácticas y la gestión de estado.

---

## Iteración 1: Setup & Esqueleto Básico (Mié 24 Abr - Vie 26 Abr)

*   **Objetivo Principal / HU:** Configuración Inicial, Estructura, Routing y Navegación Básica (Base de HU-01).
*   **Foco Técnico / Tareas:**
    *   [X] **(Tarea 1)** Configuración Inicial del Proyecto (Vite, limpieza).
    *   [X] **(Tarea 2)** Instalar y Configurar Dependencias Clave (Router, Bootstrap).
    *   [X] **(Tarea 3)** Estructura Básica de Carpetas (`components`, `pages`, `router`, etc.).
    *   [X] **(Tarea 4)** Configurar Routing Básico (`/`, `/products`, `/cart` con placeholders).
    *   [X] **(Tarea 5)** Crear Navbar Básica (Componente `Navbar` con `Link`s y Bootstrap).

---

## Iteración 2: Visualización de Productos (Lun 29 Abr - Vie 3 May)

*   **Objetivo Principal / HU:** **(HU-02)** Visualización de Productos.
*   **Foco Técnico / Tareas:**
    *   [ ] **(Tarea 6)** Configurar Fuente de Datos (FakeStoreAPI/Mock).
    *   [ ] **(Tarea 7)** Crear Servicio de Productos (`getAllProducts()` en `src/services/`).
    *   [ ] **(Tarea 8)** Obtener y Mostrar Datos Crudos en `ProductsPage` (`useState`/`useEffect`).
    *   [ ] **(Tarea 9)** Crear Componente `ProductCard` (Diseño reutilizable con Bootstrap).
    *   [ ] **(Tarea 10)** Renderizar `ProductCard`s en `ProductsPage` (Mapeo y grid).
    *   [ ] **(Tarea 11)** Añadir Manejo Básico de Carga/Error en `ProductsPage`.

---

## Iteración 3: Página de Detalles del Producto (Lun 6 May - Vie 10 May)

*   **Objetivo Principal / HU:** **(HU-03)** Detalles del Producto.
*   **Foco Técnico / Tareas:**
    *   [ ] Definir ruta dinámica (`/products/:id`).
    *   [ ] Crear función `getProductById()` en el servicio.
    *   [ ] Crear `ProductDetailPage.jsx`.
    *   [ ] Obtener parámetro `id` de la URL (`useParams`).
    *   [ ] Llamar al servicio con `useEffect` para obtener datos del producto.
    *   [ ] Mostrar detalles completos del producto (imagen, descripción, precio).
    *   [ ] Añadir botón "Añadir al Carrito" (sin funcionalidad aún).
    *   [ ] Manejo de carga/error para producto individual.

---

## Iteración 4: Introducción al Carrito & Añadir Ítem (Lun 13 May - Vie 17 May)

*   **Objetivo Principal / HU:** **(HU-04)** Añadir al Carrito & Configuración del Estado Global.
*   **Foco Técnico / Tareas:**
    *   [ ] Configurar React Context API para el carrito (`CartContext.jsx`, `CartProvider`).
    *   [ ] Definir estado del carrito (array de ítems) y funciones (añadir, eliminar, etc.) en el Provider.
    *   [ ] Envolver la aplicación con `CartProvider`.
    *   [ ] Crear hook `useCart()` para acceder al contexto.
    *   [ ] Implementar la lógica "Añadir al Carrito" en los botones correspondientes (`ProductDetailPage`, `ProductCard`).
    *   [ ] (Opcional) Mostrar contador de ítems en la Navbar.

---

## Iteración 5: Visualización y Gestión Básica del Carrito (Lun 20 May - Vie 24 May)

*   **Objetivo Principal / HU:** **(HU-05)** Visualización y Gestión Básica del Carrito.
*   **Foco Técnico / Tareas:**
    *   [ ] Crear `CartPage.jsx`.
    *   [ ] Leer los ítems del carrito desde el Context (`useCart`).
    *   [ ] Crear componente `CartItem.jsx`.
    *   [ ] Mostrar la lista de `CartItem`s en `CartPage`.
    *   [ ] Calcular y mostrar subtotal/total.
    *   [ ] Implementar botón/lógica "Eliminar del Carrito" para cada `CartItem`.
    *   [ ] Manejar el caso de carrito vacío.

---

**Funcionalidades Probablemente Fuera de Alcance (Post 24 Mayo):**

*   Modificación avanzada del carrito (cambiar cantidad) (HU-05 Parte 2).
*   Navegación por Categorías (HU-07).
*   Búsqueda de Productos (HU-06).
*   Simulación de Checkout (HU-08).
*   Pulido avanzado de estilos y manejo de errores/carga.