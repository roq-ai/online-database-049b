import * as yup from 'yup';

export const itSupportValidationSchema = yup.object().shape({
  issue_description: yup.string().required(),
  status: yup.string().required(),
  priority: yup.string().nullable(),
  resolved_at: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
