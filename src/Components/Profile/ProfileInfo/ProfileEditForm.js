import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

export const ProfileEditForm = (props) => {
    return <>
        <Formik
            initialValues={
            {
                AboutMe: 'I\'am cool',
                fullName: props.profile.fullName,
                lookingForAJob: props.profile.lookingForAJob,
                lookingForAJobDescription: props.profile.lookingForAJobDescription,
                contacts: {
                    'facebook': props.profile.contacts.facebook,
                    'website': props.profile.contacts.website,
                    'vk': props.profile.contacts.vk,
                    'twitter': props.profile.contacts.twitter,
                    'instagram': props.profile.contacts.instagram,
                    'youtube': props.profile.contacts.youtube,
                    'github': props.profile.contacts.github,
                    'mainLink': props.profile.contacts.mainLink,
                }

            }}
            // validate={values => {
            //     const errors = {};
            //     if (!values.email) {
            //         errors.email = 'Required';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //     ) {
            //         errors.email = 'Invalid email address';
            //     }
            //     return errors;
            // }}
            onSubmit={(values, { setStatus }) => {
                props.editProfile(values, setStatus).then(() => props.editMode(false))
            }}
            // validationSchema={loginFormSchema}
        >
            {({status}) => (
                <Form>
                    <p>{status && status.errors &&
                        <div className="message">{status.errors}</div>
                    }</p>

                    {/*<div>*/}
                    {/*    <label htmlFor={'AboutMe'}>About Me: </label>*/}
                    {/*    <Field type={'text'} name={'AboutMe'} placeholder={'About Me'}/>*/}
                    {/*</div>*/}
                    {/*<ErrorMessage name="AboutMe" component="div"/>*/}

                    <div>
                        <label htmlFor={'fullName'}>Full name: </label>
                        <Field type={'text'} name={'fullName'} placeholder={'Full name'}/>
                    </div>
                    <ErrorMessage name="fullName" component="div"/>

                    <div>
                        <label htmlFor={'lookingForAJob'}>Looking for a job</label>
                        <Field type={'checkbox'} name={'lookingForAJob'}/>
                    </div>
                    <ErrorMessage name="lookingForAJob" component="div"/>

                    <div>
                        <label htmlFor={'lookingForAJobDescription'}>My professional skills: </label>
                        <Field as={'textarea'} rows={'5'} cols={'50'} name={'lookingForAJobDescription'}
                               placeholder={'Tell about your skills'}/>
                    </div>
                    <ErrorMessage name="lookingForAJobDescription" component="div"/>

                    <div>
                        <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => <div>
                        <label htmlFor={'contacts.' + key}>{key} </label>
                        <Field type={'text'} name={'contacts.' + key}/>
                        <ErrorMessage name={'contacts.' + key} />
                    </div>)
                    }
                    </div>

                    <button type={'submit'}> Save</button>
                </Form>
            )}
        </Formik>
    </>
}