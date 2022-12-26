import React from "react";
import { Modal, ModalBody } from "shards-react";

export default function CustomModal({ show, toggle, title, data, btn }) {
  return (
    <div className="c-modal">
      <Modal centered backdrop={true} size="sm" open={show} toggle={toggle}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 35px 15px",
            borderBottom: "2px solid rgb(246, 247, 249)"
          }}
        >
          <h5>{title}</h5>
          <div
            style={{ textAlign: "right", cursor: "pointer" }}
            onClick={toggle}
          >
            <i class="material-icons md-18">cancel</i>
          </div>
        </div>
        <ModalBody>
          <section>
            <h5 style={{ fontSize: 16, fontWeight: "bolder" }}>{data.title}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10
              }}
            >
              <div style={{ paddingRight: 10 }}>
                <span style={{ fontWeight: "bolder" }}>Amount: </span>
                {data.amount},
              </div>
              <div style={{ paddingLeft: 10 }}>
                <span style={{ fontWeight: "bolder" }}>Status: </span>
                {data.status},
              </div>
              <div style={{ paddingLeft: 10 }}>
                <span style={{ fontWeight: "bolder" }}>Address: </span>
                {data.address}
              </div>
            </div>
            <div style={{ fontSize: 13, color: "black" }}>
              <h5>Description</h5>
              {data.desc}
            </div>
          </section>
          <section>{btn ? btn : null}</section>
        </ModalBody>
      </Modal>
    </div>
  );
}
