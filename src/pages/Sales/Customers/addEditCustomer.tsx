
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {  Field, Form, Radio, RadioGroup } from '@availity/form';
import * as yup from 'yup';
import '@availity/yup';
import { isEmpty } from "lodash";
import { Button, CardFooter, Col, Row } from "reactstrap";
import { LoadingButton } from "@availity/button";

const AddEditCustomer = ({customerEvent,isEdit,handleValidFormSubmit,handleShow,isLoading}:any) => {
    const [customertype, setCustomerType] = useState<any>("individual")
    const initialValuesObj = {
        c_name: "",
        c_email: "",
        c_address: "",
        c_type:"individual",
        c_phone:"",
        c_notes:"",
        c_business_name:"",
      }

      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      const phoneNumberRules = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[123456789]\d{9}$/;

      const validationSchema = yup.object().shape({
        c_name: yup.string().required("Enter Valid Name"),
        c_address: yup.string().required("Enter Valid Address"),
        c_email: yup.string().email("Enter Valid Email").notRequired(),
        c_phone: yup.string().matches(phoneNumberRules, 'Phone number is not valid').notRequired(),
        c_business_name: yup.string().when("c_type", (c_type:any, schema:any) => {
            if(c_type =="business")
              return schema.required("Must enter business name.")
            return schema
          })
      });

    return (
        <React.Fragment>
            <Form initialValues={initialValuesObj} validationSchema={validationSchema} onSubmit={handleValidFormSubmit}>

                {({ setFieldValue }) => {
                    useEffect(() => {
                        if (!isEmpty(customerEvent) && isEdit) {
                            setCustomerType(customerEvent.attributes.c_type)
                            setFieldValue("c_type", customerEvent.attributes.c_type, true)
                            setFieldValue("c_name", customerEvent.attributes.c_name, true)
                            setFieldValue("c_address", customerEvent.attributes.c_address, false)
                            setFieldValue("c_email", customerEvent.attributes.c_email || "", false)
                            setFieldValue("c_phone", customerEvent.attributes.c_phone || "", false)
                            setFieldValue("c_notes", customerEvent.attributes.c_notes || "", false)
                            setFieldValue("c_business_name", customerEvent.attributes.c_business_name||"", false)
                        }
                    }, [customerEvent,isEdit])
                   
                    return (
                        <>
                            <Row >
                                <Col>
                                    <div className="mb-3 font-size-10">
                                        <RadioGroup inline name="c_type" 
                                         onChange={(e: any) => setCustomerType(e)}>
                                            <Radio label="Individual" value="individual"  />
                                            <Radio label="Business" value="business"  />
                                        </RadioGroup>
                                    </div>
                                </Col>
                            </Row>
                            {customertype=="business" && 
                            <Row>
                            <Col>
                                <div className="mb-3">
                                    <Field
                                        name="c_business_name"
                                        type="text"
                                        label="Business Name"
                                        className={'form-control'}
                                        required
                                        placeholder="Enter Valid Business Name"
                                    />
                                </div>
                            </Col>
                        </Row>}
                            <Row>
                                <Col>
                                    <div className="mb-3">
                                        <Field
                                            name="c_name"
                                            type="text"
                                            label={customertype=="business"?"Primary Contact Name":"Customer Name"}
                                            className={'form-control'}
                                            required
                                            placeholder={customertype=="business"?"Enter Valid Contact Name":"Enter Valid Customer Name"}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col >
                                    <div className="form-group">
                                        <Field
                                            name="c_address"
                                            label="Address"
                                            type="textarea"
                                            required
                                            placeholder="Enter Valid Address"
                                            className={'form-control'}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <div className="mb-3">
                                        <Field
                                            name="c_phone"
                                            label={customertype == "business" ? "Work Phone" : "Phone"}
                                            type="tel"
                                            placeholder="Enter Valid Phone"
                                            className={'form-control'}
                                        />
                                    </div>
                                </Col>
                                <Col >
                                    <div className="form-group">
                                        <Field
                                            name="c_email"
                                            label="Email"
                                            type="email"
                                            placeholder="Enter Valid Email"
                                            className={'form-control'}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col >
                                    <div className="form-group">
                                        <Field
                                            name="c_notes"
                                            label="Note"
                                            type="textarea"
                                            placeholder="Enter Valid Customer/Business Note"
                                            className={'form-control'}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <CardFooter>
                                <div className="text-end">
                                    <Button type="button" className="btn btn-light w-sm me-4" onClick={handleShow} >Close</Button>
                                    {/* <LoadingButton block className="btn btn-success save-user w-md" disabled={isLoading} isLoading={isLoading} >
                                        Save
                                    </LoadingButton> */}
                                    <Button
                                        type="submit"
                                        className="btn btn-success save-user w-md">
                                        Save
                                    </Button>
                                </div>
                            </CardFooter>
                        </>
                    );
                }}
            </Form>
        </React.Fragment>
    )
}

export default withRouter(AddEditCustomer);
