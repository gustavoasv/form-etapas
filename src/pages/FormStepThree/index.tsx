import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/formContext";
import { Theme } from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

export const FormStepThree = () => {
  const history = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      history("/stepthree");
    } else {
      alert("Preencha os dados");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };
  const handleGitHub = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p> Passo de 3/3 {state.currentStep}</p>
        <h1>
          Legal, {state.name} Preencha com seus contatos para entrarmos em
          contato
        </h1>
        <p>Preencha o campo abaixo com seu nome completo</p>
        <hr />

        <label>
          Qual seu email
          <input
            type="text"
            value={state.email}
            onChange={handleEmailChange}
          ></input>
        </label>
        <label>
          Qual seu GitHub
          <input
            type="text"
            value={state.github}
            onChange={handleGitHub}
          ></input>
        </label>
        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </C.Container>
    </Theme>
  );
};
