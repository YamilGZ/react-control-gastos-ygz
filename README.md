# Control de Gastos con React + TypeScript

Aplicación React para planificar y controlar gastos personales. El usuario define un presupuesto, registra gastos por categoría y visualiza el consumo en tiempo real, todo gestionado con Context API + useReducer para mantener un estado consistente y persistente en `localStorage`.

## Características destacadas

- Definición del presupuesto inicial con validaciones.
- Registro, edición y eliminación de gastos con categorías predefinidas.
- Filtro dinámico por categoría y listado detallado de movimientos.
- Seguimiento visual de presupuesto vs. gastos (barra circular de progreso).
- Persistencia automática en `localStorage` y UI responsiva con Tailwind.

## Tecnologías y librerías

- React 19 + TypeScript + Vite 7.
- Context API y useReducer para la gestión global del estado.
- Tailwind CSS y Headless UI para estilos/modales.
- `react-circular-progressbar`, `react-date-picker`, `react-swipeable-list` para la experiencia de usuario.
- ESLint + TypeScript ESLint para control de calidad.

## Requisitos previos

- Node.js 18 o superior.
- npm (incluido con Node).
- Git para clonar el repositorio.

## Cómo clonar e iniciar el proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/<tu-usuario>/react-control-gastos-contextapi.git

# 2. Entrar al directorio
cd react-control-gastos-contextapi

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev
```

La aplicación quedará disponible en `http://localhost:5173`. Para detenerla, usa `Ctrl+C`.

## Scripts disponibles

- `npm run dev`: arranca el servidor de desarrollo con HMR.
- `npm run build`: compila el proyecto a producción (`dist/`).
- `npm run preview`: sirve la build para validaciones finales.
- `npm run lint`: ejecuta ESLint sobre todo el código fuente.

## Estructura básica

```
src/
├─ components/    # Formularios, listas, tracker y modal de gastos
├─ context/       # Proveedor y hook del presupuesto
├─ reducers/      # Reducer principal y estado inicial
├─ hooks/         # Hook personalizado useBudget
├─ data/          # Catálogo de categorías
└─ types/         # Tipos y contratos compartidos
```
