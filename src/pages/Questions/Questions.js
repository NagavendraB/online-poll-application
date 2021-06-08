import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header, QuestionItems } from '../../components';
import { fetchQuestions } from '../../redux/actions';
import { listOfQuestionsSelector } from '../../redux/selectors';

import {
  StyledQuestionsWrapper,
  StyledQuestionsListWrapper,
  StyledButton,
} from './Questions.styled';

const Questions = () => {
  const questions = useSelector(state => listOfQuestionsSelector(state));
  const isLoading = useSelector(state => state.loading);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleQuestionItemClick = url => () => {
    history.push(url);
  };

  const handleAddQuestionClick = useCallback(() => {
    history.push('/add-question');
  }, [history]);

  return (
    <StyledQuestionsWrapper>
      <Header title="Questions" />
      <StyledButton onClick={handleAddQuestionClick}>Add a question</StyledButton>
      <StyledQuestionsListWrapper>
        {isLoading && (
          <>
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
            <QuestionItems.QuestionItemSkeleton />
          </>
        )}
        { questions && questions.map(item =>
          (<QuestionItems.QuestionItem
            question={item.question}
            publishedAt={item.publishedAt}
            choicesLength={item.NoOfChoices}
            onClickQuestionItem={handleQuestionItemClick(item.url)}
          />))}
      </StyledQuestionsListWrapper>
    </StyledQuestionsWrapper>
  );
};

Questions.defaultProps = {
};

Questions.propTypes = {
};

export default Questions;
