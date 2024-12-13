import React, { useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDevice, useFormUtils } from "../../hooks";
import { Input } from "./Input";
import { Form } from "./Form";
import { phoneCodes } from "../../data-list";
import { Select } from "./Select";
import { InputNumber } from "./InputNumber";
import { TextArea } from "./TextArea";
import { notification } from "./notification";
import { currentConfig } from "../../firebase";
import { useNavigate } from "react-router";
import { Button } from "./index";

export const FormContact = ({ onSetIsVisibleModal }) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [loadingContact, setLoadingContact] = useState(false);

  const schema = yup.object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    countryCode: yup.string().required(),
    phoneNumber: yup.number().required(),
    message: yup.string(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  const onSubmitFetchContacts = async (formData) => {
    try {
      setLoadingContact(true);

      const contact = mapContactData(formData);

      const response = await fetchSendEmail(contact);

      if (!response.ok) throw new Error(response.statusText);

      notification({ type: "success", title: "Enviado exitosamente" });
      onSetIsVisibleModal(false);
      navigate("/contact-success");
    } catch (e) {
      console.log("Error email send:", e);
      notification({ type: "error", placement: "topLeft" });
    } finally {
      // cleanContactForm(formData);
      setLoadingContact(false);
    }
  };

  const fetchSendEmail = async (contact) =>
    await fetch(`${currentConfig.sendingEmailsApiUrl}/emails/contact`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": null,
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contact),
    });

  const mapContactData = (formData) => ({
    contact: {
      firstName: formData.firstName,
      lastName: "",
      email: formData.email,
      phone: {
        number: formData.phoneNumber,
        countryCode: formData.countryCode,
      },
      message: formData.message,
      hostname: window.location.hostname || "alquiler-de-proyectores.com",
    },
  });
  // todo: agregar limpieza de imput
  // const cleanContactForm = (formData) => {
  //   formData.firstName = "";
  // };
  return (
    <Form onSubmit={handleSubmit(onSubmitFetchContacts)}>
      <Row gutter={[16, 27]}>
        <Col xs={24} sm={24} md={24}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <Input
                label="Ingrese nombres"
                name={name}
                value={value}
                onChange={onChange}
                isMobile={isMobile}
                error={error(name)}
                required={required(name)}
              />
            )}
          />
        </Col>

        <Col span={24}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <Input
                label="Ingrese email"
                name={name}
                value={value}
                onChange={onChange}
                isMobile={isMobile}
                error={error(name)}
                required={required(name)}
              />
            )}
          />
        </Col>
        <Col xs={24} sm={24} md={10}>
          <Controller
            name="countryCode"
            control={control}
            defaultValue="+51"
            render={({ field: { onChange, value, name } }) => (
              <Select
                label="Código"
                value={value}
                onChange={(value) => onChange(value)}
                error={error(name)}
                required={required(name)}
                isMobile={isMobile}
                options={phoneCodes.map((phoneCode) => ({
                  code: phoneCode.code,
                  value: phoneCode.dial_code,
                  label: `${phoneCode.name} (${phoneCode.dial_code})`,
                }))}
              />
            )}
          />
        </Col>
        <Col xs={24} sm={24} md={14}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <InputNumber
                label="Ingrese teléfono"
                name={name}
                value={value}
                onChange={onChange}
                isMobile={isMobile}
                error={error(name)}
                required={required(name)}
              />
            )}
          />
        </Col>
        <Col span={24}>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value, name } }) => (
              <TextArea
                label="Ingrese mensaje"
                name={name}
                value={value}
                onChange={onChange}
                error={error(name)}
                required={required(name)}
              />
            )}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={54}>
          <Button
            type="secondary"
            width="100%"
            margin=""
            block
            htmlType="submit"
            loading={loadingContact}
            disabled={loadingContact}
            noHover
          >
            Enviar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
