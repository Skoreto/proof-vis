import React from 'react';
import DefinitionPanel from '../../../components/UI/DefinitionPanel/DefinitionPanel';
import MN from '../../../components/MathJax/MathJaxNode';

export const headingTitle = 'Příklad 20';
export const breadcrumbsCurrent = 'Důkazy přímo';
export const stepSum = 7;

export const definitionPanel = (
  <DefinitionPanel>
    <cite><q>Nechť <MN>G</MN> je souvislý graf. Jestliže hrana <MN>e</MN> není most v <MN>G</MN>, pak v <MN>G</MN> existuje kružnice obsahující hranu <MN>e</MN>.</q> </cite> Dokažte přímo.
  </DefinitionPanel>
);

export const getProofBox = currentStep => {
  return (
    <div className="bg-warning" id="proofBox">
      <div className={1 === currentStep ? "proof-active" : ""}>
        <p>
          Pokud <MN>{'e=\\{x,y\\}'}</MN> není most v <MN>G</MN>, poté z definice mostu platí, že graf <MN>G-e</MN> má stejný počet komponent jako <MN>G</MN>.
        </p>
      </div>
      <div className={(2 === currentStep) || (3 === currentStep) ? "proof-active" : ""}>
        <p>
          Protože uvažujeme souvislý graf <MN>G</MN>, musí mezi libovolně zvolenými vrcholy <MN>u</MN> a <MN>v</MN> existovat cesta.
        </p>
      </div>
      <div className={4 === currentStep ? "proof-active" : ""}>
        <p>
          Když existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{'P_{uv}'}</MN> v <MN>G</MN>, tak existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{"P'_{uv}"}</MN> v <MN>G-e</MN>. (Uvažujeme totiž stále hranu <MN>e</MN>, která není mostem.)
          <br /><br />
          Poznámka:  <MN>{"P'_{uv}"}</MN> se nemusí nutně  <MN>{'=P_{uv}'}</MN>.
        </p>
      </div>
      <div className={5 === currentStep ? "proof-active" : ""}>
        <p>
          Z toho vyplývá, že v <MN>G-e</MN> musí v existovat také cesta <MN>{'P_{xy}'}</MN> mezi vrcholy <MN>x</MN> a <MN>y</MN> z hrany <MN>e</MN>.
        </p>
      </div>
      <div className={6 === currentStep ? "proof-active" : ""}>
        <p>
          Protože <MN>G</MN> vznikne z <MN>G-e</MN> přidáním hrany <MN>e</MN>, musí se <MN>x</MN>-<MN>y</MN> cesta <MN>{'P_{xy}'}</MN> nacházet také v <MN>G</MN>.
        </p>
      </div>
      <div className={'borderless' + (7 === currentStep ? " proof-active" : "")}>
        <p>
          Pak podle definice kružnice platí, že cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>{'e=\\{x,y\\}'}</MN> tvoří v <MN>G</MN> kružnici obsahující hranu <MN>e</MN>.
        </p>
        <p className="text-center">
          Tím je dokázáno stanovené tvrzení. <MN>\Box</MN>
        </p>
      </div>
    </div>
  )
};
