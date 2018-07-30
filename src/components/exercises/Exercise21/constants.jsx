import React from 'react';
import ClaimPanel from '../../../components/UI/ClaimPanel/ClaimPanel';
import MN from '../../../components/MathJax/MathJaxNode';

export const headingTitle = 'Příklad 21';
export const breadcrumbsCurrent = 'Důkazy nepřímo';
export const stepSum = 8;

export const claimPanel = (
  <ClaimPanel>
    <cite><q>Nechť <MN>G</MN> je graf. Jestliže v <MN>G</MN> neexistuje kružnice, pak každá hrana v <MN>G</MN> je most.</q></cite> Dokažte nepřímo.
  </ClaimPanel>
);

export const proofPanels = [
  {
    name: 'proofPanel1',
    activeForSteps: [1],
    content:
      <p>
        Dokazujeme-li nepřímo, snažíme se přímou metodou dokázat tvrzení <MN>\neg B \Rightarrow \neg A</MN>, které je dle zásad výrokové logiky ekvivalentní s původním tvrzením.
        <br />
        <br />V tomto případě bude znít: <cite><q>Jestliže existuje hrana v <MN>G</MN>, která není most, pak v <MN>G</MN> existuje kružnice.</q></cite>
      </p>
  },
  {
    name: 'proofPanel2',
    activeForSteps: [2],
    content:
      <p>
        Pokud existuje hrana <MN>{'e=\\{x,y\\}'}</MN>, která není most v <MN>G</MN>, poté z definice mostu platí, že graf <MN>G-e</MN> má stejný počet komponent jako <MN>G</MN>.
      </p>
  },
  {
    name: 'proofPanel3',
    activeForSteps: [3, 4],
    content:
      <p>
        Před následující úvahou zvolíme libovolné vrcholy u a v, mezi kterými lze sestrojit cestu procházející přes hranu e. 
        <br />
        <br /> <i>Poznámka: V případě nesouvislého grafu není možné sestrojit cestu mezi všemi dvojicemi vrcholů.</i>
      </p>
  },
  {
    name: 'proofPanel4',
    activeForSteps: [5],
    content:
      <p>
        Když existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{'P_{uv}'}</MN> v <MN>G</MN>, tak existuje <MN>u</MN>-<MN>v</MN> cesta <MN>{"P'_{uv}"}</MN> v <MN>G-e</MN>. (Uvažujeme totiž stále hranu <MN>e</MN>, která není mostem.)
        <br /><br />
        Poznámka:  <MN>{"P'_{uv}"}</MN> se nemusí nutně  <MN>{'=P_{uv}'}</MN>.
      </p>
  },
  {
    name: 'proofPanel5',
    activeForSteps: [6],
    content:
      <p>
        Z toho vyplývá, že v <MN>G-e</MN> musí v existovat také cesta <MN>{'P_{xy}'}</MN> mezi vrcholy <MN>x</MN> a <MN>y</MN> z hrany <MN>e</MN>.
      </p>
  },
  {
    name: 'proofPanel6',
    activeForSteps: [7],
    content:
      <p>
        Protože <MN>G</MN> vznikne z <MN>G-e</MN> přidáním hrany <MN>e</MN>, musí se <MN>x</MN>-<MN>y</MN> cesta <MN>{'P_{xy}'}</MN> nacházet také v <MN>G</MN>.
      </p>
  },
  {
    name: 'proofPanel7',
    activeForSteps: [8],
    content:
      <p>
        Pak podle definice kružnice platí, že cesta <MN>{'P_{xy}'}</MN> spolu s hranou <MN>{'e=\\{x,y\\}'}</MN> tvoří v <MN>G</MN> kružnici.
        <br /><br />
        Hrana, která není most, tedy nutně musí ležet na kružnici. Tím je zárověň dokázáno původní ekvivalentní tvrzení. <MN>\Box</MN>
      </p>
  },
];

export const cameraPosition1 = {
  position: { x: 0, y: -10 }, 
  scale: 1.4,
  animation: { duration: 1500, easingFunction: "easeInOutQuad" },
};

export const cameraPosition2 = {
  position: { x: 170, y: -10 }, 
  scale: 0.82,
  animation: { duration: 1000, easingFunction: "easeInOutQuad" },
};

export const cameraPosition3 = {
  position: { x: 400, y: -10 }, 
  scale: 1.4,
  animation: { duration: 4000, easingFunction: "easeInOutQuad" },
};
