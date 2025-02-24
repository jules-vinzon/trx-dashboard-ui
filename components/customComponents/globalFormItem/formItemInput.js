import React from "react";
import InputStyle from "./formItemInput.style.js";
import { Input, Form } from "antd";
import { getValidation } from "../../utilities/formItemValidations.js";

export default function (props) {
  const defaultContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const defaultFormItemStyle = { width: "100%" };

  const label = props.messageLabel ? props.messageLabel : "";
  const helper = props.help;
  const name = props.name;
  const required = props.required;
  const message = props.reqMessage ? props.reqMessage : "";
  const validation = props.validation ? props.validation : "none";
  const formItemStyle = props.formItemStyle
    ? props.formItemStyle
    : defaultFormItemStyle;
  const containerStyle = props.containerStyle
    ? props.containerStyle
    : defaultContainerStyle;
  const messageValidation = props.messageValidation
    ? props.messageValidation
    : "";
  const validationMessage = Array.isArray(messageValidation)
    ? messageValidation.join(" ")
    : messageValidation;
  const validateStatus = props.validateStatus;
  const minLength = props.minLength;
  const messageLength = props.messageLength ? props.messageLength : "";
  const dependencies = props.dependencies;
  const initialValue = props.initialValue;
  const maxLength = props.maxLength ? props.maxLength : 32;
  const inputType = props.inputType ? props.inputType : "normal";
  const formValue = props.form;
  const disabledValue = props.disabled ? props.disabled : false;
  const placeholderValue = props.placeholder ? props.placeholder : "";
  const inputValue = props.value ? props.value : "";
  const hasChild = props.hasChild ? props.hasChild : false;

  return (
    <InputStyle style={containerStyle}>
      {label ? <div className="label-style">{label}</div> : ""}

      <Form.Item
        className="form-item"
        form={formValue}
        name={name}
        style={formItemStyle}
        validateStatus={validateStatus}
        help={helper}
        dependencies={dependencies}
        rules={[
          {
            min: minLength,
            message: { messageLength },
          },
          {
            required: required,
            message: { message },
          },
          () => ({
            validator(rule, value) {
              if (!required) {
                return Promise.resolve();
              }

              if (!value) {
                return Promise.reject();
              }

              const isvalid = getValidation(validation, value);

              const decimalRegex = /^\d+(\.\d{1,2})?$/;

              if (decimalRegex.test(value)) {
                return Promise.resolve();
              } else {
                if (isvalid && isvalid.regex) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(validationMessage);
                }
              }
            },
          }),
        ]}
        initialValue={initialValue}
        hasFeedback
      >
        {!hasChild ?
          inputType === 'normal'
            ?
            <Input
              disabled={disabledValue}
              maxLength={maxLength}
              minLength={minLength}
              placeholder={placeholderValue}
              addonBefore={props.addonBefore}
              size="large"
              style={{ textAlign: 'left' }}
              value={inputValue}
              prefix={props.prefix}
              suffix={props.suffix}
              step={0.01}
              precision={2}
            />
            :
            <Input.Password
              disabled={disabledValue}
              maxLength={maxLength}
              placeholder={placeholderValue}
              size="large"
              style={{ textAlign: 'left' }}
              value={inputValue}
            />
          :
          props.children
        }
      </Form.Item>
    </InputStyle>
  );
}
