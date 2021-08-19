import React from 'react';

const Inputgroup = ({ type, name, id, className, minlength, value }) => {
  const handleChange = (event) => {
    value(event.target.value, name);
  };

  return (
    <div class ="form_inputgroup">
      <label>{name}</label>
      {type === 'text' && (
        <input
          type={type}
          id={id}
          className={className}
          onChange={handleChange}
          //   onChange={(event) => handleChange(event, type)}
        />
      )}
      {type === 'password' && (
        <input
          type={type}
          id={id}
          className={className}
          minLength={minlength}
          onChange={handleChange}
          required
        />
      )}

      {type === 'email' && (
        <input
          type={type}
          id={id}
          className={className}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );
};

export default Inputgroup;
