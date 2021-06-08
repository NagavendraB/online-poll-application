import { convertISODateToTimeFormat } from '../../helpers';

export const listOfQuestionsSelector = state => state.questions.map(item => ({
  question: item.question,
  publishedAt: convertISODateToTimeFormat(item.published_at),
  NoOfChoices: item.choices.length,
  url: item.url,
}));

export const questionDetailsSelector = (state) => {
  if (Object.keys(state.question).length === 0) {
    return {};
  }
  const totalVotes = state.question.choices.reduce((acc, current) => acc + current.votes, 0);

  return {
    question: state.question.question,
    choices: state.question.choices.map((item) => {
      const percentage = Math.round((parseFloat(item.votes) / parseFloat(totalVotes)) * 100);
      return {
        choice: item.choice,
        votes: item.votes,
        percentage: Number.isNaN(percentage) ? 0 : percentage,
        url: item.url,
      };
    }),
  };
};
