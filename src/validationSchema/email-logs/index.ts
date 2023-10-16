import * as yup from 'yup';

export const emailLogsValidationSchema = yup.object().shape({
  email_subject: yup.string().required(),
  email_body: yup.string().required(),
  sent_at: yup.date().required(),
  status: yup.string().required(),
  recipient_email: yup.string().required(),
  sender_email: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
