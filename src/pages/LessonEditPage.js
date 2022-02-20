import ContentWrapper from "../components/ContentWrapper";
import PageTitle from "../components/PageTitle";

import React, { useState } from 'react';
import LessonForm from '../components/LessonForm';
import Example from "../components/Example";




const LessonEditPage = (props) => {
  const handleOnSubmit = (book) => {
    console.log(book);
  };

  // const lessonToEdit = props.location.state;
  const [lessonToEdit, setLessonToEdit] = useState(props.location.state);
  console.log("12345")
  console.log(lessonToEdit);

  const updateContent = (value) => {
    console.log("updating ....");
    console.log(value);
    console.log(JSON.parse(value));
    setLessonToEdit(prevState => {
      return { ...prevState, content: JSON.parse(value) }
    })
  }

  return (
    <ContentWrapper>
       <PageTitle>Edit Lesson</PageTitle>
        <h2>{`Lesson${lessonToEdit.order}-${lessonToEdit.title}`}</h2>
        <div style={{display: "flex", flexDirection: "row"}}>
            
            <LessonForm lesson={lessonToEdit} />
            <div style={{padding: "20px", borderLeft: "2px solid lightgray"}}> <Example handleUpdateContent={updateContent} data={lessonToEdit.content}/> </div>
        </div>
    </ContentWrapper>
  );
};

export default LessonEditPage;
