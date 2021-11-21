import { useField, ErrorMessage } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap'
const TextField = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="mb-2">
            <Form.Group  controlId="formBasicPassword" >
                <Form.Label>{props.label}</Form.Label>
                <Form.Control type="text" name={props.name} placeholder={props.name}
                    {...field} {...props}
                    autoComplete="off"
                    className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                    value={props.name}
                    onChange={(e)=>props.setName(e.target.value)}
                />
                <ErrorMessage name={field.name} />
            </Form.Group>

        </div>
    );
}

export default TextField;