import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {

    const onClose = event => {
        if (event.target.className === 'modal-view') {
            props.onClose();
        }
    }

    return (
        ReactDOM.createPortal(
            <div className="modal-view" onClick={(e) => onClose(e)}>
                <div className="modal">
                <div className="modal-header">
                    <div className="modal-title">{props.title}</div>
                    <button className="modal-close" onClick={props.onClose}>X</button>
                </div>
                <div className="modal-content">
                    { props.children }
                </div>
            </div>
        </div>, document.getElementById('root'))
    );

}

export default Modal;