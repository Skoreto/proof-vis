import React from 'react';
import { Element } from 'react-scroll'
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import MN from '../../../components/MathJax/MathJaxNode';

export const headingTitle = 'Příklad 23';
export const breadcrumbsCurrent = 'Důkazy přímo';
export const stepSum = 10;

export const definitionPanel = (
  <DefinitionPanel>
    Dokažte, že když dvě různé kružnice grafu <MN>G</MN> obsahují hranu <MN>e</MN>, pak v <MN>G</MN> existuje i kružnice neobsahující hranu <MN>e</MN>.
  </DefinitionPanel>
);

export const getProofBox = currentStep => {
  return (
    <Element className="bg-warning" id="proofBox">
      <Element name="proofPanel1" className={1 === currentStep ? "proof-active" : ""}>
        <p>
          Nechť <MN>{'e=\\{u,v\\}'}</MN> a <MN>C_1 = (u=x_1,x_2,...,x_k=v,u)</MN> a <MN>C_2 = (u=y_1,y_2,...,y_l=v,u)</MN> jsou dvě různé kružnice, které obsahují hranu <MN>e</MN>.
        </p>
        <p>Mohou nastat dvě možnosti:</p>
      </Element>
      <Element name="proofPanel2" className={2 === currentStep ? "proof-active" : ""}>
        <p>
          <b>1.</b> <MN>{'C_1 \\cap C_2=\\{u,v\\}'}</MN> (tj. kružnice mají společnou jenom hranu <MN>e</MN>)
        </p>
      </Element>
      <Element name="proofPanel3" className={3 === currentStep ? "proof-active" : ""}>
        <p>
          <MN>\Rightarrow</MN> Pak dle definice kružnice
          <br/><MN>{'(u,x_2,...,x_k=v=y_l,y_{l-1},...y_2,y_1=u)'}</MN>
          <br/>je kružnice neobsahující hranu <MN>e</MN>.
        </p>
      </Element>
      <Element name="proofPanel4" className={4 === currentStep ? "proof-active" : ""}>
        <p>
          <b>2.</b> <MN>{'C_1 \\cap C_2=\\{e, e_1,...\\}'}</MN> (tj. kružnice mají kromě hrany <MN>e</MN> ještě jiné společné hrany)
        </p>
      </Element>
      <Element name="proofPanel5" className={
        ((5 === currentStep) 
        || (6 === currentStep)
        || (7 === currentStep)
        || (8 === currentStep)) ? "proof-active" : ""}>
        <p>
          <MN>\Rightarrow</MN> Pak máme dvě různé <MN>u-v</MN> cesty <MN>P_1=C_1-e=(u=x_1,x_2,...,x_k=v)</MN> a <MN>P_2=C_2-e=(u=y_1,y_2,...,y_l=v)</MN> a žádná z cest neobsahuje hranu <MN>e</MN>.
        </p>
      </Element>
      <Element name="proofPanel6" className={9 === currentStep ? "proof-active" : ""}>
        <p>
          <MN>\Rightarrow</MN> Pak existuje vrchol, ve kterém se cesty rozcházejí, a také vrchol, ve kterém se cesty scházejí. 
          <br />
          <br />(Mohou to být vrcholy <MN>u</MN> a <MN>v</MN> nebo některé vnitřní.)
        </p>
      </Element>
      <Element name="proofPanel7" className={'element borderless' + (10 === currentStep ? " proof-active" : "")}>
        <p>
          Nechť prvním vrcholem, ve kterém se cesty rozcházejí, je <MN>{'x_i=y_j,i \\in \\{1,2,...,k \\}'}</MN>, <MN>{'j \\in \\{1,2,...,l \\}'}</MN> a vrchol, ve kterém se scházejí, je <MN>{'x_s=y_r'}</MN>, <MN>{'s \\in \\{1,2,...,k \\}'}</MN>, <MN>{'r \\in \\{1,2,...,l \\} \\wedge s > i \\wedge r > j'}</MN>.
        </p>
        <br />
        <p>
          Pak podle definice kružnice je <MN>{'(x_i,x_{i+1},...,x_s = y_r,...,y_j=x_i)'}</MN> kružnice neobsahující hranu <MN>e</MN>, protože ani jedna z cest ji neobsahovala. <MN>\Box</MN>
        </p>
      </Element>
    </Element>
  )
};

export const cameraPosition1 = {
  position: { x: 0, y: 15 }, 
  scale: 0.65,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};

export const cameraPosition2 = {
  position: { x: 0, y: -130 }, 
  scale: 1.15,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};

export const cameraPosition3 = {
  position: { x: 0, y: 200 }, 
  scale: 1.15,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};
