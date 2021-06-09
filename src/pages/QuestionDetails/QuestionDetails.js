import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchQuestionDetails, saveVote } from '../../redux/actions';
import { questionDetailsSelector } from '../../redux/selectors';
import { ChoiceItems, Header } from '../../components';

import {
  StyledQuestion,
  StyledChoicesWrapper,
  StyledLoadingSkeletonWrapper,
} from './QuestionDetails.styled';

const QuestionDetails = () => {
  const question = useSelector(state => questionDetailsSelector(state));
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const { questionNo } = useParams();

  useEffect(() => {
    dispatch(fetchQuestionDetails(questionNo));
  }, [dispatch, questionNo]);

  const handleSaveVote = url => () => {
    dispatch(saveVote(url));
  };

  return (
    <>
      <Header title="Questions Details" />
      <StyledQuestion>Question: {question.question}</StyledQuestion>
      <StyledChoicesWrapper>
        { isLoading && (
          <StyledLoadingSkeletonWrapper data-testid="loading">
            <ChoiceItems.ChoiceItemSkeleton />
            <ChoiceItems.ChoiceItemSkeleton />
            <ChoiceItems.ChoiceItemSkeleton />
          </StyledLoadingSkeletonWrapper>
        ) }
        { !isLoading && question && question.choices && question.choices.map((item, index) => (
          <ChoiceItems.ChoiceItem
            index={index}
            choice={item.choice}
            votes={item.votes}
            percentage={item.percentage}
            onClickSaveVote={handleSaveVote(item.url)}
          />
          )) }
      </StyledChoicesWrapper>
    </>
  );
};

QuestionDetails.defaultProps = {
};

QuestionDetails.propTypes = {
};

export default QuestionDetails;
