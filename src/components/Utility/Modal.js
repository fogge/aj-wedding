import React from "react";
import "./Modals.scss";

const Modal = ({
  content,
  confirm,
  decline,
  confirmText,
  declineText,
  confirmDisabled
}) => {
  return (
    <div className="backdrop" onClick={decline}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {content}
        <div className="button__container_modal">
          {decline && (
            <button className="orange" onClick={decline}>
              {declineText}
            </button>
          )}
          {confirm && (
            <button disabled={confirmDisabled} onClick={confirm}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
