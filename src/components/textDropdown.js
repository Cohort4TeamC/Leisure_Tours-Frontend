import { useField, ErrorMessage } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap'
const Selection = ({ ...props }) => {
    const [field, meta] = useField(props)
    const {label,name,options,...rest}=props
    return (
        <div className="mb-2">

<Form.Select as='select' name={props.name}   aria-label="Default select example">
  {options.map((option,index)=>{
      return(
          <option key={option.key} value={option.value}>
              {option.key}
              </option>
      )
  })}
</Form.Select>

                <ErrorMessage name={field.name} />

        </div>
    );
}

export default Selection;