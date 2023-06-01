interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClickAdd: () => void;
  handleOnChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeLastName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeUrl: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeIsActive: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export default AddUserModalProps;
