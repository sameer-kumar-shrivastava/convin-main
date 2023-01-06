import React from "react";
import './button.component.scss';
import { requestSingleUser } from '../../redux/actions';
import { store } from "../../store";


const Button = ({ i, id }) => {

  const ShowUserDetails = (id) => {
    store.dispatch(requestSingleUser(id));
  }

  return (
    <div className='container' key={i} id={id} onClick={() => ShowUserDetails(id)} >
      <p><span>{i + 1}</span><i></i></p>
    </div>
  );
}

export default Button;
