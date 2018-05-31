import GraphVis from 'react-graph-vis';
import React from 'react';
import { graphVisLocales } from '../../../functionality/GlobalExerciseConstants';

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
          addNode: function (nodeData, callback) {
            // Nastaveni parametru noveho vrcholu
            let color = { background: '#FFFF00', border: '#000000' };
            let shadow = { enabled: false };
            nodeData.shape = 'dot';
            nodeData.size = 18;
            nodeData.label = null;
            nodeData.color = color;
            nodeData.borderWidth = 1;
            nodeData.shadow = shadow;
            callback(nodeData);
          },
          editNode: function (nodeData, callback) {
            // Predvyplneni dialog upravy vrcholu aktualnimi daty
            document.getElementById('inpNodeLabel').value = nodeData.label;
            document.getElementById('inpColorBackground').value = nodeData.color.background;
            document.getElementById('inpNodeSize').value = nodeData.size;
            // document.getElementById('btnSave').onclick = saveNode.bind(this, nodeData, callback);
            // document.getElementById('btnCancel').onclick = cancelNodeEdit.bind(this, callback);
            document.getElementById('editNodeDialog').style.display = 'block';
          },
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
        <div>
          <GraphVis
            graph={this.state.graphVis}
            options={this.state.options}
            events={events}
            style={{ width: "100%", height: window.innerHeight - 120 }} />
        </div>
        <div id="editNodeDialog">
          <span id="operation">Upravit vrchol</span>
          <br />
          <br />
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inpNodeLabel" className="col-sm-2 control-label">Popisek</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inpNodeLabel" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inpColorBackground" className="col-sm-2 control-label">Barva</label>
              <div className="col-sm-10">
                <input type="color" className="form-control" id="inpColorBackground" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inpNodeSize" className="col-sm-2 control-label">Velikost</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" id="inpNodeSize" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button type="button" className="btn btn-success" id="btnSave">Uložit</button>
                <button type="button" className="btn btn-default" id="btnCancel">Zrušit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SingleDrawing;
