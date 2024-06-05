import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import './ProfileEdit.css'

export const ProfileEdit = ({profile, setEditMode, editProfile}) => {
    return <>
        <div className="page_profile_user_data">
            <Formik
                initialValues={
                    {
                        AboutMe: 'I\'am cool',
                        fullName: profile.fullName,
                        lookingForAJob: profile.lookingForAJob,
                        lookingForAJobDescription: profile.lookingForAJobDescription,
                        contacts: {
                            'facebook': profile.contacts.facebook,
                            'website': profile.contacts.website,
                            'vk': profile.contacts.vk,
                            'twitter': profile.contacts.twitter,
                            'instagram': profile.contacts.instagram,
                            'youtube': profile.contacts.youtube,
                            'github': profile.contacts.github,
                            'mainLink': profile.contacts.mainLink,
                        }

                    }}

                onSubmit={(values, {setStatus}) => {
                    editProfile(values, setStatus).then(() => setEditMode(false)).catch(err => console.log(err))
                }}
            >
                {({status}) => (
                    <Form>
                        {status && status.errors &&
                            <div className="error_message_block">{status.errors}</div>
                        }

                        {/*<div>*/}
                        {/*    <label htmlFor={'AboutMe'}>About Me: </label>*/}
                        {/*    <Field type={'text'} name={'AboutMe'} placeholder={'About Me'}/>*/}
                        {/*</div>*/}
                        {/*<ErrorMessage name="AboutMe" component="div"/>*/}

                        <div className="edit_profile_item">
                            <label className="edit_profile_label" htmlFor={'fullName'}>Ваше имя: </label>
                            <Field className="default_input edit_profile_input" type={'text'} maxLength='40' name={'fullName'} placeholder={'Ваше имя'} />
                        </div>
                        <ErrorMessage name="fullName" component="div"/>

                        <div className="edit_profile_item">
                            <label className="edit_profile_label">Вы ищите работу?</label>
                            <div className="edit_profile_radio">
                                <label>
                                    <Field type='radio' name="lookingForAJob" id="yes" value='true'/>
                                    Да
                                </label>
                            </div>
                            <div className="edit_profile_radio">
                                <label>
                                    <Field type='radio' name="lookingForAJob" id="no" value='false'/>
                                    Нет
                                </label>
                            </div>

                        </div>
                        <ErrorMessage name="lookingForAJob" component="div"/>

                        <div className="edit_profile_item">
                            <label className="edit_profile_label" htmlFor={'lookingForAJobDescription'}>Напишите о ваших проффесиональных навыках: </label>
                            <Field as={'textarea'} className="edit_profile_textarea" name={'lookingForAJobDescription'} wrap="hard"
                                   placeholder={'Напишите о своих навыках'}/>
                        </div>
                        <ErrorMessage name="lookingForAJobDescription" component="div"/>

                        <div className="page_profile_user_data_contacts">
                            <h3>Поделитесь своими контактами:</h3>{Object.keys(profile.contacts).map(key =>
                            <div className="edit_profile_item">
                            <label className="edit_profile_label" htmlFor={'contacts.' + key}>{key}: </label>
                            <Field className="default_input edit_profile_input" type={'text'} name={'contacts.' + key}/>
                            <ErrorMessage name={'contacts.' + key}/>
                        </div>)
                        }
                        </div>

                        <button className='default_btn' type={'submit'}>Изменить</button>
                    </Form>
                )}
            </Formik>
        </div>
    </>
}