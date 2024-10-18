import { useState } from 'react';
import '../styles.css';

export const Forms = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    curp: '',
    firstName: '',
    lastNamePaterno: '',
    lastNameMaterno: '',
    phone: '',
    mobile: '',
    email: '',
    nivel: '',
    municipio: '',
    asunto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          curp: formData.curp,
          firstName: formData.firstName,
          lastName: `${formData.lastNamePaterno} ${formData.lastNameMaterno}`,
          phone: formData.phone,
          email: formData.email
        }),
      });
  
      
      if (!response.ok) throw new Error('Error al crear el usuario');
      alert('Usuario creado correctamente');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form name="form" onSubmit={handleSubmit}>
      <fieldset className='pr2'>
        <label htmlFor="fullName">Nombre completo de quien realizará el trámite:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <label htmlFor="curp">CURP:</label>
        <input
          type="text"
          id="curp"
          name="curp"
          value={formData.curp}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset className='pr2'>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastNamePaterno">Paterno:</label>
        <input
          type="text"
          id="lastNamePaterno"
          name="lastNamePaterno"
          value={formData.lastNamePaterno}
          onChange={handleChange}
        />

        <label htmlFor="lastNameMaterno">Materno:</label>
        <input
          type="text"
          id="lastNameMaterno"
          name="lastNameMaterno"
          value={formData.lastNameMaterno}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset className="tcc">
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="mobile">Celular:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <label htmlFor="email">Correo:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset className='contry'>
        <div className="seleccion">
          <label htmlFor="nivel">¿Nivel al que desea ingresar o que ya cursa el alumno?</label>
          <select id="nivel" name="nivel" value={formData.nivel} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="Primaria">Primaria</option>
            <option value="Secundaria">Secundaria</option>
            <option value="Preparatoria">Preparatoria</option>
          </select>
        </div>

        <div className="seleccion">
          <label htmlFor="municipio">Municipio donde desea estudie el alumno:</label>
          <select id="municipio" name="municipio" value={formData.municipio} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="Municipio 1">Municipio 1</option>
            <option value="Municipio 2">Municipio 2</option>
          </select>
        </div>

        <div className="seleccion">
          <label htmlFor="asunto">Seleccione el asunto que va a tratar:</label>
          <select id="asunto" name="asunto" value={formData.asunto} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="Asunto 1">Asunto 1</option>
            <option value="Asunto 2">Asunto 2</option>
          </select>
        </div>
      </fieldset>

      <div className='form-group'>
        <button type="submit" className="submit-button">
          Generar Turno
        </button>
      </div>
    </form>
  );
};
