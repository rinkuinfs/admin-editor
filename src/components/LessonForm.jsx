import React, { useState, Fragment } from 'react';

import Button from '@atlaskit/button/standard-button';
import TextArea from '@atlaskit/textarea';
import TextField from '@atlaskit/textfield';
import Select from '@atlaskit/select';

import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form';

const LessonForm = (props) => {
  console.log(props);
  const lesson = props.lesson;
  // const [lesson, setLesson] = useState({
  //   title: props.lesson ? props.lesson.title : '',
  //   slug: props.lesson ? props.lesson.slug : '',
  //   lesson_type: props.lesson ? props.lesson.lesson_type : '',
  //   status: props.lesson ? props.lesson.status : '',
  //   content: props.lesson ? props.lesson.content : '',
  //   order: props.lesson ? props.lesson.order : '',
  //   unit: props.lesson ? props.lesson.unit : '',
  // });

  const lessonTypes = [
    { label: 'Text', value: 'text' },
    { label: 'Video', value: 'video' },
    { label: 'Audio', value: 'audio' },
  ];

  const statuses = [
    { label: 'Draft', value: 'draft' },
    { label: 'Published', value: 'published' },
    { label: 'Archived', value: 'archived' },
    { label: 'Unpublish', value: 'unpublish' },
  ];

  const units = [
    { label: 'Unit1-Kids and Adolescent Nutrition', value: 'kids-and-adolescent-nutrition' },
    { label: 'Unit1-Introduction To Health And Nutrition', value: 'introduction-to-health-and-nutrition' },
    { label: 'Unit1-Importance Of Exercise', value: 'importance-of-exercise' },
    { label: 'Unit1-Exercise Science Online Workshop', value: 'exercise-science-online-workshop' },
    { label: 'Unit1-Diet Planning - Online Workshop', value: 'diet-planning-online-workshop' },
    { label: 'Unit1-Ayurvedic Principles for Managing Self', value: 'ayurvedic-principles-for-managing-self' },
    { label: 'Unit1-7 days to Amazing Lifestyle', value: '7-days-to-amazing-lifestyle' },
    { label: 'Unit1-21 Days of Awesomeness', value: '21-days-of-awesomeness' },
    
  ];

  return(
    <div
      style={{
        display: 'flex',
        width: '400px',
        margin: '0 auto',
        flexDirection: 'column',
      }}
    >
      <Form onSubmit={(data) => console.log(data)}>
        {({ formProps }) => (
          <form {...formProps} name="text-fields">
            <Field name="title" defaultValue={lesson.title} label="Title">
              {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>

            <Field name="slug" defaultValue={lesson.slug} label="Slug">
              {({ fieldProps: { isRequired, isDisabled, ...others } }) => (
                <TextField
                  disabled={isDisabled}
                  required={isRequired}
                  {...others}
                />
              )}
            </Field>

            <Field
              name="lesson_type"
              label="Lesson type"
              defaultValue={[lessonTypes.find((el) => el.value === lesson.lesson_type)]}
            >
              {({ fieldProps: { id, ...rest }, error }) => (
                <Fragment>
                  <Select
                    validationState={error ? 'error' : 'default'}
                    inputId={id}
                    {...rest}
                    options={lessonTypes}
                    isClearable
                  />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </Fragment>
              )}
            </Field>

            <Field
              name="status"
              label="Status"
              defaultValue={[statuses.find((el) => el.value === lesson.status)]}
            >
              {({ fieldProps: { id, ...rest }, error }) => (
                <Fragment>
                  <Select
                    validationState={error ? 'error' : 'default'}
                    inputId={id}
                    {...rest}
                    options={statuses}
                    isClearable
                  />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </Fragment>
              )}
            </Field>

            <Field 
              name="content"
              label="Content"
            >
              {({ fieldProps }) => (
                <Fragment>
                  <TextArea
                    placeholder="Enter long form text here"
                    resize="smart"
                    isReadOnly={true}
                    {...fieldProps}
                    value={JSON.stringify(lesson.content)}
                  />
                  <Button type='button' appearance="primary">
                    Edit
                  </Button>
                </Fragment>
              )}
            </Field>

            <Field name="order" defaultValue={lesson.order} label="Order">
              {({ fieldProps }) => <TextField {...fieldProps} type='number' width={100} min={1} />}
            </Field>

            <Field
              name="unit"
              label="Unit"
              defaultValue={[units.find((el) => el.value === lesson.unit)]}
            >
              {({ fieldProps: { id, ...rest }, error }) => (
                <Fragment>
                  <Select
                    validationState={error ? 'error' : 'default'}
                    inputId={id}
                    {...rest}
                    options={units}
                    isClearable
                  />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </Fragment>
              )}
            </Field>

            <FormFooter>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  )
};

export default LessonForm;

