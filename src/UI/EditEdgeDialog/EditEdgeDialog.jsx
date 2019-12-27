import React from "react";
import "./EditEdgeDialog.scss";

const EditEdgeDialog = () => (
  <div id="editEdgeDialog">
    <div className="operationName">Úprava hrany</div>
    <form className="form-horizontal">
      <div className="form-group">
        <label htmlFor="inpEdgeLabel" className="col-sm-4 control-label">
          Popisek
        </label>
        <div className="col-sm-7">
          <input type="text" className="form-control" id="inpEdgeLabel" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inpEdgeColor" className="col-sm-4 control-label">
          Nová barva
        </label>
        <div className="col-sm-7">
          <input type="color" className="form-control" id="inpEdgeColor" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inpEdgeWidth" className="col-sm-4 control-label">
          Nová tloušťka
        </label>
        <div className="col-sm-7">
          <input type="number" className="form-control" id="inpEdgeWidth" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <button type="button" className="btn btn-success" id="btnSaveEdge">
            Uložit
          </button>
          <button
            type="button"
            className="btn btn-default"
            id="btnCancelEdgeEdit"
          >
            Zrušit
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default EditEdgeDialog;
