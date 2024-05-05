import Image from 'next/image'

const Modal = ({ closeModal, imageSrc }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
      <div className="max-w-[60vw] max-h-[70vh] mx-auto p-4 rounded-lg overflow-hidden">
        <Image src={imageSrc} alt="modal" width={1600} height={1000} className="w-auto h-auto"  />
      </div>
    </div>
  )
}

export default Modal

