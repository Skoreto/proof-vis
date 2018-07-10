import React from 'react';
import GraphVis from 'react-graph-vis';
import { graphVisLocales } from '../../functionality/GlobalExerciseConstants';
import { addNode, showEditNodeDialog } from '../../functionality/nodeEditFunctions';
import EditNodeDialog from '../../components/UI/EditNodeDialog/EditNodeDialog';

class DialogDrawing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphVis: { nodes: [], edges: [] },
      options: {
        autoResize: true,
        width: '606',
        height: '400',
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
          enabled: true,
          initiallyActive: true,
          addNode: addNode,
          editNode: showEditNodeDialog,
          editEdge: true,
          deleteNode: true,
          deleteEdge: true,
          controlNodeStyle: {},
        },
        interaction: {
          dragNodes: true,
          dragView: true,
          hideEdgesOnDrag: false,
          hideNodesOnDrag: false,
          hover: true,
          hoverConnectedEdges: false,
          keyboard: {
            enabled: false,
            speed: { x: 10, y: 10, zoom: 0.02 },
            bindToWindow: true,
          },
          multiselect: true,
          navigationButtons: true,
          selectable: true,
          selectConnectedEdges: false,
          tooltipDelay: 300,
          zoomView: false,
        }
      },
    };
  }

  render() {
    const events = { };

    return (
      <div>
        <GraphVis graph={this.state.graphVis} options={this.state.options} events={events} />
        <EditNodeDialog />
      </div>
    );
  }
}

export default DialogDrawing;
