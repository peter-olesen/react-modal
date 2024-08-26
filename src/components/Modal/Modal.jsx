import s from './Modal.module.scss'

export const Modal = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;

    const innerClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={s.modalWrapper} onClick={onClose}>
            <div className={s.innerModal} onClick={innerClick}>
                {children}

                <button onClick={onClose}>
                    Close Modal
                </button>
            </div>
        </div>
    )
}