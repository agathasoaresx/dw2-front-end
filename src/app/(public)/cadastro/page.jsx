'use client'
import React from 'react'
import {League_Spartan} from 'next/font/google'
import { Inter } from 'next/font/google'
import { Formik, Form, Field, ErrorMessage, FieldProps} from 'formik';
import * as Yup from 'yup';




const league_Spartan = League_Spartan(
    {
        weight: '700',
        subsets: ['latin'],
    }
)

const inter = Inter(
  {
    weight: '600',
    subsets: ['latin']
  }
)

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required("E-mail é obrigatório"),
  date: Yup.date().required("Campo obrigatório"),
  phone: Yup.string().required("Insira um telefone").min(8, "Telefone precisa ter no mínimo 8 números"),
  cpf: Yup.string().required("Cpf é obrigatório").min(8, "CPF precisa ter no mínimo 11 números")
});



const Cadastro = () => {



  return (
    <>
    
    <div class="flex justify-center items-center w-[1210px]">
      <div id="cadastro-card" class="flex flex-col h-auto w-[496px] justify-center">
        <div id="cadastro-title" class="h-14 ">
          <div className={league_Spartan.className}>
          <h2 class="font-sans text-3xl league_Spartan">Dados do paciente</h2>
          </div>
        </div>
        <div id="cadastro-body" class="w-auto">
          <Formik
          validationSchema={schema}
          initialValues={{ name: '', email: '', date: '', phone: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='space-y-3'>
                  <Field type="name" name="name"  placeholder="Nome" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10 "/>
                  <Field type="email" name="email" placeholder="E-mail" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage name="email" component="div"/>
                  <Field className=" border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" name="date" placeholder="date" type="date"/>
                  <ErrorMessage  component="span" name="date"/>
                  <Field type="phone" name="phone" placeholder="Telefone" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage  component="span" name="phone"/>
                  <Field type="cpf" name="cpf" placeholder="CPF" class="border-2 text-[#A2A3A4] px-2 font-sans text-base h-[48px] rounded w-[100%] border-gray-900 border-opacity-10" />
                  <ErrorMessage  component="span" name="cpf"/>


              <div id="input" class="pt-9">
                  <button type="submit" disabled={isSubmitting}  className="rounded-md w-[496px] h-[45px] bg-lightGray font-sans text-[#979797] ">
                    Salvar
                  </button>
              </div>
              </div>
          </Form>
      )}
      </Formik>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cadastro