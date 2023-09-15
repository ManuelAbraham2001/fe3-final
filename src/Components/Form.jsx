import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: ""
  });

  const validEmail = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  )
  
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleFormInputs = e => {

    const { name, value } = e.target;

    setFormInfo({
      ...formInfo,
      [name]: value 
    });

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formInfo.name.trim().length < 5 || !validEmail.test(formInfo.email.trim())) {
      setError(true);
      setSuccess(false);
      return;
    }

    setSuccess(formInfo.name);
    setError(false);

    setFormInfo({
      name: "",
      email: ""
    });
  };

  return (
    <div>
      <form>
      <input
          onChange={handleFormInputs}
          type="text"
          name="name"
          id="name"
          value={formInfo.name} 
          placeholder="Nombre"
        />
        <input
          onChange={handleFormInputs}
          type="text"
          name="email"
          id="email"
          value={formInfo.email} 
          placeholder="Email"
        />
        <button onClick={handleSubmit} type="submit">Contactame</button>
      </form>
      {error ? <p style={{color: 'red', fontWeight: "bold"}}>Por favor verifique su información nuevamente</p> : null}
      {success ? <p style={{color: 'green', fontWeight: "bold"}}>Gracias {success}, te contactaremos cuando antes vía mail</p> : null}
    </div>
  );
};

export default Form;
