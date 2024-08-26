import s from './Modal.module.scss'

export const Modal = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className={s.modalWrapper}>
            <div className={s.innerModal}>
                {children}
                
                <button onClick={onClose}>
                    Close Modal
                </button>
            </div>
        </div>
    )
}