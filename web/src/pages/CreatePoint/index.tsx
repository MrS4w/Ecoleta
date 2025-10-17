import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./styles.css";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
            <span>Informações sobre o ponto de coleta</span>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="text" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
                <option value="1">São Paulo</option>
                <option value="2">Rio de Janeiro</option>
                <option value="3">Minas Gerais</option>
                <option value="4">Espirito Santo</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city">
              <option value="0">Selecione uma cidade</option>
              <option value="1">São Paulo</option>
              <option value="2">Rio de Janeiro</option>
              <option value="3">Belo Horizonte</option>
              <option value="4">Vitória</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>
          <ul className="items-grid">
            <li>
              <img
                src="http://localhost:3333/uploads/lampadas.svg"
                alt="Lâmpadas"
              />
              <span>Lâmpadas</span>
            </li>
            <li className="selected">
              <img
                src="http://localhost:3333/uploads/baterias.svg"
                alt="Baterias"
              />
              <span>Baterias</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/papeis-papelao.svg"
                alt="Papeis e Papelão"
              />
              <span>Papeis e Papelão</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/eletronicos.svg"
                alt="Eletrônicos"
              />
              <span>Eletrônicos</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/organicos.svg"
                alt="Orgânicos"
              />
              <span>Orgânicos</span>
            </li>
            <li>
              <img
                src="http://localhost:3333/uploads/oleo.svg"
                alt="Óleo de Cozinha"
              />
              <span>Óleo de Cozinha</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
