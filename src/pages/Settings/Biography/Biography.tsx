import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import { RichEditor } from 'components';
import { FormikProps, useFormik } from 'formik';
import { isEqual } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { ITalentUpdatePayload } from 'shared/interfaces/ITalent';
import { talentService } from 'shared/services/talentService';
import { convertContent } from 'shared/utils/convertContent';
import { Backdrop, useAlert } from 'themes/elements';
import * as yup from 'yup';

import { useStyles } from './Biography.styles';
const { updateTalent, getBiography } = talentService();
const Biography = () => {
  const classes = useStyles();
  const { isOpen: isAlertOpen, alertRef, AlertOpen } = useAlert({ autoHideDuration: 2000, horizontal: 'center' });
  const { mutate, isLoading: isUpdateLoading } = updateTalent();
  const queryClient = useQueryClient();
  const { data, isLoading } = getBiography();
  const [oldInitialValues, setOldInitialValues] = useState<ITalentUpdatePayload>({ biography: '' });
  const [initialValues, setInitialValues] = useState<ITalentUpdatePayload>({
    biography: '',
  });
  const [oldEditorState, setOldEditorState] = useState(() => {
    return convertContent('');
  });
  const [editorState, setEditorState] = useState(() => {
    return convertContent('');
  });
  const biographyValidationSchema: yup.SchemaOf<ITalentUpdatePayload> = yup.object().shape({
    resume: yup.array(),
    biography: yup.string(),
  });

  const handleUpdateBiography = (values: ITalentUpdatePayload) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries('talents/biography');
        AlertOpen('success', 'Biography has been successfully updated');
      },
    });
  };

  const form: FormikProps<ITalentUpdatePayload> = useFormik({
    initialValues,
    validationSchema: biographyValidationSchema,
    onSubmit: (values) => handleUpdateBiography(values),
    enableReinitialize: true,
  });
  const handleContentChange = (content: string) => {
    form.setFieldValue('biography', content);
  };

  useEffect(() => {
    if (data) {
      if (data.data.attributes.biography) {
        setInitialValues(data.data.attributes);
        setOldInitialValues(data.data.attributes);
        setEditorState(convertContent(data.data.attributes.biography || ''));
        setOldEditorState(convertContent(data.data.attributes.biography || ''));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleReset = () => {
    setEditorState(oldEditorState);
    form.setFieldValue('biography', oldInitialValues.biography);
  };

  return (
    <Box className={classes.container}>
      {isAlertOpen && alertRef}
      {!isLoading && (
        <>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" className={classes.card__title}>
                &nbsp; &nbsp;
              </Typography>

              <RichEditor
                editorState={editorState}
                setEditorState={setEditorState}
                onChange={handleContentChange}
                minHeight={0}
              />
            </CardContent>
          </Card>
          <Box className={classes.actionContainer}>
            <Typography variant="body2" className={classes.note}>
              Note: No external URL’s are permitted in the Biography and will be auto removed when saved.
            </Typography>
            <Box>
              <Button
                variant="outlined"
                disableElevation
                style={{
                  marginRight: '16px',
                  textTransform: 'none',
                }}
                onClick={() => handleReset()}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                disabled={isUpdateLoading || isEqual(form.values.biography, oldInitialValues.biography)}
                onClick={() => form.handleSubmit()}
              >
                Save
              </Button>
            </Box>
          </Box>
        </>
      )}
      <Backdrop isLoading={isLoading || isUpdateLoading} />
    </Box>
  );
};

export default Biography;
