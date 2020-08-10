import React from 'react';

function App() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  async function handleClick(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.status === 200) {
        alert('Enviado com Sucesso!!');
      } else {
        alert('Erro ao Enviar Formulario');
      }
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div>
      <form onSubmit={(event) => handleClick(event)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={form.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="senha"
            value={form.senha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            type="text"
            value={form.cep}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rua">Rua</label>
          <input
            id="rua"
            type="text"
            value={form.rua}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="numero">Numero</label>
          <input
            id="numero"
            type="text"
            value={form.numero}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input
            id="bairro"
            type="text"
            value={form.bairro}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            type="text"
            value={form.cidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="estado">estado</label>
          <input
            id="estado"
            type="text"
            value={form.estado}
            onChange={handleChange}
          />
        </div>
        <button style={{ marginTop: '20px' }}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
