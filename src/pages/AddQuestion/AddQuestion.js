import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header, TextInput } from '../../components';
import { addQuestion, resetAddQuestion } from '../../redux/actions';

import { Button } from '../../components/Button/Button.styled';
import {
  StyledAddQuestionWrapper,
  StyledSuccessMessage,
} from './AddQuestion.styled';

const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState('');

  const isQuestionAdded = useSelector(state => state.isQuestionAdded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAddQuestion());
  }, [dispatch]);

  const handleUserChangeQuestion = useCallback((e) => {
    setQuestion(e.target.value);
  }, []);

  const handleUserChangeChoices = useCallback((e) => {
    setChoices(e.target.value);
  }, []);

  const handleAddQuestion = useCallback(() => {
    dispatch(addQuestion({ question, choices: choices && choices.split(',') }));
  }, [choices, dispatch, question]);

  return (
    <>
      <Header title="Add Question" />
      { isQuestionAdded && <StyledSuccessMessage>Question Added successfully!</StyledSuccessMessage> }
      <StyledAddQuestionWrapper>
        <TextInput
          id="add-question"
          value={question}
          label="Please Enter the Question:"
          onChange={handleUserChangeQuestion}
        />
        <TextInput
          id="add-choice"
          value={choices}
          label="Please Enter Choices: (Please enter at least two choices with comma separated)"
          onChange={handleUserChangeChoices}
        />
        <Button onClick={handleAddQuestion}>Add Question</Button>
      </StyledAddQuestionWrapper>
    </>
  );
};

export default AddQuestion;
