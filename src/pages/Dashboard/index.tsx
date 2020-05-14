import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form,Repositories } from './styles';
import logoImg from '../../assets/logoImg.svg'


const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59894338?s=460&u=314d324813625dee32253eaa475bcbe764bcdc8b&v=4"
            alt="Juan Cassiano"
          />
          <div>
            <strong>juancassiano/Github-Explorer</strong>
            <p>Explorer of github repositories</p>
          </div>

          <FiChevronRight size={20} />
        </a>


        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59894338?s=460&u=314d324813625dee32253eaa475bcbe764bcdc8b&v=4"
            alt="Juan Cassiano"
          />
          <div>
            <strong>juancassiano/Github-Explorer</strong>
            <p>Explorer of github repositories</p>
          </div>

          <FiChevronRight size={20} />
        </a>



        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59894338?s=460&u=314d324813625dee32253eaa475bcbe764bcdc8b&v=4"
            alt="Juan Cassiano"
          />
          <div>
            <strong>juancassiano/Github-Explorer</strong>
            <p>Explorer of github repositories</p>
          </div>

          <FiChevronRight size={20} />
        </a>



        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59894338?s=460&u=314d324813625dee32253eaa475bcbe764bcdc8b&v=4"
            alt="Juan Cassiano"
          />
          <div>
            <strong>juancassiano/Github-Explorer</strong>
            <p>Explorer of github repositories</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
};


export default Dashboard;
