import { useDispatch, useSelector } from 'react-redux'
import modals from '../modals'
import { closeModal } from '../stores/modal'
import { close } from '../utils'

export default function Modal() {
  const { name, data } = useSelector((state) => state.modal)
  const modal = modals.find((m) => m.name === name)
  // const dispatch = useDispatch()
  // const close = () => {
  //   dispatch(closeModal())
  // }
  return (
    <div className="modal">
      <div className="modal-inner">
        <modal.element close={close} data={data} />
      </div>
    </div>
  )
}
