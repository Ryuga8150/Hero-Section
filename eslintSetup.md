1. Install dependency
   npm install --save-dev vite-plugin-eslint eslint-config-react-app

2. Configuring eslintrc.cjs
   extends:"react-app"

3. Configuring vite.config
   import eslint from "vite-plugin-eslint"
   in plugins call eslint()
