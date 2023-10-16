import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  document_type: yup.string().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
