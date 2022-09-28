import Swal, { SweetAlertIcon } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function ModalConfirmacao(titulo: string, icon: SweetAlertIcon, mensagem: string) {
  const SwalModal = withReactContent(Swal);
  return SwalModal.fire({
    title: titulo,
    icon: icon,
    html: <p>{mensagem}</p>,
    confirmButtonText: "Sim",
    cancelButtonText: "Não",
    showCancelButton: true,
    buttonsStyling: false,
    customClass: {
      confirmButton: "btn btn-primary mx-1",
      cancelButton: "btn btn-danger mx-1",
    }
  });
}