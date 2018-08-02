import GraphVis from 'react-graph-vis';
import React from 'react';
import { graphVisLocales } from '../../../functionality/GlobalExerciseConstants';
import { addNode, showEditNodeDialog } from '../../../functionality/nodeEditFunctions';
import EditNodeDialog from '../../../UI/EditNodeDialog/EditNodeDialog';

class SingleDrawing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphVis: { nodes: [], edges: [] },
      options: {
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
          font: { size: 22 },
        },
        edges: {
          arrows: {
            to: { enabled: false, scaleFactor: 2 },
            from: { enabled: false, scaleFactor: 2 },
          },
          color: { color: '#000000', hover: '#000000' },
          width: 2,
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
    const events = {
      select: function (event) { }
    };

    return (
      <div>
        <EditNodeDialog />
        <GraphVis
          graph={this.state.graphVis}
          options={this.state.options}
          events={events}
          style={{ width: "100%", height: window.innerHeight - 120 }} />
      </div>
    );
  }
}

export default SingleDrawing;
