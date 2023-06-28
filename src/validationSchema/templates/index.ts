import * as yup from 'yup';

export const templateValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
