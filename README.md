# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


basic solution for validation
--------------------------------
 const isFormValid = () => {
    if (field.name === "") {
      setErrorField((prev) => ({
        ...prev,
        name: true,
      }));
      return false;
    } else {
      setErrorField((prev) => ({
        ...prev,
        name: false,
      }));
      return true;
    }
  };