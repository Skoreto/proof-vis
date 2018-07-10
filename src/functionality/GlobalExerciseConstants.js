import { Tools } from 'react-sketch';

/**
 * Czech localization for graphVis editing bar.
 */
export const graphVisLocales = {
  cs: {
    edit: 'Upravit',
    del: 'Smazat vybrané',
    back: 'Zpět',
    addNode: 'Přidat vrchol',
    addEdge: 'Přidat hranu',
    editNode: 'Upravit vrchol',
    editEdge: 'Upravit hranu',
    addDescription: 'Klikněte do prázdného prostoru pro umístění nového vrcholu.',
    edgeDescription: 'Táhnutím hrany od vybraného vrcholu ji spojte s jiným vrcholem.',
    editEdgeDescription: 'Přetáhněte konec hrany na vrchol, se kterým ji chcete spojit.',
    createEdgeError: 'Nelze připojit hrany ke clusteru.',
    deleteClusterError: 'Clustery nemohou být smazány.',
    editClusterError: 'Clustery nemohou být upraveny.',
  }
};

/**
 * Default presets for graphVis.
 */
export const graphVisOptions = {
  autoResize: true,
  height: '100%',
  width: '100%',
  locale: 'cs',
  locales: graphVisLocales,
  clickToUse: false,
  physics: false,
  layout: {},
  nodes: {
    shape: 'circle',
    color: { background: '#ffff08', border: '#000000' },
    label: '   ',
    margin: 12,
    font: { size: 18 },
  },
  edges: {
    arrows: {
      to: { enabled: false, scaleFactor: 2 },
      from: { enabled: false, scaleFactor: 2 },
    },
    color: { color: '#000000', hover: '#000000' },
    width: 1,
    dashes: false,
    label: '   ',
    font: { align: 'top', size: 18 },
  },
  configure: {
    enabled: false,
    filter: 'nodes,edges',
    showButton: true,
  },
  manipulation: {
    enabled: false,
    initiallyActive: false,
    addNode: function (nodeData, callback) {
      // Nastaveni parametru noveho vrcholu
      let color = { background: '#FFFF00', border: '#000000' };
      let shadow = { enabled: false };
      nodeData.shape = 'dot';
      nodeData.size = 21;
      nodeData.label = null;
      nodeData.color = color;
      nodeData.borderWidth = 1;
      nodeData.shadow = shadow;
      callback(nodeData);
    },
    editEdge: true,
    deleteNode: true,
    deleteEdge: true,
    controlNodeStyle: {},
  },
  interaction: {
    dragNodes: true,
    dragView: false,
    hideEdgesOnDrag: false,
    hideNodesOnDrag: false,
    hover: true,
    hoverConnectedEdges: false,
    keyboard: {
      enabled: false,
      speed: { x: 5, y: 5, zoom: 0.02 },
      bindToWindow: true,
    },
    multiselect: true,
    navigationButtons: true,
    selectable: true,
    selectConnectedEdges: false,
    tooltipDelay: 300,
    zoomView: true,
  }
};

/**
 * Initial state of every Exercise component.
 */
export const initialExerciseState = {
  graphVis: { nodes: [], edges: [] },
  options: graphVisOptions,
  timeouts: [],
  intervals: [],
  currentStep: 0,
  isSketchAllowed: false,
  sketchTool: Tools.Pencil,
  isSVGCoverShowed: false,
  svgContent: '',
  description: '',
  btnPrevD: true,
  btnNextD: false,
  btnSketchA: false,
  btnSketchC: '',
  btnPencilA: false,
  btnPencilD: true,
  btnLineA: false,
  btnLineD: true,
  btnCircleA: false,
  btnCircleD: true,
  repeatBoxHidden: true,
  repeatBoxContent: '',
  btnRepeatD: true,
  isDrawingDialogOpen: false,
};

/**
 * GraphVis events object.
 */
export const events = {};

/**
 * Palette of global color presets.
 */
export const palette = {
  yellow: '#FFFF08',
  black: '#000000',
  white: '#FFFFFF',
  lightpurple: '#D1C4E9',
  purple: '#B39DDB',  // #B388FF
  green: '#81C784',
  jade: '#4DB6AC',
  red: '#F06292',
  ruby: '#EC407A',
  orange: '#FF7043',
};
