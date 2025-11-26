import React, { useState } from "react";
import "../css/Register.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inicio de sesión (simulado):", formData);
    alert("Inicio de sesión enviado (sin funcionalidad por ahora)");
  };

  return (
    <div>
      <main className="register-menu">
        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>

            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
