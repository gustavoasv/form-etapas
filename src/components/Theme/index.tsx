import { Children, ReactNode } from "react";
import * as C from "./styles";
import { Header } from "../Header";
import { SideBarItem } from "../SideBarItem";
import { useForm } from "../../contexts/formContext";
type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.container>
      <C.Area>
        <Header></Header>
        <C.Steps>
          <C.SideBar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon=" profile"
              path="/"
              active={state.currentStep === 1}
            ></SideBarItem>

            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/steptwo"
              active={state.currentStep === 2}
            ></SideBarItem>

            <SideBarItem
              title="contatos"
              description="Como te achar"
              icon="mail"
              path="/stepthree"
              active={state.currentStep === 3}
            ></SideBarItem>
          </C.SideBar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.container>
  );
};
