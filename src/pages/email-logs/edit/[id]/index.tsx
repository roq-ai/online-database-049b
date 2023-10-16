import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useEmailLogsFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { emailLogsValidationSchema } from 'validationSchema/email-logs';
import { EmailLogsInterface } from 'interfaces/email-logs';
import { UserInterface } from 'interfaces/user';

function EmailLogsEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'email_logs',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useEmailLogsFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: EmailLogsInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.email_logs.update({
        data: values as RoqTypes.email_logs,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/email-logs');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<EmailLogsInterface>({
    initialValues: data,
    validationSchema: emailLogsValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Email Logs',
              link: '/email-logs',
            },
            {
              label: 'Update Email Logs',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Email Logs
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.email_subject}
            label={'Email Subject'}
            props={{
              name: 'email_subject',
              placeholder: 'Email Subject',
              value: formik.values?.email_subject,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.email_body}
            label={'Email Body'}
            props={{
              name: 'email_body',
              placeholder: 'Email Body',
              value: formik.values?.email_body,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="sent_at" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Sent At
            </FormLabel>
            <DatePicker
              selected={formik.values?.sent_at ? new Date(formik.values?.sent_at) : null}
              onChange={(value: Date) => formik.setFieldValue('sent_at', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.recipient_email}
            label={'Recipient Email'}
            props={{
              name: 'recipient_email',
              placeholder: 'Recipient Email',
              value: formik.values?.recipient_email,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.sender_email}
            label={'Sender Email'}
            props={{
              name: 'sender_email',
              placeholder: 'Sender Email',
              value: formik.values?.sender_email,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/email-logs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'email_logs',
    operation: AccessOperationEnum.UPDATE,
  }),
)(EmailLogsEditPage);
